import React from "react";

function Footer(props) {
  const { onClose, onConfirm } = props;
  return (
    <>
      <footer data-testid={"footer"}>
        <button aria-label="cancel" onClick={onClose}>
          Cancel
        </button>
        <button onClick={onConfirm}>OK</button>
      </footer>
    </>
  );
}

export default Footer;
