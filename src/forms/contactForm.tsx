import { UploadOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Upload } from "antd";
import CountryPhoneInput from "antd-country-phone-input";

import { ConfigProvider } from "antd-country-phone-input";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import en from "world_countries_lists/data/countries/en/world.json";
import { Contact } from "../interfaces/contact";
import axios from "axios";
import { getUserLoginFromLocalStorage } from "../utils/localStorage";
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";

interface contactFormInterface {
  update: boolean;
  oldData?: Contact;
}
const ContactForm = (props: contactFormInterface) => {
  const layout = {
    labelCol: { span: 0 },
    wrapperCol: { span: 24 },
  };
  const navigate = useNavigate();
  const [isFavourite, setIsFavourite] = useState<Boolean>(false);

  const normFile = (e: any) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const onFinish = (values: any) => {
    const { userId } = getUserLoginFromLocalStorage();
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("contact", values.contact.phone);
    formData.append("address", values.address);
    formData.append("photo", values.photo[0].originFileObj);
    formData.append("is_favourite", `${isFavourite}`);
    formData.append("user_id", userId as string);

    if (props.update) {
      formData.append("id", props.oldData?.id as string);
      axios
        .put("/contacts/add", formData)
        .then((res) => {
          navigate("/contacts");
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .post("/contacts/add", formData)
        .then((res) => {
          navigate("/contacts");
        })
        .catch((err) => console.log(err));
    }
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
        initialValues={props.update ? props.oldData : {}}
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

        <Form.Item
          name="photo"
          valuePropName="fileList"
          rules={[{ required: true }]}
          getValueFromEvent={normFile}
        >
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
