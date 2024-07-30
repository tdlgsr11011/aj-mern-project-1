const express = require("express");
const { handleFetchTodos, handleTodoCreation } = require("../controllers/todo");

const router = express.Router();

router.get("/", handleFetchTodos);
router.post("/", handleTodoCreation);

module.exports.todosRouter = router;
