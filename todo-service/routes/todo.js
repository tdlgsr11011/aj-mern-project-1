const express = require("express");
const {
  handleFetchTodos,
  handleTodoCreation,
  handleUpdateTodo,
  handleDeleteTodo,
} = require("../controllers/todo");

const router = express.Router();

router.get("/", handleFetchTodos);
router.post("/", handleTodoCreation);
router.put("/:id", handleUpdateTodo);
router.delete("/:id", handleDeleteTodo);

module.exports.todosRouter = router;
