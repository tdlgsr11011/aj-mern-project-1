import React from "react";
import Todo from "./Todo";

const Todos = (props) => {
  return (
    <ul>
      {props.todos.map((todo) => (
        <Todo
          todoTitle={todo.title}
          todoDescription={todo.description}
          isDone={todo.isDone}
          key={todo._id}
          id={todo._id}
        />
      ))}
    </ul>
  );
};

export default Todos;
