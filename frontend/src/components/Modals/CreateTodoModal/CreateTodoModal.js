import React from "react";

import styles from "./CreateTodoModal.module.css";

const CreateTodoModal = (props) => {
  return (
    <div className={styles.ModalOverlay}>
      <div className={styles.ModalContent}>
        <div>Create Todo Modal</div>
        <button onClick={props.closeModal}>Cancel</button>
      </div>
    </div>
  );
};

export default CreateTodoModal;
