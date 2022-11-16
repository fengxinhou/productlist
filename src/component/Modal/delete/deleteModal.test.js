import DeleteModal from "./DeleteModal";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("deleteModal", () => {
  test("initialized the page the content will not be displayed", () => {
    render(<DeleteModal />);
    const pText = screen.queryByText(
      "Are you sure you want to delete this product?"
    );
    expect(pText).not.toBeInTheDocument();
  });
});
