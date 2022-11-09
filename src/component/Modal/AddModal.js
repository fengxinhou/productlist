import React, { useContext, useState } from "react";
import "./addModal.css";
import { ProductContext } from "../../App";
import axios from "axios";

function AddModal(props) {
  const { products, setProducts } = useContext(ProductContext);
  const { visible, onClose, addProduct } = props;
  const [productUrl, setProductUrl] = useState("");
  const [productName, setProductName] = useState("");
  const [productDesc, setProductDesc] = useState("");

  const URL = "http://localhost:3000/products";
  const addNewProduct = () => {
    if (productUrl && productName && productDesc) {
      const newProduct = {
        id: products.length > 0 ? products[products.length - 1].id + 1 : 0,
        url: productUrl,
        name: productName,
        description: productDesc,
      };
      axios
        .post(URL, newProduct)
        .then((res) => res.data)
        .then((data) => {
          setProducts([...products, data]);
        });
      setProductUrl("");
      setProductName("");
      setProductDesc("");
    }
    addProduct();
  };
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
            <button onClick={addNewProduct}>OK</button>
          </div>
        </div>
      </>
    )
  );
}

export default AddModal;
