//NPM packages
import React from "react";

//Project files

export default function Modal({ showModal, onClose }) {
  //Safegaurd
  if (!showModal) return null;

  return (
    <>
      <div className="overlay_style" />
      <div className="modal_styles">
        <button onClick={onClose}>Close modal</button>
      </div>
    </>
  );
}
