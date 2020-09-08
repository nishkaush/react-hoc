import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

export default (props) => {
  let clickedNode = null;
  const handleClose = (e) => {
    if (!clickedNode.contains(e.target)) {
      props.closeModal(false);
    }
  };

  return ReactDOM.createPortal(
    <aside className={styles.outerContainer} onClick={(e) => handleClose(e)}>
      <div className={styles.modal} ref={(node) => (clickedNode = node)}>
        {props.children}
      </div>
    </aside>,
    document.body
  );
};
