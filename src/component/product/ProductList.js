import React, { useContext, useState } from "react";
import "./productList.css";
import Card from "../card/Card";
import Modal from "../Modal/Modal";
import AddOrEdit from "../Modal/AddOrEdit";
import { ProductContext } from "../../App";
import { addProduct } from "../../api/products";

function ProductList() {
  const [modal, setModal] = useState(false);
  const { products, setProducts } = useContext(ProductContext);

  const confirmAddProduct = async (productUrl, productName, productDesc) => {
    if (productUrl && productName && productDesc) {
      const newProduct = {
        id: products.length > 0 ? products[products.length - 1].id + 1 : 0,
        url: productUrl,
        name: productName,
        description: productDesc,
      };
      await addProduct(newProduct);
      setProducts([...products, newProduct]);
    }
    setModal(false);
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
      <Modal title="add Product" open={modal}>
        <AddOrEdit
          onClose={() => setModal(false)}
          confirmAddProduct={confirmAddProduct}
          editProduct={{ url: "", name: "", description: "" }}
        />
      </Modal>
    </div>
  );
}

export default ProductList;
