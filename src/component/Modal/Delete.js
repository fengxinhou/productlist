import React from "react";
import "./delete.css";
import Footer from "./Footer";
function Delete(props) {
  const { onClose, onConfirm } = props;
  return (
    <div className="delete">
      <p>Are you sure you want to delete this product?</p>
      <Footer onClose={onClose} onConfirm={onConfirm} />
    </div>
  );
}

export default Delete;
