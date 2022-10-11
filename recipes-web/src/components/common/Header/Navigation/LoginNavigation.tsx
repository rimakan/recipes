import styles from "../Header.module.css";
import Link from "../../../UI/Link/Link";

const LoginNavigation = () => {
  return (
    <nav className={styles["nav-login"]}>
      <ul className={styles["nav-list"]}>
        <li>
          <Link to="/search">Recipes search</Link>
        </li>
        <li>
          <Link to="/sign_up">Sign up</Link>
        </li>
      </ul>
    </nav>
  );
};

export default LoginNavigation;
