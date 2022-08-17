import { Navigate, Outlet } from "react-router-dom";
import { getUserLoginFromLocalStorage } from "./utils/localStorage";

const AuthRoute = () => {
  const isLoggedIn = getUserLoginFromLocalStorage();

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default AuthRoute;
