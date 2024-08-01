import React, { useState } from "react";

const Todo = (props) => {
  const toggleDone = async () => {
    fetch(`http://localhost:5000/todos/${props.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: props.todoTitle,
        description: props.todoDescription,
        isDone: !props.isDone,
      }),
    })
      .then((r) => r.json())
      .then((r) => r)
      .catch((e) => console.log(e));
  };

  return (
    <li>
      <div>{props.todoTitle}</div>
      <div>{props.todoDescription}</div>
      <button onClick={toggleDone}>
        {props.isDone ? "Mark Undone" : "Mark Done"}
      </button>
    </li>
  );
};

export default Todo;
