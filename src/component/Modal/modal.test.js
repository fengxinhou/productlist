import Modal from "./Modal";
import { fireEvent, render } from "@testing-library/react";
import Delete from "../crud/Delete";
import "@testing-library/jest-dom";
import React from "react";

describe("modal and delete component", () => {
  let element = null;
  const handleClose = jest.fn();
  beforeEach(() => {
    element = render(
      <Modal onClose={handleClose} open={true} title="Delete Product">
        <Delete />
      </Modal>
    );
  });

  afterEach(() => {
    element = null;
  });
  test("modal shows the children and a close button", () => {
    const { getByText } = element;
    expect(getByText("Delete Product")).toBeTruthy();
    fireEvent.click(getByText(/Cancel/i));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
