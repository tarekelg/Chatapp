import React, { useState, useEffect } from "react";
import { useUser } from "../context/UserContext";

const ChatBar = ({ socket }) => {
  const [users, setUsers] = useState([]);
  const { newUser, setNewUser } = useUser();
  const { username, setUsername } = useUser();
  useEffect(() => {
    socket.on("newUserResponse", (data) => setUsers(data));
    console.log(users);
  }, [socket, users]);

  return (
    <div className="chat__sidebar">
      <h2>Open Chat</h2>

      <div>
        <h4 className="chat__header">ACTIVE USERS</h4>
        <div className="chat__users">
          {users.map((user) => (
            <p className="text-orange-600" key={user.socketID}>
              {user.username}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatBar;
