import React, { useEffect, useState } from "react";
import "./deleteModal.css";
import axios from "axios";

function DeleteModal(props) {
  const { visible, onClose, deleteProductID, deleteStatus } = props;
  const [itemId, setItemID] = useState(0);
  const URL = "http://localhost:3000/products";
  useEffect(() => {
    if (visible) {
      setItemID(deleteProductID);
    }
  }, [visible, deleteProductID]);
  const handleDeleteProduct = (itemId) => {
    axios.delete(`${URL}/${itemId}`).then((res) => {
      alert("删除成功!");
    });
    deleteStatus(false);
  };

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
            <button onClick={() => handleDeleteProduct(itemId)}>confirm</button>
          </div>
        </div>
      </>
    )
  );
}

export default DeleteModal;
