import React from "react";
import "./header.css";

function Header() {
  const category = [
    { icon: "\ue991", name: "快速开始" },
    { icon: "\ue693", name: "产品简介" },
    { icon: "\ue99c", name: "产品文档" },
  ];
  return (
    <div className="header">
      <h1>产品列表</h1>
      <p>目前项目在跟进的产品</p>
      <div className="catalogue">
        {category.map((item, index) => {
          return (
            <div className="catalogue_list" key={index}>
              <i className="iconfont">{item.icon}</i>
              <span>{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Header;
