import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import SmallForm from "../components/Form/SmallForm";
import { isLoggedInSelector } from "../store/auth/auth-selectors";

const Auth = () => {
  const isLoggedIn = useSelector(isLoggedInSelector);

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) navigate("/");
  }, [isLoggedIn, navigate]);

  return <SmallForm />;
};

export default Auth;
