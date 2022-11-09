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

  return (
    <ProductContext.Provider
      value={{ products: products, setProducts: setProducts }}
    >
      <div className="app">
        <Header />
        <ProductList />
      </div>
    </ProductContext.Provider>
  );
}

export default App;
