const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema({
  todo: { type: String, required: true },
  date: { type: Date },
  userId: { type: Number },
  achever: { type: Boolean },
  etat: { type: Boolean },
});

module.exports = mongoose.model("todo", TodoSchema, "Todos");
