import React from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Todo.module.scss";
import buttonStyles from "../../styles/Button.module.scss";
import { updateTodos, deleteTodo } from "../../thunk/todoThunk";

const Todo = (props) => {
  const status = useSelector((state) => state.todoState.status);
  const loading = status === "loading";
  const dispatch = useDispatch();
  const toggleDone = () =>
    dispatch(
      updateTodos({
        id: props.id,
        body: {
          title: props.title,
          description: props.description,
          isDone: !props.isDone,
        },
      })
    );

  const handleDelete = () => {
    dispatch(deleteTodo({ id: props.id }));
  };

  return (
    <li className={styles.Todo}>
      <div className={styles.TodoTitle}>{props.title}</div>
      <div className={styles.TodoDescription}>{props.description}</div>
      <button
        className={`${styles.TodoToggle} ${buttonStyles.small}`}
        onClick={toggleDone}
        disabled={loading}
      >
        {props.isDone ? "Mark Undone" : "Mark Done"}
      </button>
      <button
        className={`${styles.TodoDelete} ${buttonStyles.small}`}
        onClick={handleDelete}
      >
        Delete
      </button>
    </li>
  );
};

export default Todo;
