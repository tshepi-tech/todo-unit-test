//NPM packages
import React from "react";

//Project files
import { useProducts } from "../state/ProductContext";

export default function TaskItem({ item }) {
  const { updateItem } = useProducts();
  const { name, price, complete } = item;

  function onCheck() {
    const clonedItem = { ...item };

    clonedItem.complete = !clonedItem.complete;
    updateItem(clonedItem);
    console.log("clonedItem", clonedItem);
  }

  return (
    <li>
      <input type="checkbox" checked={complete} onChange={onCheck} />
      {name},{price}
    </li>
  );
}
