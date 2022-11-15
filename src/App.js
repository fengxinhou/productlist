import "./App.css";
import Header from "./component/header/Header";
import ProductList from "./component/product/ProductList";
import { createContext, useEffect, useState } from "react";
import { getProduct } from "./api/products";

export const ProductContext = createContext({});

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProduct().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      <div className="app">
        <Header />
        <ProductList />
      </div>
    </ProductContext.Provider>
  );
}

export default App;
