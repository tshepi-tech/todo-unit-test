//NPM packages
import React from "react";

//Project files

export default function TaskItem({ item /*onCheck*/ }) {
  const { id, name, price, completed } = item;

  return (
    <li>
      {/*   <input>
        type="checkbox" checked={completed}
        {/* onChange={() => onCheck(id)} }
      </input> */}
      {name},{price}
    </li>
  );
}
