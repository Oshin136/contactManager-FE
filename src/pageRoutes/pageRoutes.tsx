import Register from "../pages/register/Register";
import { Routes, Route } from "react-router-dom";

function PageRoutes() {
  return (
    <Routes>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  );
}

export default PageRoutes;
