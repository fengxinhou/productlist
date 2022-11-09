import React, { useContext } from "react";
import "./deleteModal.css";
import { ProductContext } from "../../App";
import { deleteProduct } from "../../api/products";

function DeleteModal(props) {
  const { products, setProducts } = useContext(ProductContext);
  const { visible, onClose, deleteProductID, confirmDeleteProduct } = props;

  const handleDeleteProduct = (id) => {
    deleteProduct(id).then((status) => status);
    setProducts(products.filter((item) => item.id !== id));
    confirmDeleteProduct();
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
            <button onClick={() => handleDeleteProduct(deleteProductID)}>
              confirm
            </button>
          </div>
        </div>
      </>
    )
  );
}

export default DeleteModal;
