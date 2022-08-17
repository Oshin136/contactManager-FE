import { Typography } from "antd";
import ContactForm from "../../components/forms/contactForm";
import "./Contact.css";

function Contact() {
  const { Title } = Typography;
  return (
    <div className="contactform_center">
      <div className="contactform_wrapper">
        <Title className="contactform_title">Add Contact</Title>
        <ContactForm update={false} />
      </div>
    </div>
  );
}

export default Contact;
