//NPM packages
import { useState } from "react";

//Project files
import inputSetup from "../data/inputSetup.json";
import InputField from "./InputField";
import validateName from "../scripts/validateName";
import validatePrice from "../scripts/validatePrice";
import { useProducts } from "../state/ProductContext";

export default function ModalForm({ setShowModal }) {
  const { addItem } = useProducts();

  //Local state
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  //Methods
  function onSubmit(event) {
    event.preventDefault();

    // safe guard (if there is an error message, a new item should not be rendered)
    if (validateName(name).error.length > 0) return;
    if (validatePrice(price).error.length > 0) return;

    addItem(name, price);
    resetForm();
  }

  function resetForm() {
    setName("");
    setPrice("");
    setShowModal(null);
  }

  return (
    <div>
      <form onSubmit={(event) => onSubmit(event)}>
        <p>Add a new product</p>
        <InputField
          getter={name}
          setter={setName}
          setup={inputSetup.name}
          validation={validateName}
        />
        <InputField
          getter={price}
          setter={setPrice}
          setup={inputSetup.price}
          validation={validatePrice}
        />
        <button>Submit</button>
        <button onClick={resetForm}>Cancel</button>
      </form>
    </div>
  );
}
