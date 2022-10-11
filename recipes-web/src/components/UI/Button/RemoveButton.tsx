import { ReactNode } from "react";
import styles from "./Button.module.css";

interface RemoveButtonProps {
  children: ReactNode;
  removeUser?(): void;
  removeRecipe?(): void;
};

const RemoveButton = ({
  children,
  removeUser,
  removeRecipe,
}: RemoveButtonProps) => {
  return (
    <>
      <button
        className={styles["remove-btn"]}
        onClick={removeUser || removeRecipe}
      >
        {children}
      </button>
    </>
  );
};

export default RemoveButton;
