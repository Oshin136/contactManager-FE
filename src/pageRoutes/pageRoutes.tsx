import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import { Routes, Route } from "react-router-dom";

function PageRoutes() {
  return (
    <Routes>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
}

export default PageRoutes;
