import React, { useContext, useState } from "react";
import "./card.css";
import { ProductContext } from "../../App";
import Modal from "../Modal/Modal";
import AddOrEdit from "../Modal/AddOrEdit";
import Delete from "../Modal/Delete";

function Card() {
  const { products } = useContext(ProductContext);
  const [deleteModal, setDeleteModal] = useState(false);
  const [modal, setModal] = useState(false);
  const [deleteProductID, setDeleteProductID] = useState(0);
  const [editProduct, setEditProduct] = useState({});

  const openDeleteModal = (id) => {
    setDeleteModal(true);
    setDeleteProductID(id);
  };

  const openEditModal = (product) => {
    setModal(true);
    setEditProduct(product);
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
      <Modal>
        <Delete
          visible={deleteModal}
          onClose={() => {
            setDeleteModal(false);
          }}
          deleteProductID={deleteProductID}
          onConfirm={() => {
            setDeleteModal(false);
          }}
        />
      </Modal>
      <Modal>
        <AddOrEdit
          editProduct={editProduct}
          visible={modal}
          onClose={() => setModal(false)}
          onConfirm={() => {
            setModal(false);
          }}
        />
      </Modal>
    </>
  );
}

export default Card;
