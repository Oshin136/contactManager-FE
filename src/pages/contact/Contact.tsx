import ContactForm from "../../forms/contactForm";
import "../../forms/form.css";
import { Typography } from "antd";

function Contact() {
  const { Title } = Typography;
  return (
    <div className="form">
      <div className="form_wrapper">
        <Title className="form_title">Add Contact</Title>
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
