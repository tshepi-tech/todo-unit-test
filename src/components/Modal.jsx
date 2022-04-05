//NPM packages
import { ReactDOM } from "react";
import React, { useState } from "react";

//Project files
import inputSetup from "../data/inputSetup.json";
import InputField from "./InputField";

export default function Modal({ listState, modalState }) {
  const [showModal, setShowModal] = modalState;
  const [list, setList] = listState;

  //Local state
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  //Methods

  function onSubmit(event) {
    event.preventDefault();

    onAddItem(name, price);
    resetForm();
  }

  function onAddItem(name, price) {
    const newItem = {
      id: list.length,
      name: name,
      price: price,
      completed: false,
    };
    setList([...list, newItem]);
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
        </form>
      </div>
    </>
  );
}
