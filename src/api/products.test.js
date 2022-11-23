import axios from "axios";
import {
  addProduct,
  deleteProduct,
  getProduct,
  updateProduct,
} from "./products";

jest.mock("axios");
const mockData = [
  {
    id: 1,
    url: "https://pic.616pic.com/ys_img/00/03/78/04RotuWM2Y.jpg",
    name: "test",
    description: "测试测试测试测试测试测试测试测试",
  },
];
describe("get products", () => {
  test("should return empty product list when API call fails", async () => {
    const message = "Network Error";
    axios.get.mockImplementationOnce(() => Promise.reject(new Error(message)));
    await expect(getProduct()).rejects.toThrow(message);
  });
  test("return productList when getProduct is called", async () => {
    axios.get.mockResolvedValue({ data: mockData });
    const result = await getProduct();
    expect(result).toEqual(mockData);
  });
});

describe("post products", () => {
  test("return productList when addProduct is called", async () => {
    const newData = [
      {
        id: 2,
        url: "https://pic.616pic.com/ys_img/00/03/78/04RotuWM2Y.jpg",
        name: "test01",
        description: "测试测试测试",
      },
    ];
    axios.post.mockResolvedValue({ data: newData });
    const result = await addProduct(newData);
    expect(result).toEqual(newData);
  });
});

describe("put products", () => {
  test("return a new productList when editProduct is called", async () => {
    const editData = [
      {
        id: 2,
        url: "https://pic.616pic.com/ys_img/00/03/78/04RotuWM2Y.jpg",
        name: "test02",
        description: "修改测试",
      },
    ];
    const { id, url, name, description } = editData;
    axios.put.mockResolvedValue(200);
    const result = await updateProduct(id, url, name, description);
    expect(result).toEqual(200);
  });
});

describe("delete products", () => {
  test("return a new products when deleteProduct is called", async () => {
    axios.delete.mockResolvedValue(200);
    const result = await deleteProduct(1);
    expect(result).toEqual(200);
  });
});
