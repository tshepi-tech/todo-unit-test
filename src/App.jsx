//NPM Packages
import React, { useState } from "react";

//Project files
import ShoppingListScreen from "./components/ShoppingListScreen";
import WelcomeScreen from "./components/WelcomeScreen";

//Project Files

export default function App() {
  //Local state
  const [list, setList] = useState([]);

  return (
    <div className="App">
      <h1>Todo unit test</h1>
      {list.length > 0 && <ShoppingListScreen />}
      {list.length === 0 && <WelcomeScreen />}
    </div>
  );
}
