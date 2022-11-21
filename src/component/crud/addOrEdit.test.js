import { render } from "@testing-library/react";
import AddOrEdit from "./AddOrEdit";
import "@testing-library/jest-dom";

describe("AddOrEdit", () => {
  const product = {
    id: 0,
    url: "",
    name: "",
    description: "",
  };
  const product1 = {
    id: 0,
    url: "",
    name: "测试初始值",
    description: "测试初始值",
  };
  test("input should be empty initially", () => {
    const { getByRole } = render(<AddOrEdit product={product} />);
    const input = getByRole("textbox", { name: "desc：" });
    expect(input).toHaveValue("");
  });
  test("input should have default value when initially", () => {
    const { getByRole } = render(<AddOrEdit product={product1} />);
    const input = getByRole("textbox", { name: "desc：" });
    expect(input).toHaveValue("测试初始值");
  });
});
