import React, { useEffect } from "react";
import "./productList.css";
import axios from "axios";

function ProductList(props) {
  useEffect(() => {
    axios.get("http://localhost:3000/lists").then((res) => {
      console.log(res.data);
    });
  }, []);
  return (
    <div className="main">
      <div className="newCard">
        <span>新增产品</span>
      </div>
      <div className="card">
        <div className="card_product">
          <i className="iconfont">&#xe879;</i>
          <div className="content">
            <span>title</span>
            <p>
              支付宝（中国）网络技术有限公司成立于2004年，是国内的第三方支付平台，致力于为企业和个人提供'简单、安全、快速、便捷'的支付解决方案。
              支付宝公司从2004年建立开始，始终以'信任'作为产品和服务的核心。
              旗下有'支付宝'与'支付宝钱包'两个独立品牌。
              自2014年第二季度开始成为当前全球最大的移动支付厂商。
            </p>
          </div>
        </div>
        <div className="option">
          <button>编辑</button>
          <button>删除</button>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
