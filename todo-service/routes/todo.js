const express = require("express");
const {
  handleFetchTodos,
  handleTodoCreation,
  handleUpdateTodo,
} = require("../controllers/todo");

const router = express.Router();

router.get("/", handleFetchTodos);
router.post("/", handleTodoCreation);
router.put("/:id", handleUpdateTodo);

module.exports.todosRouter = router;
