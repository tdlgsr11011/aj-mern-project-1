const { TODOS } = require("../models/todo");

const handleTodoCreation = async (req, res) => {
  const body = req.body;
  let todos = await TODOS.find({});
  if (todos.length == 10) {
    return res.status(400).json({
      error: {
        message: "There are already 10 items present, try deleting some items.",
      },
    });
  }

  await TODOS.create({
    title: body.title,
    description: body.description,
    isDone: false,
  });

  todos = await TODOS.find({});
  return res.json({ todos: todos });
};

const handleFetchTodos = async (req, res) => {
  const todos = await TODOS.find({});
  return res.json({ todos: todos });
};

const handleUpdateTodo = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  await TODOS.updateOne(
    { _id: id },
    {
      $set: {
        isDone: body.isDone,
      },
    }
  );

  const todos = await TODOS.find({});
  return res.json({ todos: todos });
};

const handleDeleteTodo = async (req, res) => {
  const id = req.params.id;
  await TODOS.deleteOne({ _id: id });
  const todos = await TODOS.find({});
  return res.json({ todos: todos });
};

module.exports = {
  handleTodoCreation,
  handleFetchTodos,
  handleUpdateTodo,
  handleDeleteTodo,
};
