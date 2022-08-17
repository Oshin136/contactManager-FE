import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import Contact from "../pages/contact/Contact";
import ContactList from "../pages/contact/contactList";
import { Routes, Route } from "react-router-dom";
import { store } from "../store/store";
import { Provider } from "react-redux";
import AuthRoute from "../AuthRoute";
import { initializeInterceptors } from "../utils/interceptor";
import ContactUpdate from "../pages/contact/ContactUpdate";

function PageRoutes() {
  const interceptorId = initializeInterceptors();

  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Login interceptorId={interceptorId} />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/login"
          element={<Login interceptorId={interceptorId} />}
        />

        <Route path="/contacts" element={<AuthRoute />}>
          <Route path="/contacts/" element={<ContactList />} />
          <Route path="/contacts/add" element={<Contact />} />
          <Route
            path="/contacts/update-contact/:id"
            element={<ContactUpdate />}
          />
        </Route>
      </Routes>
    </Provider>
  );
}
export default PageRoutes;
