import { showToast } from "../../helpers/toasts";
import { baseUrl } from '../../helpers/baseUrl'
import { login, logout, removeUser } from "./auth-slice";
import { User, AuthUser } from "../../types/user";
import { Response } from "../../types/response";
import { AppDispatch } from "../index";

export const userAuth = (userData: AuthUser) => {
  let URL = `${baseUrl}/signup`;
  return async (dispatch: AppDispatch) => {
    const res = await fetch(URL, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    if (res.ok) {
      const data = await res.json();
      // const token = data.jwt;
      dispatch(login());
      showToast(data.message, data.status);
    } else {
      const errData: Response = await res.json();
      showToast(errData.message, errData.status);
    }
  };
};

export const userLogin = (userData: User) => {
  let URL = `${baseUrl}/login`;
  return async (dispatch: AppDispatch) => {
    const res = await fetch(URL, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    if (res.ok) {
      const data: User = await res.json();
      // const token = data.jwt;
      dispatch(login());
      showToast(data.message, data.status);
    } else {
      const errData: Response = await res.json();
      showToast(errData.message, errData.status);
    }
  };
};

export const userLogout = (callback: any) => {
  let URL = `${baseUrl}/logout`;
  return async (dispatch: AppDispatch) => {
    const res = await fetch(URL, {
      method: "DELETE",
    });
    const data = await res.json();
    dispatch(logout());
    showToast(data.message, data.status);
    callback("/")
  };
};

export const deleteUser = (callback: any) => {
  let URL = `${baseUrl}/user_profile`;
  return async (dispatch: AppDispatch) => {
    const res = await fetch(URL, {
      method: "DELETE",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    const data = await res.json();
    dispatch(removeUser());
    showToast(data.message, data.status);
    callback("/");
  };
};
