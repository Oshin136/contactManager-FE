import { Navigate, Outlet } from "react-router-dom";
import {
  getUserLoginFromLocalStorage,
  isUserLoggedIn,
} from "./utils/localStorage";

const AuthRoute = () => {
  const isLoggedIn = isUserLoggedIn();

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default AuthRoute;
