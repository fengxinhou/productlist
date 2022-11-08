import React, { useState } from "react";
import "./card.css";
import DeleteModal from "../Modal/DeleteModal";
import EditModal from "../Modal/EditModal";

function Card(props) {
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const openDeleteModal = (id) => {
    console.log(id);
    setDeleteModal(true);
  };
  const closeDeleteModal = () => {
    setDeleteModal(false);
  };

  const openEditModal = () => {
    setEditModal(true);
  };
  const closeEditModal = () => {
    setEditModal(false);
  };
  return (
    <>
      {props.products.map((item) => {
        return (
          <div className="card" key={item.id}>
            <div className="card_product">
              <i className="iconfont">{item.icon}</i>
              <div className="content">
                <span>{item.name}</span>
                <p>{item.description}</p>
              </div>
            </div>
            <div className="option">
              <button onClick={openEditModal}>编辑</button>
              <button onClick={() => openDeleteModal(item.id)}>删除</button>
            </div>
          </div>
        );
      })}
      <DeleteModal visible={deleteModal} onClose={closeDeleteModal} />
      <EditModal visible={editModal} onClose={closeEditModal} />
    </>
  );
}

export default Card;
