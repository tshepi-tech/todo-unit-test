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
    <li className={`task-item ${complete && "completed"}`}>
      <input type="checkbox" checked={complete} onChange={onCheck} />
      <span className="name">{name}</span>,
      <span className="price">{price}</span>
    </li>
  );
}
