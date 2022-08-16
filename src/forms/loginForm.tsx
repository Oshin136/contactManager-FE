import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import "./form.css";

const LoginForm = () => {
  const navigate = useNavigate();
  const layout = {
    labelCol: { span: 0 },
    wrapperCol: { span: 24 },
  };
  const onFinish = (values: any) => {
    navigate("/login");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form {...layout} onFinish={onFinish} onFinishFailed={onFinishFailed}>
      <Form.Item
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input placeholder="Email" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password placeholder="Enter Password" />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Log In
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
