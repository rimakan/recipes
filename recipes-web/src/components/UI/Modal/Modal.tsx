import { ReactNode } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

interface ModalProps {
  onClick(): void;
  children?: ReactNode
}

const Backdrop = ({ onClick }: ModalProps) => {
  return <div className={styles.backdrop} onClick={onClick} />;
};

const ModalOverlay = ({ onClick, children }: ModalProps) => {
  return (
    <div className={styles.modal}>
      <span className={styles["closing-btn"]} onClick={onClick}>
        &#10006;
      </span>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

const overlay = document.getElementById("overlays");

const Modal = ({ onClick, children }: ModalProps) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClick={onClick} />, overlay)}
      {ReactDOM.createPortal(
        <ModalOverlay onClick={onClick}>{children}</ModalOverlay>,
        overlay
      )}
    </>
  );
};

export default Modal;
