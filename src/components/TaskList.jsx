//NPM package
import React from "react";

//Project files
import TaskItem from "./TaskItem";
import { useProducts } from "../state/ProductContext";

export default function TaskList({ list }) {
  const { onCheck } = useProducts();

  const Products = list.map((item) => (
    <TaskItem key={item.id} item={item} onCheck={onCheck} />
  ));

  //Safeguard
  if (list.length === 0) return <p>no items to show</p>;

  return <ul>{Products}</ul>;
}
