import { render } from "@testing-library/react";
import Card from "./Card";
import React from "react";
import { ProductContext } from "../../App";
import "@testing-library/jest-dom";

describe("productList", () => {
  let mockProduct = [
    {
      id: 1,
      url: "https://pic.616pic.com/ys_img/00/03/78/04RotuWM2Y.jpg",
      name: "Alipay",
      description:
        "支付宝（中国）网络技术有限公司成立于2004年，是国内的第三方支付平台，致力于为企业和个人提供'简单、安全、快速、便捷'的支付解决方案。 支付宝公司从2004年建立开始，始终以'信任'作为产品和服务的核心。 旗下有'支付宝'与'支付宝钱包'两个独立品牌。 自2014年第二季度开始成为当前全球最大的移动支付厂商。",
    },
    {
      id: 2,
      url: "https://pic.616pic.com/ys_img/00/03/78/04RotuWM2Y.jpg",
      name: "react",
      description:
        "支付宝（中国）网络技术有限公司成立于2004年，是国内的第三方支付平台，致力于为企业和个人提供'简单、安全、快速、便捷'的支付解决方案。 支付宝公司从2004年建立开始，始终以'信任'作为产品和服务的核心。 旗下有'支付宝'与'支付宝钱包'两个独立品牌。 自2014年第二季度开始成为当前全球最大的移动支付厂商。",
    },
  ];
  const { getAllByRole, getAllByText } = render(
    <ProductContext.Provider value={{ products: mockProduct }}>
      <Card />
    </ProductContext.Provider>
  );
  test("should render mockProduct list", () => {
    const items = getAllByRole("card");
    expect(items.length).toEqual(2);
  });

  test("should render two edit button when have two products", () => {
    const editBtn = getAllByText("编辑");
    expect(editBtn).toHaveLength(2);
  });
});
