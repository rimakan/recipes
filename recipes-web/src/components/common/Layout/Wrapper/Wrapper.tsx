import { ReactNode } from "react";
import styles from "./Wrapper.module.css";

interface WrapperProps  {
  children: ReactNode;
};

const Wrapper = ({ children }: WrapperProps) => {
  return <div className={styles["recipes__grid-container"]}>{children}</div>;
};

export default Wrapper;
