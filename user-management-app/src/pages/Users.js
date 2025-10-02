import React, { useEffect, useState } from "react";
import UserTable from "../components/UserTable";
import { Button, Card, Form, Input } from "antd";

function Users() {
  const [users, setUsers] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const onSubmit = (values) => {
    const newUser = {
      id: users.length + 1,
      name: values.name,
      email: values.email,
      phone: values.phone || "",
      website: values.website || "",
      company: { name: values.company || "N/A" },
      address: {
        street: values.street || "",
        city: values.city || "",
      },
    };
    setUsers([newUser, ...users]);
    setShowForm(false);
  };

  const onDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      <Button type="primary" onClick={() => setShowForm(!showForm)}>
        {showForm ? "Cancel" : "Add User"}
      </Button>

      {showForm && (
        <Card title="Add New User" style={{ maxWidth: 500, marginBottom: 20 }}>
          <Form layout="vertical" onFinish={onSubmit}>
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please input the name!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please input the email!" },
                { type: "email", message: "Please enter a valid email!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item label="Phone" name="phone">
              <Input />
            </Form.Item>

            <Form.Item label="Website" name="website">
              <Input />
            </Form.Item>

            <Form.Item label="Company" name="company">
              <Input />
            </Form.Item>

            <Form.Item label="Street" name="street">
              <Input />
            </Form.Item>

            <Form.Item label="City" name="city">
              <Input />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Add User
              </Button>
            </Form.Item>
          </Form>
        </Card>
      )}
      {!showForm &&
        <UserTable users={users} onDelete={onDelete} />
      }
    </div>
  );
}

export default Users;
