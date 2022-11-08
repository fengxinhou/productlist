import React, { useEffect, useState } from "react";
import "./productList.css";
import Card from "../card/Card";
import axios from "axios";
import Modal from "../Modal/Modal";

function ProductList(props) {
  const [products, setProducts] = useState([]);
  const [addModal, setAddModal] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:3000/products").then((res) => {
      setProducts(res.data);
    });
  }, []);
  const addNewProduct = () => {
    setAddModal(true);
  };

  const handleCloseModal = () => {
    setAddModal(false);
  };

  return (
    <div className="main">
      <div className="newCard">
        <button onClick={addNewProduct}>新增产品</button>
      </div>
      <Card products={products} />
      <Modal visible={addModal} onClose={handleCloseModal} />
    </div>
  );
}

export default ProductList;
