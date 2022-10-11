import { Link } from "react-router-dom";
import { mobileNavProps } from "../../../../types/mobileNavProps";
import styles from "../Header.module.css";
import ProfileNav from "./ProfileNav";

const Navigation = ({ onLogout }: mobileNavProps) => {
  return (
    <>
      <nav className={styles["nav"]}>
        <ul className={styles["nav-list"]}>
          <li>
            <Link
              to="/recipes"
              style={{ textDecoration: "none", color: "#333" }}
            >
              Your recipes
            </Link>
          </li>
          <li>
            <Link
              to="/search"
              style={{ textDecoration: "none", color: "#333" }}
            >
              Recipes search
            </Link>
          </li>
          <li>
            <ProfileNav onLogout={onLogout} />
          </li>
        </ul>
      </nav>
      <Link to="/recipes/new" style={{ textDecoration: "none", color: "#333" }}>
        <button className={styles["btn-cta"]}>Create a Recipe</button>
      </Link>
    </>
  );
};

export default Navigation;
