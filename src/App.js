import "./App.css";
import Catalogue from "./component/category/Catalogue";

function App() {
  return (
    <div className="App">
      <h1>产品列表</h1>
      <p>目前项目在跟进的产品</p>
      <Catalogue />
    </div>
  );
}

export default App;
