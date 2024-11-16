const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Middleware configuration
server.use(middlewares);

// Use JSON-Server router
server.use(router);

// Start the server
server.listen(4000, () => {
    console.log("JSON Server is running at http://localhost:4000/");
});
