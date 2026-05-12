import React from "react";

const Users = () => {
  const users = [
    { id: 1, name: "Anna" },
    { id: 2, name: "monica" },
    { id: 3, name: "jake" },
  ];
  return (
    <ul>
      <h1>List of new users</h1>
      {users.map((user) => {
        return <li key={user.id}>{user.name}</li>;
      })}
    </ul>
  );
};

export default Users;
