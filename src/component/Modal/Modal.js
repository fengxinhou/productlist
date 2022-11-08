import React, { useState } from "react";
import "./modal.css";

function Modal(props) {
  const { visible, onClose, addProduct } = props;
  const [productUrl, setProductUrl] = useState("");
  const [productName, setProductName] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const addNewProduct = () => {
    if (productUrl && productName && productDesc) {
      addProduct(productUrl, productName, productDesc);
    }
  };
  return (
    visible && (
      <>
        <div className="mask" />
        <div className="modal">
          <div className="title">
            <p>Add Product</p>
          </div>
          <form className="addForm">
            <div className="product_info">
              <label>
                avatar url：
                <input
                  type="url"
                  value={productUrl}
                  onChange={(e) => {
                    setProductUrl(e.target.value);
                  }}
                />
              </label>
            </div>
            <div className="product_info">
              <label>
                product name：
                <input
                  type="text"
                  value={productName}
                  onChange={(e) => {
                    setProductName(e.target.value);
                  }}
                />
              </label>
            </div>
            <div className="product_info">
              <label>
                desc：
                <input
                  type="text"
                  value={productDesc}
                  onChange={(e) => {
                    setProductDesc(e.target.value);
                  }}
                />
              </label>
            </div>
          </form>
          <div className="modal_option">
            <button onClick={onClose}>Cancel</button>
            <button onClick={addNewProduct}>OK</button>
          </div>
        </div>
      </>
    )
  );
}

export default Modal;
