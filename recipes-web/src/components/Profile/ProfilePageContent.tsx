import RemoveButton from "../UI/Button/RemoveButton";
import styles from "./ProfilePageContent.module.css";
import Modal from "../UI/Modal/Modal";
import Button from "../UI/Button/Button";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../store/user/user-actions";
import { deleteUser } from "../../store/auth/auth-actions";
import { useNavigate } from "react-router-dom";
import { setModal } from "../../store/ui/ui-slice";
import { userSelector } from "../../store/user/user-selectors";
import { AppDispatch } from "../../store";
import { modalSelector } from "../../store/ui/ui-selectors";
import SmallForm from "../Form/SmallForm";

const ProfilePageContent = () => {
  const user = useSelector(userSelector);
  const modal = useSelector(modalSelector);
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const openModal = () => dispatch(setModal(true));
  const closeModal = () => dispatch(setModal(false));

  const { email, first_name, last_name } = user;

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch, email]);

  const deleteHandler = () => dispatch(deleteUser(navigate));

  return (
    <section className={styles["recipes-profile"]}>
      <div className={styles["recipes-profile__personal-info"]}>
        <h2 className={styles["recipes-profile__header"]}>
          Your personal information
        </h2>
        <div className={styles["recipes-profile__first-name-box"]}>
          <p className={styles["recipes-profile__info"]}>First name:</p>
          <p className={styles["recipes-profile__email"]}>{first_name || ""}</p>
        </div>
        <div className={styles["recipes-profile__last-name-box"]}>
          <p className={styles["recipes-profile__info"]}>Last name:</p>
          <p className={styles["recipes-profile__email"]}>{last_name || ""}</p>
        </div>
        <div className={styles["recipes-profile__email-box"]}>
          <p className={styles["recipes-profile__info"]}>Email:</p>
          <p className={styles["recipes-profile__email"]}>{email || ""}</p>
        </div>
      </div>
      <div className={styles["recipes-profile__actions"]}>
        <Button openModal={openModal}>Edit Profile</Button>
        <RemoveButton removeUser={deleteHandler}>
          Deactivate account
        </RemoveButton>
      </div>
      {modal && (
        <Modal onClick={closeModal}>
          <SmallForm
            email={email || ""}
            firstName={first_name || ""}
            lastName={last_name || ""}
            closeModal={() => closeModal()}
          />
        </Modal>
      )}
    </section>
  );
};

export default ProfilePageContent;
