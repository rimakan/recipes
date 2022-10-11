import { Field } from "formik";
import Error from "../../common/Error/Error";
import styles from "./NameFields.module.css";

interface NameFieldsProps {
  touchedFirstName: boolean;
  valuesFirstName: string;
  errorsFirstName: string;
  touchedLastName: boolean;
  valuesLastName: string;
  errorsLastName: string;
}

const NameFields = ({
  touchedFirstName,
  valuesFirstName,
  errorsFirstName,
  touchedLastName,
  valuesLastName,
  errorsLastName,
}: NameFieldsProps) => {
  return (
    <>
      <Field
        name="firstName"
        type="text"
        placeholder="Your first name"
        className={styles["form__input"]}
        values={valuesFirstName}
      />
      {touchedFirstName && errorsFirstName && <Error>{errorsFirstName}</Error>}

      <Field
        name="lastName"
        type="text"
        placeholder="Your last name"
        className={styles["form__input"]}
        values={valuesLastName}
      />
      {touchedLastName && errorsLastName && <Error>{errorsLastName}</Error>}
    </>
  );
};

export default NameFields;
