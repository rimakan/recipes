import styles from "./FirstSection.module.css";
import pic from "../../../images/lasagne-img.jpg";
import Wrapper from "../../common/Layout/Wrapper/Wrapper";
import Image from "../../common/Layout/Image/Image";

const FirstSection = () => {
  return (
    <section className={styles["recipes__introduction"]}>
      <Wrapper>
        <div className={styles["recipes__descr__container"]}>
          <h1 className={styles["recipes__title"]}>welcome to recipes!</h1>
          <p className={styles["recipes__description"]}>
            We provide you with a perfect opportunity to store your unique ideas
          </p>
        </div>
        <div className={styles["recipes__img-container"]}>
          <Image src={pic} alt={"lasagna"} />
        </div>
      </Wrapper>
    </section>
  );
};

export default FirstSection;
