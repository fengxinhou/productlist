import Modal from "./Modal";
import { fireEvent, render } from "@testing-library/react";
import Delete from "../crud/Delete";
import "@testing-library/jest-dom";

describe("modal UI test", () => {
  let element = null;
  const handleClose = jest.fn();
  const handleConfirm = jest.fn();
  beforeEach(() => {
    element = render(
      <Modal
        onClose={handleClose}
        open={true}
        title="Delete Product"
        onConfirm={handleConfirm}
      >
        <Delete />
      </Modal>
    );
  });

  afterEach(() => {
    element = null;
  });
  test("Cancel should be called", () => {
    const { getByText } = element;
    expect(getByText("Delete Product")).toBeTruthy();
    fireEvent.click(getByText(/Cancel/i));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  test("OK should be called", () => {
    const { getByText } = element;
    expect(getByText("Delete Product")).toBeTruthy();
    fireEvent.click(getByText(/OK/i));
    expect(handleConfirm).toHaveBeenCalledTimes(1);
  });
});
