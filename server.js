// const jsonServer = require("json-server");
// const server = jsonServer.create();
// const router = jsonServer.router("db.json");
// const middlewares = jsonServer.defaults();

// const port = process.env.PORT || 3001;

// server.use(middlewares);
// server.use(router);

// server.listen(port);

// Import required modules using ES module syntax
import jsonServer from "json-server";

// Create a JSON Server instance
const server = jsonServer.create();

// Set the JSON Server router
const router = jsonServer.router("db.json");

// Set middlewares
const middlewares = jsonServer.defaults();

// Use middlewares
server.use(middlewares);
server.use(router);

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
