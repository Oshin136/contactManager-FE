import { Button, Form, Input } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./form.css";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [errMsg, setErrMsg] = useState<string>(" ");
  const layout = {
    labelCol: { span: 0 },
    wrapperCol: { span: 24 },
  };
  const onFinish = (values: any) => {
    if (values.password != values.confirmpassword) {
      setErrMsg("Password do not match");
    } else {
      navigate("/login");
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form {...layout} onFinish={onFinish} onFinishFailed={onFinishFailed}>
      <Form.Item
        name="fullname"
        rules={[{ required: true, message: "Please input your fullname!" }]}
      >
        <Input placeholder="Full Name" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password placeholder="Enter Password" />
      </Form.Item>

      <Form.Item
        name="confirmpassword"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password placeholder="Confirm Password" />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Sign Up
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
