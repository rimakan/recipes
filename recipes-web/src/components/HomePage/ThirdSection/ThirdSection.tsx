import styles from "./ThirdSection.module.css";
import pic from "../../../images/food-img.jpg";
import Wrapper from "../../common/Layout/Wrapper/Wrapper";
import Image from "../../common/Layout/Image/Image";

const ThirdSection = () => {
  return (
    <section className={styles["recipes__cta"]}>
      <Wrapper>
        <div className={styles["recipes__descr__container"]}>
          <p className={styles["recipes__description"]}>
            Let's gather your ideas up!
          </p>
        </div>
        <div className={styles["recipes__img-container"]}>
          <Image src={pic} alt="family dinner" />
        </div>
      </Wrapper>
    </section>
  );
};

export default ThirdSection;
