import React from "react";
import "./delete.css";
function Delete() {
  return (
    <div className="delete">
      <header>
        <i className="iconfont">&#xe693;</i>
        <span>Confirm</span>
      </header>
      <p>Are you sure you want to delete this product?</p>
    </div>
  );
}

export default Delete;
