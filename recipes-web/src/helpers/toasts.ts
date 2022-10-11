import { toast } from "react-toastify";

export const showToast = (msg: string, status: string) => {
  if (status === "success") {
    toast.success(msg, {
      position: "bottom-right",
      hideProgressBar: true,
    });
  } else {
    toast.error(msg, { position: "bottom-right", hideProgressBar: true });
  }
};
