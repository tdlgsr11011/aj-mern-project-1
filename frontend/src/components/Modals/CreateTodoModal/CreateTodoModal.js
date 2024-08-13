import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import styles from "./CreateTodoModal.module.scss";
import buttonStyles from "../../../styles/Button.module.scss";

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
      <form onSubmit={handleSubmit(onSubmit)} className={styles.ModalContent}>
        <div>
          <label htmlFor="todoTitle">Title</label>
          <input
            id="todoTitle"
            defaultValue="My Todo"
            {...register("title", { required: true })}
          />
          <label htmlFor="todoDescription">Description</label>
          <input
            defaultValue="Todo Description"
            id="todoDescription"
            {...register("description")}
          />
        </div>
        <div>
          <button
            type="submit"
            className={`${buttonStyles.default} ${buttonStyles.primary}`}
          >
            Create
          </button>
          <button
            onClick={props.closeModal}
            className={`${buttonStyles.default} ${buttonStyles.destructiveInverse} ${styles.Cancel}`}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTodoModal;
