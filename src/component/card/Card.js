import React, { useContext, useState } from "react";
import "./card.css";
import DeleteModal from "../Modal/DeleteModal";
import EditModal from "../Modal/EditModal";
import { ProductContext } from "../../App";

function Card(props) {
  const products = useContext(ProductContext);
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [deleteProductID, setDeleteProductID] = useState({});
  const openDeleteModal = (id) => {
    setDeleteModal(true);
    setDeleteProductID(id);
  };

  const openEditModal = () => {
    setEditModal(true);
  };

  return (
    <>
      {products.map((item) => {
        return (
          <div className="card" key={item.id}>
            <div className="card_product">
              <img src={item.url} alt={item.name} />
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
      <DeleteModal
        visible={deleteModal}
        onClose={() => {
          setDeleteModal(false);
        }}
        deleteProductID={deleteProductID}
        deleteStatus={(value) => {
          setDeleteModal(value);
        }}
      />
      <EditModal
        visible={editModal}
        onClose={() => {
          setEditModal(false);
        }}
      />
    </>
  );
}

export default Card;
