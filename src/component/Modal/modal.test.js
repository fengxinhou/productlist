import Modal from "./Modal";
import { fireEvent, render } from "@testing-library/react";
import Delete from "../crud/Delete";
import "@testing-library/jest-dom";

describe("modal and delete component", () => {
  test("modal shows the children and a close button", () => {
    const handleClose = jest.fn();
    const { getByText } = render(
      <Modal onClose={handleClose} open={true} title="Delete Product">
        <Delete />
      </Modal>
    );
    expect(getByText("Delete Product")).toBeTruthy();
    fireEvent.click(getByText(/Cancel/i));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
