import { Card, Row, Col, Input, Button  } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const { Search } = Input;

function UserTable({ users }) {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredUsers = users.filter((user) => {
    const term = searchTerm.toLowerCase();
    return (
      user.name.toLowerCase().includes(term) ||
      user.email.toLowerCase().includes(term) ||
      user.company.name.toLowerCase().includes(term)
    );
  });

  return (
    <div>
      <h2>Users</h2>
      <Search
        placeholder="Search by name, email or company"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: 20, maxWidth: 400 }}
        allowClear
      />

      <Row gutter={[16, 16]}>
        {filteredUsers.map((user) => (
          <Col key={user.id} xs={24} sm={12} md={8} lg={6}>
            <Card 
              title={`${user.name}`}
              extra={
                <Button type="link" onClick={() => navigate(`/user/${user.id}`)}>
                  Details
                </Button>
              }
            >
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Company:</strong> {user.company.name}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default UserTable;
