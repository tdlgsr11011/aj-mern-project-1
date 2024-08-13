import React from "react";
import Todo from "../Todo/Todo";
import styles from "./Todos.module.scss";

const Todos = (props) => {
  return (
    <ul className={styles.Todos}>
      {props.todos.map((todo) => (
        <Todo
          title={todo.title}
          description={todo.description}
          isDone={todo.isDone}
          key={todo._id}
          id={todo._id}
        />
      ))}
    </ul>
  );
};

export default Todos;
