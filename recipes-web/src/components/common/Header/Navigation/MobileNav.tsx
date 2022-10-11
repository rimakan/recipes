import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import styles from "../Header.module.css";
import { useState, MouseEvent } from "react";
import MobileLink from "../../../UI/Link/Link";
import { mobileNavProps } from "../../../../types/mobileNavProps";

const MobileNav = ({ onLogout }: mobileNavProps) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          display: { xs: "block", sm: "none", lg: "none", xl: "none" },
          fontSize: "3rem",
        }}
      >
        ☰
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <li className={styles["mobile-nav__list-item"]}>
          <MobileLink to="/recipes">Your recipes</MobileLink>
        </li>
        <li className={styles["mobile-nav__list-item"]}>
          <MobileLink to="/search">Recipes search</MobileLink>
        </li>
        <li className={styles["mobile-nav__list-item"]}>
          <MobileLink to="/profile">Your account</MobileLink>
        </li>
        <li className={styles["mobile-nav__list-item"]}>
          <MobileLink to="" onClick={onLogout}>
            Logout
          </MobileLink>
        </li>
        <li className={styles["mobile-nav__list-item"]}>
          <MobileLink to="/recipes/new">
            <button className={styles["btn-cta-mobile"]}>
              Create a Recipe
            </button>
          </MobileLink>
        </li>
      </Menu>
    </>
  );
};

export default MobileNav;
