import React, { useContext, useEffect, useState } from "react";
import "./addModal.css";
import { ProductContext } from "../../App";
import { updateProduct } from "../../api/products";

function EditModal(props) {
  const { products, setProducts } = useContext(ProductContext);
  const { visible, onClose, editProduct, confirmEditProduct } = props;
  const [editProductUrl, setEditProductUrl] = useState("");
  const [editProductName, setEditProductName] = useState("");
  const [editProductDesc, setEditProductDesc] = useState("");

  const { id, url, name, description } = editProduct;

  useEffect(() => {
    if (visible) {
      setEditProductUrl(url);
      setEditProductName(name);
      setEditProductDesc(description);
    }
  }, [visible, editProduct, url, name, description]);

  const handleClickEditProduct = () => {
    if (editProductUrl && editProductName && editProductDesc) {
      updateProduct(id, url, name, description).then((status) => status);
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
            <p>Edit Product</p>
          </div>
          <form className="addForm">
            <div className="product_info">
              <label>
                avatar url：
                <input
                  type="url"
                  value={editProductUrl}
                  onMouseOver={(e) => (e.target.title = editProductUrl)}
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
                  onMouseOver={(e) => (e.target.title = editProductName)}
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
                  onMouseOver={(e) => (e.target.title = editProductDesc)}
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
