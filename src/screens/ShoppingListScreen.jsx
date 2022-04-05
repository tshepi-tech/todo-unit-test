//NPM packages
import React from "react";

//Project files

export default function ShoppingListScreen({ setShowModal }) {
  return (
    <div>
      <div>
        ShoppingListScreen
        <button onClick={() => setShowModal(true)}>Add Item</button>
      </div>
    </div>
  );
}
