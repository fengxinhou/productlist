import React from "react";
import "./card.css";

function Card(props) {
  return (
    <>
      {props.products.map((item) => {
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
    </>
  );
}

export default Card;
