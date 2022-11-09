import React, { useContext, useState } from "react";
import "./productList.css";
import Card from "../card/Card";
import AddModal from "../Modal/AddModal";
import { ProductContext } from "../../App";

function ProductList(props) {
  const { addNewProduct } = props;
  const products = useContext(ProductContext);
  const [addModal, setAddModal] = useState(false);

  const addProduct = (productUrl, productName, productDesc) => {
    const newProduct = {
      id: products.length > 0 ? products[products.length - 1].id + 1 : 0,
      url: productUrl,
      name: productName,
      description: productDesc,
    };
    addNewProduct(newProduct);
    setAddModal(false);
  };

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
      <Card products={products} />
      <AddModal
        visible={addModal}
        onClose={() => {
          setAddModal(false);
        }}
        addProduct={addProduct}
      />
    </div>
  );
}

export default ProductList;
