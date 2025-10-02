import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Layout, Space, Button } from "antd";
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";

const { Header, Content } = Layout;

function App() {
  return (
    <Router>
      <Layout>
        <Header style={{ display: "flex", alignItems: "center" }}>
          <Space>
            <Link to="/">
              <Button>Home</Button>
            </Link>
            <Link to="/user-table">
              <Button type="primary">Users</Button>
            </Link>
          </Space>
        </Header>

        <Content style={{ padding: "20px" }}>
          <Routes>
            <Route path="/user-table" element={<Users />} />
            <Route path="/user/:id" element={<UserDetails />} /> {/* Details route */}
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
}

export default App;
