import styles from "./Error.module.css";

interface ErrorProps {
  children: string;
};

const Error = ({ children }: ErrorProps) => {
  return (
    <>
      <p className={styles["error-msg"]}>{children}</p>
    </>
  );
};

export default Error;
