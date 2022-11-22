import { fireEvent, render } from "@testing-library/react";
import AddOrEdit from "./AddOrEdit";
import "@testing-library/jest-dom";

const mockHandleChange = jest.fn();
describe("AddOrEdit", () => {
  const product = {
    id: 0,
    url: "",
    name: "",
    description: "",
  };
  const product1 = {
    id: 0,
    url: "测试url",
    name: "测试name",
    description: "测试description",
  };

  test("input should be empty initially", () => {
    const { getByRole } = render(
      <AddOrEdit product={product} handleChangeProduct={mockHandleChange} />
    );
    const input = getByRole("textbox", { name: "desc：" });
    expect(input).toHaveValue("");
  });

  test("input should have default value when initially", () => {
    const { getByRole } = render(
      <AddOrEdit product={product1} handleChangeProduct={mockHandleChange} />
    );
    const input = getByRole("textbox", { name: "desc：" });
    expect(input).toHaveValue("测试description");
  });

  test("input should update when input a new value", async () => {
    const { getByLabelText, getByDisplayValue } = render(
      <AddOrEdit product={product1} handleChangeProduct={mockHandleChange} />
    );
    const hasInputValue = (e, inputValue) => {
      return getByDisplayValue(inputValue) === e;
    };
    const input = getByLabelText("product name：");
    fireEvent.change(input, { target: { value: "测试name" } });
    expect(hasInputValue(input, "测试name")).toBe(true);
  });

  test("input should loader context when onMouseOver", async () => {
    const { getByLabelText, getByDisplayValue } = render(
      <AddOrEdit product={product1} handleChangeProduct={mockHandleChange} />
    );
    const hasInputValue = (e, inputValue) => {
      return getByDisplayValue(inputValue) === e;
    };
    const inputName = getByLabelText("product name：");
    fireEvent.mouseOver(inputName);
    expect(hasInputValue(inputName, "测试name")).toBeTruthy();

    const inputUrl = getByLabelText("avatar url：");
    fireEvent.mouseOver(inputUrl);
    expect(hasInputValue(inputUrl, "测试url")).toBeTruthy();

    const inputDesc = getByLabelText("desc：");
    fireEvent.mouseOver(inputDesc);
    expect(hasInputValue(inputDesc, "测试description")).toBeTruthy();
  });
});
