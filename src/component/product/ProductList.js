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

  const [productUrl, setProductUrl] = useState("");
  const [productName, setProductName] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const handleChangeProductUrl = (url) => {
    setProductUrl(url);
  };
  const handleChangeProductName = (name) => {
    setProductName(name);
  };
  const handleChangeProductDesc = (desc) => {
    setProductDesc(desc);
  };

  const confirmAddProduct = async () => {
    const newProduct = {
      id: products.length > 0 ? products[products.length - 1].id + 1 : 0,
      url: productUrl,
      name: productName,
      description: productDesc,
    };
    await addProduct(newProduct);
    setProducts([...products, newProduct]);
    setModal(false);
    setProductUrl("");
    setProductName("");
    setProductDesc("");
  };

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
      <Modal
        title="add Product"
        open={modal}
        onClose={() => setModal(false)}
        onConfirm={confirmAddProduct}
      >
        <AddOrEdit
          productUrl={productUrl}
          productName={productName}
          productDesc={productDesc}
          handleChangeProductUrl={handleChangeProductUrl}
          handleChangeProductName={handleChangeProductName}
          handleChangeProductDesc={handleChangeProductDesc}
        />
      </Modal>
    </div>
  );
}

export default ProductList;
