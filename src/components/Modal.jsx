//NPM packages
import { ReactDOM } from "react";
import React, { useState } from "react";

//Project files
import inputSetup from "../data/inputSetup.json";
import InputField from "./InputField";
import { useProducts } from "../state/ProductContext";

export default function Modal({ modalState }) {
  const [showModal, setShowModal] = modalState;
  const { addItem } = useProducts();

  //Local state
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  //Methods
  function onSubmit(event) {
    event.preventDefault();

    addItem(name, price);
    resetForm();
  }

  function resetForm() {
    setName("");
    setPrice("");
    setShowModal(false);
  }

  //Safegaurd
  if (!showModal) return null;

  return (
    <>
      <div className="overlay_style" />
      <div className="modal_styles">
        <p>Add a new product</p>
        <form onSubmit={(event) => onSubmit(event)}>
          <InputField state={[name, setName]} setup={inputSetup.name} />
          <InputField state={[price, setPrice]} setup={inputSetup.price} />
          <button>Submit</button>
          <button onClick={resetForm}>Cancel</button>
        </form>
      </div>
    </>
  );
}
