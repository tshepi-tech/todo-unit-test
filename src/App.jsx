//NPM Packages
import React, { useState } from "react";

//Project files
import Modal from "./components/Modal";
import ShoppingListScreen from "./screens/ShoppingListScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import { useProducts } from "./state/ProductContext";
import "./styles/styles.css";

//Project Files

export default function App() {
  const { products } = useProducts();

  //Local state
  const [showModal, setShowModal] = useState(false);

  //Properties
  const listLength = products.length;

  return (
    <div className="App">
      {listLength > 0 && <ShoppingListScreen setShowModal={setShowModal} />}
      {listLength === 0 && <WelcomeScreen setShowModal={setShowModal} />}
      <Modal modalState={[showModal, setShowModal]} />
    </div>
  );
}
