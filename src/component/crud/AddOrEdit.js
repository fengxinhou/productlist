import React from "react";

function AddOrEdit(props) {
  const {
    productUrl,
    productName,
    productDesc,
    handleChangeProductUrl,
    handleChangeProductName,
    handleChangeProductDesc,
  } = props;

  const handleChangeUrl = (e) => {
    const productUrl = e.target.value;
    handleChangeProductUrl(productUrl);
  };
  const handleChangeName = (e) => {
    const productName = e.target.value;
    handleChangeProductName(productName);
  };
  const handleChangeDesc = (e) => {
    const productDesc = e.target.value;
    handleChangeProductDesc(productDesc);
  };

  return (
    <>
      <form className="addForm">
        <div className="product_info">
          <label>
            avatar url：
            <input
              type="url"
              value={productUrl}
              onMouseOver={(e) => (e.target.title = productUrl)}
              // onChange={(e) => {
              //   setProductUrl(e.target.value);
              // }}
              onChange={handleChangeUrl}
            />
          </label>
        </div>
        <div className="product_info">
          <label>
            product name：
            <input
              type="text"
              value={productName}
              onMouseOver={(e) => (e.target.title = productName)}
              // onChange={(e) => {
              //   setProductName(e.target.value);
              // }}
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
              value={productDesc}
              onMouseOver={(e) => (e.target.title = productDesc)}
              // onChange={(e) => {
              //   setProductDesc(e.target.value);
              // }}
              onChange={handleChangeDesc}
            />
          </label>
        </div>
      </form>
      {/*<Footer onClose={onClose} onConfirm={handleConfirm} />*/}
    </>
  );
}

export default AddOrEdit;
