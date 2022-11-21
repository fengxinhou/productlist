import React, { useContext, useState } from "react";
import "./card.css";
import { ProductContext } from "../../App";
import Modal from "../Modal/Modal";
import AddOrEdit from "../crud/AddOrEdit";
import Delete from "../crud/Delete";
import { deleteProduct, updateProduct } from "../../api/products";

function Card() {
  const { products, setProducts } = useContext(ProductContext);
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const [deleteProductID, setDeleteProductID] = useState(0);

  const [editId, setEditId] = useState(0);
  const [productUrl, setProductUrl] = useState("");
  const [productName, setProductName] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const handleChangeProductUrl = (url) => {
    setProductUrl(url);
  };
  const handleChangeProductName = (name) => {
    setProductName(name);
  };
  const handleChangeProductDesc = (desc) => {
    setProductDesc(desc);
  };

  const openDeleteModal = (id) => {
    setDeleteModal(true);
    setDeleteProductID(id);
  };

  const openEditModal = (item) => {
    setEditModal(true);
    setEditId(item.id);
    setProductUrl(item.url);
    setProductName(item.name);
    setProductDesc(item.description);
  };

  const confirmEditProduct = async (id) => {
    const newProducts = products.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          url: productUrl,
          name: productName,
          description: productDesc,
        };
      }
      return item;
    });
    setProducts(newProducts);
    await updateProduct(id);
    setEditModal(false);
  };

  const confirmDeleteProduct = async (id) => {
    const newProducts = products.filter((product) => product.id !== id);
    setProducts(newProducts);
    await deleteProduct(id);
    setDeleteModal(false);
  };
  return (
    <>
      {products.map((item) => {
        return (
          <div className="card" key={item.id} role="card">
            <div className="card_product">
              <img src={item.url} alt={`product-${item.name}`} />
              <div className="content">
                <span onMouseOver={(e) => (e.target.title = item.name)}>
                  {item.name}
                </span>
                <p onMouseOver={(e) => (e.target.title = item.description)}>
                  {item.description}
                </p>
              </div>
            </div>
            <div className="option">
              <button onClick={() => openEditModal(item)}>编辑</button>
              <button onClick={() => openDeleteModal(item.id)}>删除</button>
            </div>
          </div>
        );
      })}
      <Modal
        title="Edit Product"
        open={editModal}
        onClose={() => setEditModal(false)}
        onConfirm={() => confirmEditProduct(editId)}
      >
        <AddOrEdit
          productUrl={productUrl}
          productName={productName}
          productDesc={productDesc}
          handleChangeProductUrl={handleChangeProductUrl}
          handleChangeProductName={handleChangeProductName}
          handleChangeProductDesc={handleChangeProductDesc}
        />
      </Modal>
      <Modal
        title="Delete Product"
        open={deleteModal}
        onClose={() => setDeleteModal(false)}
        onConfirm={() => confirmDeleteProduct(deleteProductID)}
      >
        <Delete />
      </Modal>
    </>
  );
}

export default Card;
