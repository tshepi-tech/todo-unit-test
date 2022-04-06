//NPM package

import { createContext, useContext, useEffect, useState } from "react";

const Context =createContext(null);

export function ProductContext ({children}) {
    //state
    const [products,setProducts]= useState ([]);

    //Properties
    const values= {products,addItem}

    //Methods
    function addItem(name, price) {
        const newItem = {
          id: list.length,
          name: name,
          price: price,
          completed: false,
        };
        setProducts([...products, newItem]);
      }

      return <Context.Provider value={values}>{children}</Context.Provider>
}

export function useProducts() {
    const context = useContext(Context):
    "To use useTasks(), you need to wrap the parent component with <TaskProvider/>";

  // Safeguards
  if (!context) throw new Error(errorText);

  return context;
}
