import React from "react";
import "./modal.css";

function Modal(props) {
  const { open, title, children } = props;

  return (
    open && (
      <>
        <div className="mask" />
        <div className="modal_main">
          <header>{title}</header>
          {children}
        </div>
      </>
    )
  );
}

export default Modal;
