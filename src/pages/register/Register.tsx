import RegisterForm from "../../forms/registerForm";
import "../../forms/form.css";
import { Typography } from "antd";
function Register() {
  const { Title } = Typography;
  return (
    <div className="form">
      <div className="form_wrapper">
        <Title className="form_title">Sign up</Title>
        <RegisterForm />
      </div>
    </div>
  );
}

export default Register;
