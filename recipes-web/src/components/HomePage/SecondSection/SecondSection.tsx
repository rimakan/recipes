import styles from "./SecondSection.module.css";
import pic from "../../../images/pizza-img.jpg";
import Wrapper from "../../common/Layout/Wrapper/Wrapper";
import Image from "../../common/Layout/Image/Image";

const SecondSection = () => {
  return (
    <section className={styles["recipes__about"]}>
      <Wrapper>
        <div className={styles["recipes__img-container"]}>
          <Image src={pic} alt="pizza" />
        </div>
        <div className={styles["recipes__descr__container"]}>
          <p className={styles["recipes__description"]}>
            Just cook, using your saved recipes whenever needed
          </p>
        </div>
      </Wrapper>
    </section>
  );
};

export default SecondSection;
