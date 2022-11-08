import React, { useEffect, useState } from "react";
import "./productList.css";
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
      {products.map((item) => {
        return (
          <div className="card" key={item.id}>
            <div className="card_product">
              <i className="iconfont">{item.icon}</i>
              <div className="content">
                <span>{item.title}</span>
                <p>{item.content}</p>
              </div>
            </div>
            <div className="option">
              <button>编辑</button>
              <button>删除</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
