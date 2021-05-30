const express = require("express");
const mongoose = require("mongoose");
const TodoRouter = require("./routes/TodoRouter");
const UserRouter = require("./routes/UserRouter");
const bodyParser = require("body-parser");
const app = express();

//initialisatin de base de donne
mongoose
  .connect("mongodb://localhost:27017/todo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connexion a mondodb reussie"))
  .catch((error) => console.log(error));

//middleware parse json de chaque request
app.use(bodyParser.json());

//middleware en tete a chaque request
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

//route
app.use("/api/todo/", TodoRouter);
app.use("/api/auth/", UserRouter);

module.exports = app;
