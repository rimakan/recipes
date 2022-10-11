import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { isLoggedInSelector } from "../store/auth/auth-selectors";

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(isLoggedInSelector);

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  } else {
    // authorized so return child components
    return children;
  }
};

export default PrivateRoute;
