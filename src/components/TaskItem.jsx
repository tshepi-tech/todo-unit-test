//NPM packages
import React from "react";

//Project files
import { useProducts } from "../state/ProductContext";

export default function TaskItem({ item }) {
  const { id, name, price, isBought } = item;
  const { updateItem } = useProducts();

  function onCheck() {
    const clonedItem = { ...item };

    clonedItem.isBought = !clonedItem.isBought;
    updateItem(clonedItem);
  }

  return (
    <li>
      <input type="checkbox" checked={isBought} onChange={() => onCheck(id)} />
      {name},{price}
    </li>
  );
}
{
  /* onChange={() => onCheck(id)} */
}
