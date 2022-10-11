import { Formik, Field, Form } from "formik";
import { useState, ChangeEvent } from "react";
import { showToast } from "../../helpers/toasts";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { sendRecipeRequest } from "../../helpers/sendRecipeRequest";
import { useSelector, useDispatch } from "react-redux";
import * as yup from "yup";
import styles from "./RecipeForm.module.css";
import Error from "../common/Error/Error";
import Button from "../UI/Button/Button";
import { loadingSelector } from "../../store/ui/ui-selectors";

interface RecipeFormProps {
  title?: string;
  about?: string;
  category?: string;
  description?: string | string[];
  ingredients?: string | string[];
  measurements?: string | string[];
};

const RecipeForm = ({
  title,
  about,
  category,
  description,
  ingredients,
  measurements,
}: RecipeFormProps) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [imageInput, setImageInput] = useState(null);

  const imageInputHandler = (e: ChangeEvent<HTMLInputElement>) => setImageInput(e.target.files[0]);

  const isLoading = useSelector(loadingSelector);
  const dispatch = useDispatch();

  const validationSchema = yup.object().shape({
    title: yup.string().required("Title is required"),
    about: yup.string().required("Description is required"),
    description: yup.string().required("Instructions are required"),
    ingredients: yup.string().required("Ingredients are required"),
    measurements: yup.string().required("Measurements are required"),
    category: yup.string().required("Category is required")
  });

  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        title: title || "",
        about: about || "",
        category: category || "",
        description: description || "",
        ingredients: ingredients || "",
        measurements: measurements || "",
      }}
      onSubmit={(values) => {
        sendRecipeRequest(
          values,
          title ? "PATCH" : "POST",
          imageInput,
          setImageInput,
          navigate,
          showToast,
          dispatch,
          id
        );
      }}
      validationSchema={validationSchema}
    >
      {({ values, errors, isValid, handleSubmit, touched }) => (
        <Form className={styles["recipes__form"]} onSubmit={handleSubmit}>
          <Field
            id="title"
            name="title"
            placeholder="Recipe's title"
            className={styles["recipes-form__input"]}
            values={values.title}
          />
          {touched.title && errors.title && <Error>{errors.title}</Error>}

          <Field
            id="category"
            name="category"
            placeholder="Recipe's category"
            className={styles["recipes-form__input"]}
            values={values.category}
          />
          {touched.category && errors.category && <Error>{errors.category}</Error>}

          <Field
            component="textarea"
            name="about"
            placeholder="Recipe's description"
            className={styles["recipes-form__input"]}
            rows="3"
          />
          {touched.about && errors.about && <Error>{errors.about}</Error>}

          <Field
            component="textarea"
            name="ingredients"
            placeholder="Recipe's ingredients"
            className={styles["recipes-form__input"]}
            rows="5"
          />
          {touched.ingredients && errors.ingredients && (
            <Error>{errors.ingredients}</Error>
          )}

          <Field
            component="textarea"
            name="measurements"
            placeholder="Ingredients' measurements"
            className={styles["recipes-form__input"]}
            rows="5"
          />
          {touched.measurements && errors.measurements && (
            <Error>{errors.measurements}</Error>
          )}

          <Field
            component="textarea"
            name="description"
            placeholder="Recipe's instructions"
            className={styles["recipes-form__input"]}
            rows="5"
          />
          {touched.description && errors.description && (
            <Error>{errors.description}</Error>
          )}

          <input
            type="file"
            className={styles["recipes-form__input"]}
            onChange={imageInputHandler}
            accept="image/*"
          />
          <Button disabled={!isValid || isLoading}>
            {isLoading ? "Saving" : "Save"}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default RecipeForm;
