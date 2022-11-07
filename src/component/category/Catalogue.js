import React from "react";

function Catalogue() {
  const category = [
    { icon: "\ue991", name: "快速开始" },
    { icon: "\ue693", name: "产品简介" },
    { icon: "\ue99c", name: "产品文档" },
  ];
  return (
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
  );
}

export default Catalogue;
