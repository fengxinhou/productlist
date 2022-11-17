import React, { useEffect, useState } from "react";

function AddOrEdit(props) {
  const { editProduct } = props;

  const [productUrl, setProductUrl] = useState("");
  const [productName, setProductName] = useState("");
  const [productDesc, setProductDesc] = useState("");

  const { id, url, name, description } = editProduct;

  useEffect(() => {
    setProductUrl(url);
    setProductName(name);
    setProductDesc(description);
  }, [editProduct, url, name, description]);

  return (
    <>
      <header>
        <p>{id ? "Edit Product" : "Add Product"}</p>
      </header>
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
    </>
  );
}

export default AddOrEdit;
