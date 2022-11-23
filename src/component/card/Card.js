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

  const [product, setProduct] = useState({
    id: 0,
    url: "",
    name: "",
    description: "",
  });

  const openDeleteModal = (id) => {
    setDeleteModal(true);
    setDeleteProductID(id);
  };

  const openEditModal = (item) => {
    setEditModal(true);
    setProduct({
      id: item.id,
      url: item.url,
      name: item.name,
      description: item.description,
    });
  };

  const handleChangeEditProduct = (values) => {
    setProduct(values);
    const newProducts = products.map((item) => {
      if (item.id === values.id) {
        return {
          ...item,
          url: product.url,
          name: product.name,
          description: product.description,
        };
      }
      return item;
    });
    setProducts(newProducts);
  };

  const confirmEditProduct = async ({ id, url, name, description }) => {
    await updateProduct(id, url, name, description);
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
                <span
                  title="span_title"
                  onMouseOver={(e) => (e.target.title = item.name)}
                >
                  {item.name}
                </span>
                <p
                  title="p_title"
                  onMouseOver={(e) => (e.target.title = item.description)}
                >
                  {item.description}
                </p>
              </div>
            </div>
            <div className="option">
              <button
                data-testid="edit_btn"
                onClick={() => openEditModal(item)}
              >
                编辑
              </button>
              <button
                data-testid="delete_btn"
                onClick={() => openDeleteModal(item.id)}
              >
                删除
              </button>
            </div>
          </div>
        );
      })}
      <Modal
        title="Edit Product"
        open={editModal}
        onClose={() => setEditModal(false)}
        onConfirm={() => confirmEditProduct(product)}
      >
        <AddOrEdit
          product={product}
          handleChangeProduct={handleChangeEditProduct}
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
