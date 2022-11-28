import React, { useContext, useState } from "react";
import "./productList.css";
import Modal from "../Modal/Modal";
import AddOrEdit from "../crud/AddOrEdit";
import { ProductContext } from "../../App";
import { addProduct, deleteProduct, updateProduct } from "../../api/products";
import Delete from "../crud/Delete";

function ProductList() {
  const [modal, setModal] = useState(false);
  const { products, setProducts } = useContext(ProductContext);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteProductID, setDeleteProductID] = useState(0);

  const [product, setProduct] = useState({});

  const openDeleteModal = (id) => {
    setDeleteModal(true);
    setDeleteProductID(id);
  };

  const openAddOrEditModal = (item) => {
    setModal(true);
    setProduct(item);
  };
  const handleAddOrEditProduct = (values) => {
    if (values.id === -1) {
      const newProduct = {
        id: products.length > 0 ? products[products.length - 1].id + 1 : 0,
        url: values.url,
        name: values.name,
        description: values.description,
      };
      setProduct(newProduct);
    } else {
      const newProducts = products.map((item) => {
        if (item.id === values.id) {
          return {
            ...item,
            url: values.url,
            name: values.name,
            description: values.description,
          };
        }
        return item;
      });
      setProduct(values);
      setProducts(newProducts);
    }
  };

  const confirmAddOrEditProduct = async (values) => {
    const { id, url, name, description } = values;
    if (id === products[products.length - 1].id + 1) {
      await addProduct(values);
      setProducts([...products, values]);
      setModal(false);
      setProduct({ url: "", name: "", description: "" });
    } else {
      await updateProduct(id, url, name, description);
      setModal(false);
    }
  };
  const confirmDeleteProduct = async (id) => {
    const newProducts = products.filter((product) => product.id !== id);
    setProducts(newProducts);
    await deleteProduct(id);
    setDeleteModal(false);
  };

  const closeModal = () => {
    setProduct({ id: -1, url: "", name: "", description: "" });
    setModal(false);
  };

  return (
    <div className="main">
      <div className="newCard">
        <button
          data-testid="add_btn"
          onClick={() =>
            openAddOrEditModal({ id: -1, url: "", name: "", description: "" })
          }
        >
          新增产品
        </button>
      </div>
      {products.map((item) => {
        return (
          <div className="card" key={item.id} role="card">
            <div className="card_product">
              <img src={item.url} alt={`product-${item.name}`} />
              <div className="content">
                <span
                  title="span_title"
                  onMouseOver={(e) => (e.target.title = item.name)}
                >
                  {item.name}
                </span>
                <p
                  title="p_title"
                  onMouseOver={(e) => (e.target.title = item.description)}
                >
                  {item.description}
                </p>
              </div>
            </div>
            <div className="option">
              <button
                data-testid="edit_btn"
                onClick={() => openAddOrEditModal(item)}
              >
                编辑
              </button>
              <button
                data-testid="delete_btn"
                onClick={() => openDeleteModal(item.id)}
              >
                删除
              </button>
            </div>
          </div>
        );
      })}
      <Modal
        title={product.id !== -1 ? "Edit Product" : "Add Product"}
        open={modal}
        onClose={closeModal}
        onConfirm={() => confirmAddOrEditProduct(product)}
      >
        <AddOrEdit
          product={product}
          handleAddOrEditProduct={handleAddOrEditProduct}
        />
      </Modal>
      <Modal
        title="Delete Product"
        open={deleteModal}
        onClose={() => setDeleteModal(false)}
        onConfirm={() => confirmDeleteProduct(deleteProductID)}
      >
        <Delete />
      </Modal>
    </div>
  );
}

export default ProductList;
