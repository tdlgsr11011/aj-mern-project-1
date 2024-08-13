import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import styles from "./CreateTodoModal.module.scss";

import { createTodo } from "../../../reducer/thunk/todoThunk";

const CreateTodoModal = (props) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(createTodo({ body: data }));
    props.closeModal();
  };

  return (
    <div className={styles.ModalOverlay}>
      <div className={styles.ModalContent}>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              defaultValue="My Todo"
              {...register("title", { required: true })}
            />
            <input
              defaultValue="Todo Description"
              {...register("description")}
            />
            <div>
              <button type="submit">Create</button>
              <button onClick={props.closeModal}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateTodoModal;
