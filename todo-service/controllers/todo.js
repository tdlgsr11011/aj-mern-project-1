const { TODOS } = require("../models/todo");

const handleTodoCreation = async (req, res) => {
  const body = req.body;
  console.log(body);

  await TODOS.create({
    title: body.title,
    description: body.description,
    isDone: false,
  });

  const todos = await TODOS.find({});
  return res.json(todos);
};

const handleFetchTodos = async (req, res) => {
  const todos = await TODOS.find({});
  return res.json(todos);
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
  return res.json(todos);
};

const handleDeleteTodo = async (req, res) => {
  const id = req.params.id;
  await TODOS.deleteOne({ _id: id });
  const todos = await TODOS.find({});
  return res.json(todos);
};

module.exports = {
  handleTodoCreation,
  handleFetchTodos,
  handleUpdateTodo,
  handleDeleteTodo,
};
