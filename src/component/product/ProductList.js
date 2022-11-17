import React, { useState } from "react";
import "./productList.css";
import Card from "../card/Card";
import Modal from "../Modal/Modal";
import AddOrEdit from "../Modal/AddOrEdit";

function ProductList() {
  const [modal, setModal] = useState(false);

  return (
    <div className="main">
      <div className="newCard">
        <button
          onClick={() => {
            setModal(true);
          }}
        >
          新增产品
        </button>
      </div>
      <Card />
      <Modal>
        <AddOrEdit
          visible={modal}
          onClose={() => setModal(false)}
          onConfirm={() => {
            setModal(false);
          }}
          editProduct={""}
        />
      </Modal>
    </div>
  );
}

export default ProductList;
