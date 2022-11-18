import React, { useState } from "react";
import Footer from "./Footer";

function AddOrEdit(props) {
  const { editProduct, onClose, confirmAddProduct, confirmEditProduct } = props;
  const { id, url, name, description } = editProduct;
  const [productUrl, setProductUrl] = useState(() => url);
  const [productName, setProductName] = useState(() => name);
  const [productDesc, setProductDesc] = useState(() => description);

  const handleConfirm = () => {
    if (id) {
      confirmEditProduct(id, productUrl, productName, productDesc);
    } else {
      confirmAddProduct(productUrl, productName, productDesc);
    }
  };
  return (
    <>
      <form className="addForm">
        <div className="product_info">
          <label>
            avatar url：
            <input
              type="url"
              value={productUrl}
              onMouseOver={(e) => (e.target.title = productUrl)}
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
              onMouseOver={(e) => (e.target.title = productName)}
              onChange={(e) => {
                setProductName(e.target.value);
              }}
            />
          </label>
        </div>
        <div className="product_info">
          <label>
            desc：
            <textarea
              className="edit_textarea"
              rows="3"
              value={productDesc}
              onMouseOver={(e) => (e.target.title = productDesc)}
              onChange={(e) => {
                setProductDesc(e.target.value);
              }}
            />
          </label>
        </div>
      </form>
      <Footer onClose={onClose} onConfirm={handleConfirm} />
    </>
  );
}

export default AddOrEdit;
