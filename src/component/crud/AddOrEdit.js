import React from "react";

function AddOrEdit(props) {
  const { product, handleChangeProduct } = props;
  const { url, name, description } = product;
  const handleChangeUrl = (e) => {
    const productUrl = e.target.value;
    const newProduct = {
      ...product,
      url: productUrl,
    };
    handleChangeProduct(newProduct);
  };
  const handleChangeName = (e) => {
    const productName = e.target.value;
    const newProduct = {
      ...product,
      name: productName,
    };
    handleChangeProduct(newProduct);
  };
  const handleChangeDesc = (e) => {
    const productDesc = e.target.value;
    const newProduct = {
      ...product,
      description: productDesc,
    };
    handleChangeProduct(newProduct);
  };

  return (
    <>
      <form className="addForm">
        <div className="product_info">
          <label>
            avatar url：
            <input
              type="url"
              value={url}
              onMouseOver={(e) => (e.target.title = url)}
              onChange={handleChangeUrl}
            />
          </label>
        </div>
        <div className="product_info">
          <label>
            product name：
            <input
              type="text"
              value={name}
              onMouseOver={(e) => (e.target.title = name)}
              onChange={handleChangeName}
            />
          </label>
        </div>
        <div className="product_info">
          <label>
            desc：
            <textarea
              className="edit_textarea"
              rows="3"
              value={description}
              onMouseOver={(e) => (e.target.title = description)}
              onChange={handleChangeDesc}
            />
          </label>
        </div>
      </form>
    </>
  );
}

export default AddOrEdit;
