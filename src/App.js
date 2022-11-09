import "./App.css";
import Header from "./component/header/Header";
import ProductList from "./component/product/ProductList";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ProductContext = createContext({});

function App() {
  const URL = "http://localhost:3000/products";
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get(URL).then((res) => {
      setProducts(res.data);
    });
  }, []);

  const addNewProduct = (product) => {
    axios.post(URL, product).then((res) => {
      setProducts([...products, res.data]);
    });
  };

  return (
    <ProductContext.Provider value={products}>
      <div className="app">
        <Header />
        <ProductList addNewProduct={addNewProduct} />
      </div>
    </ProductContext.Provider>
  );
}

export default App;
