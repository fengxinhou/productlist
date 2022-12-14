import { fireEvent, render, waitFor } from "@testing-library/react";
import { ProductContext } from "../../App";
import "@testing-library/jest-dom";

import ProductList from "./ProductList";
import userEvent from "@testing-library/user-event";
const mockProduct = [
  {
    id: 1,
    url: "https://pic.616pic.com/ys_img/00/03/78/04RotuWM2Y.jpg",
    name: "test1",
    description: "测试测试测试测试测试测试测试测试测试测试",
  },
  {
    id: 2,
    url: "https://pic.616pic.com/ys_img/00/03/78/04RotuWM2Y.jpg",
    name: "test2",
    description:
      "支付宝（中国）网络技术有限公司成立于2004年，是国内的第三方支付平台，致力于为企业和个人提供'简单、安全、快速、便捷'的支付解决方案。 支付宝公司从2004年建立开始，始终以'信任'作为产品和服务的核心。 旗下有'支付宝'与'支付宝钱包'两个独立品牌。 自2014年第二季度开始成为当前全球最大的移动支付厂商。",
  },
];
const mockSetProduct = jest.fn();

describe("test productList component", () => {
  let element = null;
  beforeEach(() => {
    element = render(
      <ProductContext.Provider
        value={{ products: mockProduct, setProducts: mockSetProduct }}
      >
        <ProductList />
      </ProductContext.Provider>
    );
  });
  afterEach(() => {
    element = null;
  });
  test("should render productList component", () => {
    expect(element).toBeDefined();
  });

  test("should render add modal when click add button", async () => {
    const { getByTestId, getByText } = element;
    const addBtn = getByTestId("add_btn");
    fireEvent.click(addBtn);
    await waitFor(() => {
      expect(getByText("Add Product")).toBeInTheDocument();
    });
  });
  test("should render mockProduct list", () => {
    const items = element.getAllByRole("card");
    expect(items.length).toEqual(2);
  });

  test("should render edit modal when click edit button", async () => {
    const editBtn = element.getAllByTestId("edit_btn");
    userEvent.click(editBtn[0]);
    await waitFor(() => {
      expect(element.getByText("Edit Product")).toBeInTheDocument();
    });
  });

  test("should render delete modal when click delete button", async () => {
    const deleteBtn = element.getAllByTestId("delete_btn")[0];
    userEvent.click(deleteBtn);
    await waitFor(() => {
      expect(
        element.getByText("Are you sure you want to delete this product?")
      ).toBeInTheDocument();
    });
  });

  test("should loader context when onMouseOver", async () => {
    const { getAllByTitle, getByText } = element;

    const spanContent = getAllByTitle("span_title");
    fireEvent.mouseOver(spanContent[0]);
    expect(getByText("test1")).toBeInTheDocument();

    const pContent = getAllByTitle("p_title");
    fireEvent.mouseOver(pContent[1]);
    expect(
      getByText("测试测试测试测试测试测试测试测试测试测试")
    ).toBeInTheDocument();
  });

  test("should change edit product", async () => {
    const { getByLabelText } = element;
    const editBtn = element.getAllByTestId("edit_btn");
    userEvent.click(editBtn[0]);
    const input = getByLabelText("avatar url：");
    fireEvent.change(input, { target: { value: "change url" } });
    expect(mockSetProduct).toBeCalledWith(
      expect.arrayContaining([
        expect.objectContaining({ id: 1, url: "change url" }),
      ])
    );
  });
});
