import { Button, Space, Table, Typography } from "antd";
import { ColumnsType } from "antd/lib/table";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Contact } from "../../interfaces/contact";
import { getUserLoginFromLocalStorage } from "../../utils/localStorage";
import "./Contact.css";

const ContactList = () => {
  const { Title } = Typography;
  const { userId } = getUserLoginFromLocalStorage();
  const [data, setData] = useState<Contact[]>([]);

  const deleteHandler = (id: string) => {
    axios
      .delete(`/contacts/${id}`)
      .then((res) => {
        window.location.reload();
      })
      .then((err) => console.log(err));
  };

  const columns: ColumnsType<Contact> = [
    {
      title: "Photo",
      dataIndex: "photo",
      key: "photo",
      render: (url) => (
        <img
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            border: "1px solid #1e90ff",
          }}
          src={url}
        />
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Contact",
      dataIndex: "contact",
      key: "contact",
    },
    {
      title: "Favourite",
      dataIndex: "is_favourite",
      key: "is_favourite",
      render: (fav) => `${fav}`,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Link to={`/contacts/update-contact/${record.id}`}>
            <Button className="btn_edit">Edit</Button>
          </Link>
          <Button
            className="btn_delete"
            onClick={() => deleteHandler(record.id)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    axios
      .post("/contacts", { id: userId })
      .then((res) => {
        const newData = res.data.data.map((item: Contact, idx: number) => ({
          ...item,
          key: idx,
        }));
        setData(newData);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="contactList_wrapper">
      <Title className="contact_title">Your Contacts</Title>
      <Table dataSource={data} pagination={false} columns={columns} />
    </div>
  );
};

export default ContactList;
