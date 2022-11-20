import React from "react";
import "./modal.css";

function Modal(props) {
  const { open, title, children, onClose, onConfirm } = props;

  return (
    open && (
      <>
        <div className="mask" />
        <div className="modal_main">
          <header>{title}</header>
          {children}
          <footer>
            <button onClick={onClose}>Cancel</button>
            <button onClick={onConfirm}>OK</button>
          </footer>
        </div>
      </>
    )
  );
}

export default Modal;
