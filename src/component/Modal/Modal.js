import React from "react";
import "./modal.css";

function Modal({ children }) {
  const { visible, onClose, onConfirm } = children.props;
  console.log(children.props);

  return (
    visible && (
      <>
        <div className="mask" />
        <div className="modal_main">
          {<>{children}</>}
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
