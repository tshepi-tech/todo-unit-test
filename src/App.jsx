//NPM Packages
import React from "react";

//Project files
import ShoppingListScreen from "./components/ShoppingListScreen";
import WelcomeScreen from "./components/WelcomeScreen";

//Project Files

export default function App() {
  return (
    <div className="App">
      <h1>Todo unit test</h1>
      <ShoppingListScreen />
      <WelcomeScreen />
    </div>
  );
}
