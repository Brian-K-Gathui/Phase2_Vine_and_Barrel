const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const multer = require("multer");

// Middleware configuration
server.use(middlewares);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/images"); 
    },
    filename: function (req, file, cb) {
        const sanitizedFilename = file.originalname.replace(/\s+/g, "-"); 
        req.body.picture = sanitizedFilename; 
        cb(null, sanitizedFilename); 
    },
});

// Create the upload middleware
const upload = multer({ storage }); // <-- Add this line

// Use multer to handle multipart form-data
server.use(upload.single('picture')); // Specify the form field name for the file

// POST handler for /products to handle validation and image upload
server.post("/products", (req, res, next) => {
    if (req.method === "POST") {
        req.body.createdAt = Date.now();
        if (!req.body.picture) {
            req.body.picture = ""; 
        }
        // Basic server-side validation
        let hasErrors = false;
        const errors = {};
        // Validate required fields
        if (!req.body.name || req.body.name.length < 2) {
            hasErrors = true;
            errors.name = "Name must be at least 2 characters.";
        }
        if (!req.body.year || isNaN(Number(req.body.year))) {
            hasErrors = true;
            errors.year = "Year must be a valid number.";
        }
        if (!req.body.stock || isNaN(Number(req.body.stock))) {
            hasErrors = true;
            errors.stock = "Stock must be a valid number.";
        }
        if (!req.body.price || isNaN(Number(req.body.price))) {
            hasErrors = true;
            errors.price = "Price must be a valid number.";
        }
        if (hasErrors) {
            return res.status(400).json(errors);
        }
        next();
    }
});

// Use JSON-Server router
server.use(router);

// Start the server
server.listen(4000, () => {
    console.log("JSON Server is running at http://localhost:4000/");
});
