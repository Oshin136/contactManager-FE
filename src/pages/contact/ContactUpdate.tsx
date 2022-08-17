import { Typography } from "antd";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Contact } from "../../interfaces/contact";
import ContactForm from "../../components/forms/contactForm";

function ContactUpdate() {
  const { id } = useParams();
  const { Title } = Typography;
  const [data, setData] = useState<Contact>();

  useEffect(() => {
    axios
      .get(`/contacts/${id}`)
      .then((res) => {
        const oldData = {
          ...res.data.data,
          photo: [],
          favourite: [res.data.data.is_favourite],
          contact: {
            phone: res.data.data.phone,
            short: "NP",
          },
        };
        setData(oldData);
      })
      .catch((err) => console.log(err));
  }, []);

  return data ? (
    <div className="contactform_center">
      <div className="contactform_wrapper">
        <Title className="contactform_title">Update Contact</Title>
        <ContactForm update={true} oldData={data} />
      </div>
    </div>
  ) : (
    <div>Loading</div>
  );
}

export default ContactUpdate;
