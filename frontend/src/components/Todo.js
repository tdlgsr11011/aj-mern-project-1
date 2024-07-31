import React from "react";

const Todo = (props) => {
  return (
    <li>
      <div>{props.todoTitle}</div>
      <div>{props.todoDescription}</div>
      <div>{props.isDone}</div>
    </li>
  );
};

export default Todo;
