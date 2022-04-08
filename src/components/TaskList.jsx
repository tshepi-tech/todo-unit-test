//NPM package
import React from "react";

//Project files
import TaskItem from "./TaskItem";

export default function TaskList({ list }) {
  const Products = list.map((item) => <TaskItem key={item.id} item={item} />);

  //Safeguard
  if (list.length === 0) return <p>no items to show</p>;

  return <ul>{Products}</ul>;
}
