import { Link } from "react-router-dom";
import { ReactNode } from "react";
import styles from "./Link.module.css";

interface MobileLinkProps {
  to: string,
  children: ReactNode,
  onClick?(): any
}

const MobileLink = ({ to, children, onClick }: MobileLinkProps) => {
  return (
    <Link to={to} onClick={onClick} className={styles.link}>
      {children}
    </Link>
  );
};

export default MobileLink;
