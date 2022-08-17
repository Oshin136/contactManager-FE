import ContactForm from "../../forms/contactForm";
import "../../forms/form.css";
import { Typography } from "antd";

function Contact() {
  const { Title } = Typography;
  return (
    <div className="form">
      <div className="form_center">
        <div className="form_wrapper">
          <Title className="form_title">Add Contact</Title>
          <ContactForm update={false} />
        </div>
      </div>
    </div>
  );
}

export default Contact;
