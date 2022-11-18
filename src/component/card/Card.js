import React, { useContext, useState } from "react";
import "./card.css";
import { ProductContext } from "../../App";
import Modal from "../Modal/Modal";
import AddOrEdit from "../Modal/AddOrEdit";
import Delete from "../Modal/Delete";
import { deleteProduct, updateProduct } from "../../api/products";

function Card() {
  const { products, setProducts } = useContext(ProductContext);
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const [deleteProductID, setDeleteProductID] = useState(0);
  const [editProduct, setEditProduct] = useState({});

  const openDeleteModal = (id) => {
    setDeleteModal(true);
    setDeleteProductID(id);
  };

  const openEditModal = (product) => {
    setEditModal(true);
    setEditProduct(product);
  };
  const confirmEditProduct = async (
    id,
    productUrl,
    productName,
    productDesc
  ) => {
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
    await updateProduct(id);
    setProducts(newProducts);
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
          <div className="card" key={item.id}>
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
        onConfirm={confirmEditProduct}
      >
        <AddOrEdit
          editProduct={editProduct}
          onClose={() => setEditModal(false)}
          confirmEditProduct={confirmEditProduct}
        />
      </Modal>
      <Modal title="Delete Product" open={deleteModal}>
        <Delete
          onClose={() => setDeleteModal(false)}
          onConfirm={() => confirmDeleteProduct(deleteProductID)}
        />
      </Modal>
    </>
  );
}

export default Card;
