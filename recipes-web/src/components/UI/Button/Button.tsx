import styles from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  onSave?(): void;
  disabled?: boolean;
  openModal?(): void;
};

const Button = ({ children, onSave, disabled, openModal }: ButtonProps) => {
  return (
    <>
      <button
        className={styles["btn"]}
        onClick={onSave || openModal}
        disabled={disabled}
        type="submit"
      >
        {children}
      </button>
    </>
  );
};

export default Button;
