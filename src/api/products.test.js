import axios from "axios";
import { getProduct } from "./products";

jest.mock("axios");
describe("get products", () => {
  test("should return empty product list when API call fails", async () => {
    const message = "Network Error";
    axios.get.mockImplementationOnce(() => Promise.reject(new Error(message)));
    await expect(getProduct()).rejects.toThrow(message);
  });
  test("return productList when getProduct is called", async () => {
    const mockData = [
      {
        id: 1,
        url: "https://pic.616pic.com/ys_img/00/03/78/04RotuWM2Y.jpg",
        name: "test",
        description: "测试测试测试测试测试测试测试测试",
      },
    ];
    axios.get.mockResolvedValue({ data: mockData });
    const result = await getProduct();
    expect(result).toEqual(mockData);
  });
});
