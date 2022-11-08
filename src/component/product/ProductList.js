import React, { useEffect, useState } from "react";
import "./productList.css";
import Card from "../card/Card";
import axios from "axios";
import AddModal from "../Modal/AddModal";

function ProductList(props) {
  const [products, setProducts] = useState([]);
  const [addModal, setAddModal] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:3000/products").then((res) => {
      setProducts(res.data);
    });
  }, []);
  const openAddModal = () => {
    setAddModal(true);
  };

  const closeAddModal = () => {
    setAddModal(false);
  };
  const addProduct = (productUrl, productName, productDesc) => {
    const newProduct = {
      id: products.length > 0 ? products[products.length - 1].id + 1 : 0,
      icon: "\ue607",
      name: productName,
      description: productDesc,
    };
    axios.post("http://localhost:3000/products", newProduct).then((res) => {
      setProducts([...products, res.data]);
    });
    setAddModal(false);
  };

  return (
    <div className="main">
      <div className="newCard">
        <button onClick={openAddModal}>新增产品</button>
      </div>
      <Card products={products} />
      <AddModal
        visible={addModal}
        onClose={closeAddModal}
        addProduct={addProduct}
      />
    </div>
  );
}

export default ProductList;
