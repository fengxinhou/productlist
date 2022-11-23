import React, { useContext, useState } from "react";
import "./productList.css";
import Card from "../card/Card";
import Modal from "../Modal/Modal";
import AddOrEdit from "../crud/AddOrEdit";
import { ProductContext } from "../../App";
import { addProduct } from "../../api/products";

function ProductList() {
  const [modal, setModal] = useState(false);
  const { products, setProducts } = useContext(ProductContext);

  const [product, setProduct] = useState({
    id: 0,
    url: "",
    name: "",
    description: "",
  });

  const handleChangeProduct = (item) => {
    setProduct({
      id: products.length > 0 ? products[products.length - 1].id + 1 : 0,
      url: item.url,
      name: item.name,
      description: item.description,
    });
  };

  const confirmAddProduct = async () => {
    await addProduct(product);
    setProducts([...products, product]);
    setModal(false);
    setProduct({ id: 0, url: "", name: "", description: "" });
  };

  const closeModal = () => {
    setProduct({ id: 0, url: "", name: "", description: "" });
    setModal(false);
  };

  return (
    <div className="main">
      <div className="newCard">
        <button
          data-testid="add_btn"
          onClick={() => {
            setModal(true);
          }}
        >
          新增产品
        </button>
      </div>
      <Card />
      <Modal
        title="Add Product"
        open={modal}
        onClose={closeModal}
        onConfirm={confirmAddProduct}
      >
        <AddOrEdit
          product={product}
          handleChangeProduct={handleChangeProduct}
        />
      </Modal>
    </div>
  );
}

export default ProductList;
