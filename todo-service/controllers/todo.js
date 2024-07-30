const { TODOS } = require("../models/todo");

const handleTodoCreation = async (req, res) => {
  const body = req.body;

  await TODOS.create({
    title: body.title,
    description: body.description,
    isDone: false,
  });

  return res.end("TODO created");
};

const handleFetchTodos = async (req, res) => {
  const todos = await TODOS.find({});
  return res.json({
    todos: todos,
  });
};

module.exports = {
  handleTodoCreation,
  handleFetchTodos,
};
