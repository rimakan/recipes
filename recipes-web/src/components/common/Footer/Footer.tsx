import styles from "./Footer.module.css";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className={styles.footer}>
      <p className={styles["footer__copyright"]}>&copy; {year} Recipes</p>
    </footer>
  );
};

export default Footer;
