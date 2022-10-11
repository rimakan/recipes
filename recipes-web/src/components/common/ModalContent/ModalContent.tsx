import { ReactNode } from "react";
import styles from "./ModalContent.module.css";

interface ModalContentProps {
  title: string;
  ingredients: string[],
  measurements: string[],
  steps: string[],
  children: ReactNode
}

const ModalContent = ({
  title,
  ingredients,
  measurements,
  steps,
  children,
}: ModalContentProps) => {
  return (
    <section className={styles["recipe__modal-content"]}>
      <header>
        <h2 className={styles["recipe__modal-title"]}>How to cook {title}</h2>
      </header>
      <h3 className={styles["recipe__ingredients-title"]}>What is needed</h3>

      <div className={styles["recipe__ingredients-container"]}>
        <ul className={styles["recipe__ingredients-list"]}>
          {ingredients.map((item, idX: number) => (
            <li key={idX} className={styles["recipe__list-item"]}>
              {item}
            </li>
          ))}
        </ul>
        <ul className={styles["recipe__ingredients-list"]}>
          {measurements.map((item, idX: number) => (
            <li key={idX} className={styles["recipe__list-item"]}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles["recipe__steps-container"]}>
        <h3 className={styles["recipe__steps-title"]}>Instructions</h3>
        <ul className={styles["recipe__steps-list"]}>
          {steps.map((item, idX: number) => (
            <li key={idX} className={styles["recipe__list-item"]}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      {children}
    </section>
  );
};

export default ModalContent;
