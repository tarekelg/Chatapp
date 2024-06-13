import { useEffect } from "react";
import ChatInput from "./ChatInput";
import ChatWindow from "./ChatWindow";
import ChatBar from "./ChatBar";
import { useState } from "react";

const ChatRoom = ({ socket }) => {
  const [messages, setMessages] = useState([]);

  // useEffect(() => {
  //   console.log(socket);
  //   socket.emit("message", {
  //     text: "Hi here is Anon",
  //     name: "Anon",
  //     id: `${socket.id}${Math.random()}`,
  //     socketID: socket.id,
  //   });
  // }, []);

  useEffect(() => {
    socket.on("messageResponse", (data) => setMessages([...messages, data]));
  }, [socket, messages]);

  return (
    <div className=" flex">
      <div className="min-w-72">
        <ChatBar socket={socket} />
      </div>
      <div className="h-screen w-screen flex flex-col">
        <ChatWindow messages={messages} socket={socket} />
        <ChatInput socket={socket} />
      </div>
    </div>
  );
};

export default ChatRoom;
