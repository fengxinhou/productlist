import axios from "axios";
import { addProduct, getProduct } from "./products";

jest.mock("axios");
describe("products api", () => {
  test("should return all products data when getProduct called", async () => {
    const mockData = [];
    axios.get.mockResolvedValue({ data: mockData });
    const result = await getProduct();
    expect(result).toEqual(mockData);
  });
  test("should add a new product when addProduct called", async () => {
    const mockProduct = {
      id: 1,
      url: "https://pic.616pic.com/ys_img/00/59/14/iTKHNNaGO3.jpg",
      name: "test",
      description: "测试测试测试测试测试",
    };
    axios.post.mockResolvedValue({ data: mockProduct });
    const result = await addProduct(mockProduct);
    expect(result).toEqual(mockProduct);
  });
});
