import React, { useState } from "react";
import "./card.css";
import DeleteModal from "../Modal/DeleteModal";

function Card(props) {
  const [deleteModal, setDeleteModal] = useState(false);
  const openDeleteModal = () => {
    setDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setDeleteModal(false);
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
              <button>编辑</button>
              <button onClick={openDeleteModal}>删除</button>
            </div>
          </div>
        );
      })}
      <DeleteModal visible={deleteModal} onClose={closeDeleteModal} />
    </>
  );
}

export default Card;
