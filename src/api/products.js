import axios from "axios";

const URL = "http://localhost:3000/products";

export const getProduct = () => axios.get(URL).then((res) => res.data);

export const addProduct = (newProduct) =>
  axios.post(URL, newProduct).then((res) => res.data);
export const deleteProduct = (id) => axios.delete(`${URL}/${id}`);

export const updateProduct = (
  id,
  editProductUrl,
  editProductName,
  editProductDesc
) =>
  axios.put(`${URL}/${id}`, {
    url: editProductUrl,
    name: editProductName,
    description: editProductDesc,
  });
