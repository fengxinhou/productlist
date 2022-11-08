import React, { useEffect, useState } from "react";
import "./productList.css";
import Card from "../card/Card";
import axios from "axios";

function ProductList(props) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/lists").then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <div className="main">
      <div className="newCard">
        <span>新增产品</span>
      </div>
      <Card products={products} />
    </div>
  );
}

export default ProductList;
