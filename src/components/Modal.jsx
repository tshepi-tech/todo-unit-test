//NPM packages
import React from "react";
import { ReactDOM } from "react";

//Project files
import inputSetup from "../data/inputSetup.json";
import InputField from "./InputField";

export default function Modal({ showModal, onClose }) {
  //Safegaurd
  if (!showModal) return null;

  return (
    <>
      <div className="overlay_style" />
      <div className="modal_styles">
        <p>Add a new product</p>
        <form>
          <InputField setup={inputSetup.name} />
          <InputField setup={inputSetup.price} />
        </form>
        <button onClick={onClose}>Close modal</button>
      </div>
    </>
  );
}
