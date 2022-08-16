import LoginForm from "../../forms/loginForm";

import "../../forms/form.css";
import { Typography } from "antd";
function Login() {
  const { Title } = Typography;
  return (
    <div className="form">
      <div className="form_wrapper">
        <Title className="form_title">Log In</Title>
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
