const express = require("express");
const TodoController = require("../controllers/TodoController");
const TokenSecurity = require("../middlewares/TokenSecurity");
const router = express.Router();

router.get("/", TokenSecurity, TodoController.getAllTodo);

module.exports = router;
