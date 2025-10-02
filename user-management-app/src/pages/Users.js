import React, { useEffect, useState } from "react";
import UserTable from "../components/UserTable";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <UserTable users={users} />
  );
}

export default Users;
