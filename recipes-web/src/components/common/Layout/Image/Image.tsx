import styles from "./Image.module.css";

interface ImageProps  {
  src: string;
  alt: string;
};

const Image = ({ src, alt }: ImageProps) => {
  return (
    <>
      <img className={styles["recipes__img"]} src={src} alt={alt} />
    </>
  );
};

export default Image;
