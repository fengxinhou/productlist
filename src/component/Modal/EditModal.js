import React, { useContext, useEffect, useState } from "react";
import "./addModal.css";
import { ProductContext } from "../../App";
import axios from "axios";

function EditModal(props) {
  const { products, setProducts } = useContext(ProductContext);
  const { visible, onClose, editProduct, confirmEditProduct } = props;
  const [editProductUrl, setEditProductUrl] = useState("");
  const [editProductName, setEditProductName] = useState("");
  const [editProductDesc, setEditProductDesc] = useState("");

  const { id, url, name, description } = editProduct;
  const URL = "http://localhost:3000/products";
  useEffect(() => {
    if (visible) {
      setEditProductUrl(url);
      setEditProductName(name);
      setEditProductDesc(description);
    }
  }, [visible, editProduct, url, name, description]);
  const handleClickEditProduct = () => {
    if (editProductUrl && editProductName && editProductDesc) {
      axios
        .put(`${URL}/${id}`, {
          url: editProductUrl,
          name: editProductName,
          description: editProductDesc,
        })
        .then((res) => res.status);
      const newProducts = products.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            url: editProductUrl,
            name: editProductName,
            description: editProductDesc,
          };
        }
        return item;
      });
      setProducts(newProducts);
    }
    confirmEditProduct();
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
                  value={editProductUrl}
                  onChange={(e) => {
                    setEditProductUrl(e.target.value);
                  }}
                />
              </label>
            </div>
            <div className="product_info">
              <label>
                product name：
                <input
                  type="text"
                  value={editProductName}
                  onChange={(e) => {
                    setEditProductName(e.target.value);
                  }}
                />
              </label>
            </div>
            <div className="product_info">
              <label>
                desc：
                <input
                  type="text"
                  value={editProductDesc}
                  onChange={(e) => {
                    setEditProductDesc(e.target.value);
                  }}
                />
              </label>
            </div>
          </form>
          <div className="modal_option">
            <button onClick={onClose}>Cancel</button>
            <button onClick={handleClickEditProduct}>OK</button>
          </div>
        </div>
      </>
    )
  );
}

export default EditModal;
