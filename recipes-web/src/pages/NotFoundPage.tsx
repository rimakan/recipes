import img from "../images/pasta.jpeg";
import styles from "../components/NotFoundPage/NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <section className={styles["recipes__not-found-page"]}>
      <div className={styles["not-found-page__container"]}>
        <div className={styles["not-found-page__text-box"]}>
          <h2 className={styles["not-found-page__title"]}>404</h2>
          <p className={styles["not-found-page__message"]}>
            The page is not found
          </p>
        </div>
        <img src={img} alt="pasta" className={styles["not-found-page__img"]} />
      </div>
    </section>
  );
};

export default NotFoundPage;
