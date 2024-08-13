import React from "react";

import styles from "./TodoHeader.module.scss";

const TodoHeader = (props) => {
  return (
    <header className={styles.TodoHeader}>
      <h1>Todo App</h1>
      <button onClick={props.openModal}>Create Todo</button>
    </header>
  );
};

export default TodoHeader;
