//NPM Packages
import React, { useState } from "react";

//Project files
import ShoppingListScreen from "./components/ShoppingListScreen";
import WelcomeScreen from "./components/WelcomeScreen";

//Project Files

export default function App() {
  //Local state
  const [list, setList] = useState([]);

  //Properties
  const listLength = list.length;

  return (
    <div className="App">
      {listLength > 0 && <ShoppingListScreen />}
      {listLength === 0 && <WelcomeScreen />}
    </div>
  );
}
