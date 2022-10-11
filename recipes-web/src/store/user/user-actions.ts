import { setUser } from "./user-slice";
import { baseUrl } from "../../helpers/baseUrl";
import { showToast } from "../../helpers/toasts";
import { AppDispatch } from "../index";
import { AuthUser, User } from "../../types/user";
import { Response } from "../../types/response";

const URL = `${baseUrl}/user_profile`;

export const getUser = () => {
  return async (dispatch: AppDispatch) => {
    const res = await fetch(URL, {
      method: "GET",
      credentials: "include",
    });
    const data = await res.json();
    dispatch(setUser(data));
  };
};

export const updateUserData = (userData: AuthUser) => {
  return async (dispatch: AppDispatch) => {
    const res = await fetch(URL, {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (res.ok) {
      const data: User = await res.json();
      const {
        email,
        first_name: firstName,
        last_name: lastName,
        message,
        status,
      } = data;
      const user = {
        email,
        firstName,
        lastName,
      };
      dispatch(setUser(user));
      showToast(message, status);
    } else {
      const errData: Response = await res.json();
      showToast(errData.message, errData.status);
    }
  };
};
