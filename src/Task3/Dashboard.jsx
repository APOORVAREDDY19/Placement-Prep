import { useState } from "react";
import UserCard from "./UserCard";

function Dashboard() {
  const [users, setUsers] = useState([
    { id: 1, userName: "Apoorva", userRole: "Junior" },
    { id: 2, userName: "Ajay", userRole: "Junior" },
    { id: 3, userName: "Priya", userRole: "Junior" },
  ]);

  function promoteUser(id) {
    const updatedUsers = users.map((user) =>
      user.id === id
        ? { ...user, userRole: "Senior" }
        : user
    );

    setUsers(updatedUsers);
  }

  return (
    <>
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          onPromote={() => promoteUser(user.id)}
        />
      ))}
    </>
  );
}

export  default Dashboard ;