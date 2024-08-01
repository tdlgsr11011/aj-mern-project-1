import React, { useState } from "react";

const Todo = (props) => {
  const [isDone, setIsDone] = useState(props.isDone);
  const toggleDone = () => {
    setIsDone(!isDone);
    fetch(`http://localhost:5000/todos/${props.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        title: props.todoTitle,
        description: props.todoDescription,
        isDone: isDone,
      },
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
        {isDone ? "Mark Undone" : "Mark Done"}
      </button>
    </li>
  );
};

export default Todo;
