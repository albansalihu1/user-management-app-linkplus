import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, Button } from "antd";

function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  if (!user) return <p>Loading...</p>;

  return (
    <Card title="User Details" style={{ maxWidth: 400 }}>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Website:</strong> {user.website}</p>
      <p><strong>Company:</strong> {user.company.name}</p>
      <p><strong>Address:</strong> {user.address.street}, {user.address.city}</p>
      
      <Link to="/user-table">
        <Button type="primary" style={{ marginTop: 10 }}>Back to Users</Button>
      </Link>
    </Card>
  );
}

export default UserDetails;
