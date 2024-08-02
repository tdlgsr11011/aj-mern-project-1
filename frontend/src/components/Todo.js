import React from "react";
import { updateTodos } from "../thunk/todoThunk";
import { useDispatch, useSelector } from "react-redux";

const Todo = (props) => {
  const loading = useSelector((state) => state.todoState.status === "loading");
  const dispatch = useDispatch();
  const toggleDone = (id, body) => dispatch(updateTodos({ id, body }));

  return (
    <li>
      <div>{props.title}</div>
      <div>{props.description}</div>
      <button
        onClick={() =>
          toggleDone(props.id, {
            title: props.title,
            description: props.description,
            isDone: !props.isDone,
          })
        }
        disabled={loading}
      >
        {props.isDone ? "Mark Undone" : "Mark Done"}
      </button>
    </li>
  );
};

export default Todo;
