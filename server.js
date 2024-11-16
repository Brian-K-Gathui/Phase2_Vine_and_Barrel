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

// Use multer to handle multipart form-data
server.use(upload);


// Use JSON-Server router
server.use(router);

// Start the server
server.listen(4000, () => {
    console.log("JSON Server is running at http://localhost:4000/");
});
