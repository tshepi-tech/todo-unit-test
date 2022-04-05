//NPM packages
import React from "react";

//Project files
import TaskList from "../components/TaskList";

export default function ShoppingListScreen({ listState, setShowModal }) {
  const [list, setList] = listState;
  return (
    <div>
      <div>
        <h1>Shopping List</h1>
        <TaskList list={list} /*onCheck={onCheck} */ />
        <button onClick={() => setShowModal(true)}>Add Item</button>
      </div>
    </div>
  );
}
