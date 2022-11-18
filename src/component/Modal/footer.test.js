import { render } from "@testing-library/react";
import Footer from "./Footer";
import "@testing-library/jest-dom";

test("handles error for scoops and toppings routes", async () => {
  const { getByRole, getByText } = render(<Footer />);
  expect(getByRole("button", { name: "cancel" })).toBeInTheDocument();
  expect(getByText("Cancel")).toBeInTheDocument();
});
