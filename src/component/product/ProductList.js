import React, { useState } from "react";
import "./productList.css";
import Card from "../card/Card";
import AddModal from "../Modal/AddModal";

function ProductList() {
  const [addModal, setAddModal] = useState(false);

  return (
    <div className="main">
      <div className="newCard">
        <button
          onClick={() => {
            setAddModal(true);
          }}
        >
          新增产品
        </button>
      </div>
      <Card />
      <AddModal
        visible={addModal}
        onClose={() => {
          setAddModal(false);
        }}
        closeAddModal={() => {
          setAddModal(false);
        }}
      />
    </div>
  );
}

export default ProductList;
