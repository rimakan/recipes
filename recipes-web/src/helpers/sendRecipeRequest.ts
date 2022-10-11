import { baseUrl } from "./baseUrl";
import { setLoading, setModal } from "../store/ui/ui-slice";

export const sendRecipeRequest = async (
  values: any,
  method: string,
  imageInput: any,
  setImageInput: any,
  navigate: any,
  showToast: any,
  dispatch: any,
  id = null
) => {
  let URL = `${baseUrl}/api/v1/recipes`;

  if (id) {
    URL = `${baseUrl}/api/v1/recipes/${id}`;
  }

  const formData = new FormData();
  formData.append("title", values.title);
  formData.append("category", values.category);
  formData.append("about", values.about);
  formData.append("description", values.description.replaceAll(".,", ".;"));
  formData.append("ingredients", values.ingredients);
  formData.append("measurements", values.measurements);
  formData.append("recipe_image", imageInput);

  dispatch(setLoading(true));
  const res = await fetch(URL, {
    method: method,
    body: formData,
    credentials: "include"
  });

  if (res.ok) {
    const data = await res.json();
    console.log(data.message);
    setImageInput(null);
    dispatch(setModal(false));
    navigate("/recipes");
    showToast(data.message, data.status);
    dispatch(setLoading(false));
  } else {
    dispatch(setLoading(false));
    if (res.status === 500) showToast("Image is required", "error");
    const data = await res.json();
    showToast(...data.message.title, data.status);
  }
};
