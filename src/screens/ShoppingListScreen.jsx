//NPM packages
import React from "react";

//Project files
import ModalForm from "../components/ModalForm";
import TaskList from "../components/TaskList";
import { useProducts } from "../state/ProductContext";

export default function ShoppingListScreen({ setShowModal }) {
  const { products } = useProducts();
  return (
    <div>
      <div>
        <h1>Shopping List</h1>
        <TaskList list={products} /*onCheck={onCheck} */ />
        <button
          onClick={() =>
            setShowModal(<ModalForm setShowModal={setShowModal} />)
          }
        >
          Add Item
        </button>
      </div>
    </div>
  );
}
