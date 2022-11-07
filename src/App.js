import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>产品列表</h1>
      <p>目前项目在跟进的产品</p>
      <div>
        <div>
          <i className="iconfont icon-kuaisugaoxiao"></i>
          <span>快速开始</span>
        </div>
        <div>
          <i className="iconfont icon-info-circle"></i>
          <span>产品简介</span>
        </div>
        <div>
          <i className="iconfont icon-wendang"></i>
          <span>产品文档</span>
        </div>
      </div>
    </div>
  );
}

export default App;
