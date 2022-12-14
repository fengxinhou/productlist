import { fireEvent, render } from "@testing-library/react";
import AddOrEdit from "./AddOrEdit";
import "@testing-library/jest-dom";
import React from "react";

const mockHandleChange = jest.fn();
describe("initially AddOrEdit", () => {
  const product = {
    id: 0,
    url: "",
    name: "",
    description: "",
  };

  test("input should be empty initially", () => {
    const { getByRole } = render(
      <AddOrEdit product={product} handleChangeProduct={mockHandleChange} />
    );
    const input = getByRole("textbox", { name: "desc：" });
    expect(input).toHaveValue("");
  });
});

describe("render AddOrEdit", () => {
  const product1 = {
    id: 0,
    url: "测试url",
    name: "测试name",
    description: "测试description",
  };
  let element = null;
  beforeEach(() => {
    element = render(
      <AddOrEdit product={product1} handleAddOrEditProduct={mockHandleChange} />
    );
  });

  afterEach(() => {
    element = null;
  });

  test("input should have default value when initially", () => {
    const { getByRole } = element;
    const input = getByRole("textbox", { name: "desc：" });
    expect(input).toHaveValue("测试description");
  });

  test("input should update when input a new value", async () => {
    const { getByLabelText, getByDisplayValue } = element;
    const hasInputValue = (e, inputValue) => {
      return getByDisplayValue(inputValue) === e;
    };
    const input = getByLabelText("product name：");
    fireEvent.change(input, { target: { value: "测试name" } });

    expect(hasInputValue(input, "测试name")).toBe(true);
  });

  test("input should loader context when onMouseOver", async () => {
    const { getByLabelText, getByDisplayValue } = element;
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

  test("should change input value by mockHandleChange", () => {
    const { getByLabelText } = element;
    const inputUrl = getByLabelText("avatar url：");
    expect(inputUrl).toBeInTheDocument();
    fireEvent.change(inputUrl, { target: { value: "change url" } });
    expect(mockHandleChange).toHaveBeenCalledWith({
      description: "测试description",
      id: 0,
      name: "测试name",
      url: "change url",
    });
    const inputName = getByLabelText("product name：");
    expect(inputName).toBeInTheDocument();
    fireEvent.change(inputName, { target: { value: "change name" } });
    expect(mockHandleChange).toHaveBeenCalledWith({
      description: "测试description",
      id: 0,
      name: "change name",
      url: "测试url",
    });
    const inputDesc = getByLabelText("desc：");
    expect(inputDesc).toBeInTheDocument();
    fireEvent.change(inputDesc, { target: { value: "change desc" } });

    expect(mockHandleChange).toHaveBeenCalledWith({
      description: "change desc",
      id: 0,
      name: "测试name",
      url: "测试url",
    });
  });
});
