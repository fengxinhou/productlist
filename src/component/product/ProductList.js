import React, { useEffect } from "react";
import "./productList.css";
import axios from "axios";

function ProductList(props) {
  useEffect(() => {
    axios.get("http://localhost:3000/lists").then((res) => {
      console.log(res.data);
    });
  }, []);
  return <div className="main">卡片</div>;
}

export default ProductList;
