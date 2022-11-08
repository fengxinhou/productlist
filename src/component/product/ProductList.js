import React from "react";
import { WaterMark } from "@ant-design/pro-components";
import "./productList.css";

function ProductList(props) {
  return (
    <WaterMark content="Serati Ma">
      <div className="main">卡片</div>
    </WaterMark>
  );
}

export default ProductList;
