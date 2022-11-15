import axios from "axios";
import { getProduct } from "./products";

jest.mock("axios");
describe("products api", () => {
  test("should return all products data when getProduct called", async () => {
    const mockData = [];
    axios.get.mockResolvedValue({ data: mockData });
    const result = await getProduct();
    expect(result).toEqual(mockData);
  });
});
