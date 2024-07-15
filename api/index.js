const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("data/db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT;

server.use(middlewares);
server.use(router);
module.exports = server;
