import { Formik, Field, Form } from "formik";
import { useState } from "react";
import { userAuth, userLogin } from "../../store/auth/auth-actions";
import { useDispatch, useSelector } from "react-redux";
import { updateUserData } from "../../store/user/user-actions";
import { isLoggedInSelector } from "../../store/auth/auth-selectors";
import Error from "../common/Error/Error";
import * as yup from "yup";
import styles from "./SmallForm.module.css";
import NameFields from "../UI/NameFields/NameFields";
import Button from "../UI/Button/Button";
import { AppDispatch } from "../../store";
import { AuthUser, User } from "../../types/user";

interface SmallFormProps {
  email?: string,
  firstName?: string,
  lastName?: string,
  closeModal?: any,
}

const SmallForm = ({ email, firstName, lastName, closeModal }: SmallFormProps) => {
  const isLoggedIn = useSelector(isLoggedInSelector);
  const [isLoginMode, setIsLogin] = useState(true);
  const [showPwd, setShowPwd] = useState(false);
  const dispatch: AppDispatch = useDispatch();

  const loginToggle = () => setIsLogin(!isLoginMode);
  const pwdToggle = () => setShowPwd(!showPwd);

  const validationSchema = yup.object().shape({
    firstName:
      !isLoginMode || isLoggedIn
        ? yup.string().required("First name is required")
        : yup.string(),
    lastName:
      !isLoginMode || isLoggedIn
        ? yup.string().required("Last name is required")
        : yup.string(),
    email: yup.string().required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password is less than 6 chars"),
  });

  return (
    <Formik
      initialValues={{
        firstName: firstName || "",
        lastName: lastName || "",
        email: email || "",
        password: "",
      }}
      onSubmit={async ({ email, password, firstName, lastName }) => {
        const body: AuthUser = {
          user: {
            first_name: firstName,
            last_name: lastName,
            email,
            password,
          },
        };

        if (!isLoginMode && !isLoggedIn) dispatch(userAuth(body));

        if (!isLoggedIn && !firstName && !lastName) {
          const loginBody: User = {
            email,
            password,
          };

          dispatch(userLogin(loginBody));
        }

        if (isLoggedIn && email) {
          dispatch(updateUserData(body));
          closeModal();
        }
      }}
      validationSchema={validationSchema}
    >
      {({ values, errors, isValid, handleSubmit, touched }) => (
        <Form className={styles["recipes__form"]} onSubmit={handleSubmit}>
          <h1 className={styles["recipes__form-title"]}>
            {isLoginMode && !isLoggedIn && "Log in"}
            {!isLoginMode && !isLoggedIn && "Sign up"}
          </h1>
          {!isLoginMode && !isLoggedIn && (
            <>
              <NameFields
                valuesFirstName={values.firstName}
                errorsFirstName={errors.firstName}
                touchedFirstName={touched.firstName}
                valuesLastName={values.lastName}
                errorsLastName={errors.lastName}
                touchedLastName={touched.lastName}
              />
            </>
          )}

          {email && isLoggedIn && (
            <>
              <NameFields
                valuesFirstName={values.firstName}
                errorsFirstName={errors.firstName}
                touchedFirstName={touched.firstName}
                valuesLastName={values.lastName}
                errorsLastName={errors.lastName}
                touchedLastName={touched.lastName}
              />
            </>
          )}

          <Field
            name="email"
            type="email"
            placeholder="Your email"
            className={styles["recipes-form__input"]}
            values={values.email}
          />
          {touched.email && errors.email && <Error>{errors.email}</Error>}

          <Field
            name="password"
            type={showPwd ? "text" : "password"}
            placeholder="Your password"
            className={styles["recipes-form__input"]}
            values={values.password}
          />
          {touched.password && errors.password && (
            <Error>{errors.password}</Error>
          )}
          {isLoginMode ||
            (!isLoggedIn && (
              <label htmlFor="checkbox" className={styles.checkboxes}>
                <input type="checkbox" name="checkbox" onClick={pwdToggle} />
                Show password
              </label>
            ))}

          <Button disabled={!isValid}>
            {email && isLoggedIn && "Save"}
            {isLoginMode && !isLoggedIn && "Log in"}
            {!isLoginMode && !isLoggedIn && "Sign up"}
          </Button>
          {!email && (
            <p
              className={styles["recipes-form__info-msg"]}
              onClick={loginToggle}
            >
              {isLoginMode
                ? "Don't have an account? Click here to sign up!"
                : "Already have an account? Log in!"}
            </p>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default SmallForm;
