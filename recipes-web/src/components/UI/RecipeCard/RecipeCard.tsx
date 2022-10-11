import styles from "./RecipeCard.module.css";

interface RecipeCardProps  {
  src?: string;
  alt?: string;
  title?: string;
  about?: string;
  category?: string;
  onClick(): void;
};

const RecipeCard = ({
  src,
  alt,
  title,
  about,
  category,
  onClick,
}: RecipeCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles["card__body"]}>
        <img src={src} alt={alt} className={styles["card__image"]} />
        <h2 className={styles["card__title"]}>{title}</h2>
        <p className={styles["card__category"]}>Category: {category}</p>
        <p className={styles["card__about"]}>{about}</p>
      </div>
      <button className={styles["card__btn"]} onClick={onClick}>
        Let's cook!
      </button>
    </div>
  );
};

export default RecipeCard;
