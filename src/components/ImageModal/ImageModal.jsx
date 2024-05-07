import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function ImageModal({ onClose, state, img }) {
  return (
    <Modal
      isOpen={state}
      onRequestClose={onClose}
      style={customStyles}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <button className={css.btn} onClick={onClose}>
        X
      </button>
      <img className={css.img} src={img.href} alt={img.alt} width="500px" />
    </Modal>
  );
}
