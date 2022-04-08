//Project files
import ModalForm from "../components/ModalForm";

export default function WelcomeScreen({ setShowModal }) {
  return (
    <div id="welcome-screen">
      <img src="" alt="alt text for logo" />
      <img src="" alt="alt text of main image" />
      <h1>EIKA's shopping list</h1>
      <p>
        Welcome to EIKA’s shopping list. Here you will be able to create a todo
        list with for the furniture you want to buy.
      </p>
      <p>
        To get started press the Add new item button and a popup will ask you
        the name and the price of the item you want to add. You can also and an
        image after the item is added by touching the camera icon
      </p>
      <button
        onClick={() => setShowModal(<ModalForm setShowModal={setShowModal} />)}
      >
        Add Item
      </button>
    </div>
  );
}
