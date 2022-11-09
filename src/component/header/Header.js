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
      <div className="header_title">
        <h1>产品列表</h1>
        <p>目前项目在跟进的产品</p>
        <img
          src="data:image/jpeg;base64,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"
          alt="logo"
        />
      </div>
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
