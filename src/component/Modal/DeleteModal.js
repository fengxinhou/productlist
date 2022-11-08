import React from "react";
import "./deleteModal.css";

function DeleteModal(props) {
  const { visible, onClose } = props;
  const deleteProduct = () => {};
  return (
    visible && (
      <>
        <div className="mask" />
        <div className="delete_modal">
          <div className="title">
            <i className="iconfont">&#xe693;</i>
            <span>Confirm</span>
          </div>
          <p>Are you sure you want to delete this product?</p>
          <div className="modal_option">
            <button onClick={onClose}>Cancel</button>
            <button onClick={deleteProduct}>confirm</button>
          </div>
        </div>
      </>
    )
  );
}

export default DeleteModal;
