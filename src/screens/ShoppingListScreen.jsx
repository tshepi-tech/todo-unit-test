//NPM packages
import React, { useState } from "react";

//Project files
import ModalForm from "../components/ModalForm";
import TaskList from "../components/TaskList";
import { useProducts } from "../state/ProductContext";

export default function ShoppingListScreen({ setShowModal }) {
  const { products } = useProducts();

  //Local State
  const [showComplete, setShowComplete] = useState(false);

  //Properties
  const completeItems = products.filter((item) => item.complete === true);
  const pendingItems = products.filter((item) => item.complete === false);
  const toggleLabel = showComplete ? "Hide" : "View";

  return (
    <div>
      <div>
        <h1>Shopping List </h1>
        <TaskList list={pendingItems} />
        <button
          onClick={() =>
            setShowModal(<ModalForm setShowModal={setShowModal} />)
          }
        >
          Add Item
        </button>
        <button onClick={() => setShowComplete(!showComplete)}>
          {toggleLabel} completed items{" "}
        </button>
      </div>
      {showComplete && <TaskList list={completeItems} />}
    </div>
  );
}
