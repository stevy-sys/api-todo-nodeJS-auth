const Todo = require("../models/Todo");

exports.getAllTodo = (req, res) => {
  Todo.find()
    .then((todos) => res.status(200).json(todos))
    .catch((error) => res.status(400).json(error));
};
