//NPM Packages
import React, { useState } from "react";

//Project files
import Modal from "./components/Modal";
import ShoppingListScreen from "./screens/ShoppingListScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import styles from "./styles/styles.css";

//Project Files

export default function App() {
  //Local state
  const [list, setList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  //Properties
  const listLength = list.length;

  return (
    <div className="App">
      {listLength > 0 && <ShoppingListScreen />}
      {listLength === 0 && <WelcomeScreen setShowModal={setShowModal} />}
      <Modal showModal={showModal} onClose={() => setShowModal(false)}>
        Modal
      </Modal>
    </div>
  );
}
