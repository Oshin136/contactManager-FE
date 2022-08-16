import { UploadOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Upload } from "antd";
import CountryPhoneInput from "antd-country-phone-input";

import { ConfigProvider } from "antd-country-phone-input";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import en from "world_countries_lists/data/countries/en/world.json";

const ContactForm = () => {
  const layout = {
    labelCol: { span: 0 },
    wrapperCol: { span: 24 },
  };
  const navigate = useNavigate();
  const [isFavourite, setIsFavourite] = useState<Boolean>(false);

  const onFinish = (values: any) => {
    navigate("/contact-list");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <ConfigProvider locale={en}>
      <Form
        {...layout}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className="contact-form"
        size="large"
      >
        <Form.Item name="name" rules={[{ required: true }]}>
          <Input placeholder="Full Name" />
        </Form.Item>

        <Form.Item name="email" rules={[{ type: "email" }]}>
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item name="address" rules={[{ required: true }]}>
          <Input placeholder="Address" />
        </Form.Item>

        <Form.Item name="contact" rules={[{ required: true }]}>
          <CountryPhoneInput
            value={{ short: "NP" }}
            size="small"
            placeholder="Contact Number"
          />
        </Form.Item>

        <Form.Item name="favourite" label="Favourite">
          <Checkbox.Group>
            <Checkbox
              value={true}
              onChange={(e) => setIsFavourite(e.target.checked)}
            />
          </Checkbox.Group>
        </Form.Item>

        <Form.Item rules={[{ required: true }]}>
          <Upload name="photo" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>Profile Picture</Button>
          </Upload>
        </Form.Item>

        <Button type="primary" htmlType="submit" style={{ marginTop: "20px" }}>
          Add contact
        </Button>
      </Form>
    </ConfigProvider>
  );
};

export default ContactForm;
