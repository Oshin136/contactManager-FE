import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import Contact from "../pages/contact/Contact";
import { Routes, Route } from "react-router-dom";
import { store } from "../store/store";
import { Provider } from "react-redux";

function PageRoutes() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/add-contact" element={<Contact />}></Route>
      </Routes>
    </Provider>
  );
}

export default PageRoutes;
