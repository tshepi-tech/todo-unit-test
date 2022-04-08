//NPM package

import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext(null);

export function ProductProvider({ children }) {
  //state
  const [products, setProducts] = useState([]);

  //Properties
  const values = { products, addItem, updateItem };

  //Methods
  function addItem(name, price) {
    const newItem = {
      id: products.length,
      name: name,
      price: price,
      complete: false,
    };
    setProducts([...products, newItem]);
    console.log("products", products);
  }

  function updateItem(updatedItem) {
    const duplicatedList = [...products];
    const index = duplicatedList.findIndex(
      (item) => item.id === updatedItem.id
    );

    duplicatedList[index] = updatedItem;
    setProducts(duplicatedList);
    console.log("productcontext", duplicatedList);
  }

  return <Context.Provider value={values}>{children}</Context.Provider>;
}

export function useProducts() {
  const context = useContext(Context);
  const errorText =
    "To use useTasks(), you need to wrap the parent component with <ProductProvider/>";

  // Safeguards
  if (!context) throw new Error(errorText);

  return context;
}
