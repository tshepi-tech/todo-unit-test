//NPM package
import { createPortal } from "react-dom";

//Project files

export default function Modal({ modalState }) {
  const [showModal, setShowModal] = modalState;

  //Safegaurd
  if (showModal === null) return null;

  return (
    <div>
      <div className="overlay_style" onClick={() => setShowModal(null)} />
      <div className="modal_styles">{showModal}</div>
    </div>
  );
}
