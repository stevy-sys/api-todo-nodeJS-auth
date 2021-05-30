const http = require("http");
//import app from "./app.js";

const app = require("./app");
const normalizePort = (val) => {
  //10 : nombre a base de 10
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
};

//verification du type du port
const port = normalizePort(process.env.PORT || "3000");

//configuration du port
app.set("port", port);

//gestion des erreur
const errorHandler = (error) => {
  if (error.syscall !== "listen") {
    throw error;
  }

  const address = server.address();
  const bind = typeof address === "string" ? "pipe" + adress : "port" + port;

  switch (error.code) {
    case "EACCES":
      console.error(bind + "requires elevated privileges");
      break;
    case "EADDRINUSE":
      console.error(bind + "is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

//creation du server
const server = http.createServer(app);
server.on("error", errorHandler);
server.on("listening", () => {
  const address = server.address(); // { address : '::' , family : 'IPv6' , port : 3000 }
  const bind = typeof address === "string" ? "pipe" + address : "port " + port;
  console.log("listening on " + bind);
});

server.listen(port);
