import React, { useState } from "react";
import "./addModal.css";

function EditModal(props) {
  const { visible, onClose } = props;
  const [productUrl, setProductUrl] = useState("");
  const [productName, setProductName] = useState("");
  const [productDesc, setProductDesc] = useState("");

  return (
    visible && (
      <>
        <div className="mask" />
        <div className="add_modal">
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
            <button>OK</button>
          </div>
        </div>
      </>
    )
  );
}

export default EditModal;
