import styles from "./Header.module.css";
import logo from "../../../images/logo.png";
import MobileNav from "./Navigation/MobileNav";
import Navigation from "./Navigation/Navigation";
import LoginNavigation from "./Navigation/LoginNavigation";
import { isLoggedInSelector } from "../../../store/auth/auth-selectors";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../../store/auth/auth-actions";
import { AppDispatch } from "../../../store";


const Header = () => {
  const isLoggedIn = useSelector(isLoggedInSelector);
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const logoutHandler = () => dispatch(userLogout(navigate));

  return (
    <header className={styles["header"]}>
      <Link to="/">
        <img src={logo} alt="recipes logo" className={styles["recipe__logo"]} />
      </Link>
      {isLoggedIn ? (
        <>
          <Navigation onLogout={logoutHandler} />
          <MobileNav onLogout={logoutHandler} />
        </>
      ) : (
        <LoginNavigation />
      )}
    </header>
  );
};

export default Header;
