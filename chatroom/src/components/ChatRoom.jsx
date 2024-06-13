import { useEffect } from "react";
import ChatInput from "./ChatInput";
import ChatWindow from "./ChatWindow";

const ChatRoom = ({ socket }) => {
  useEffect(() => {
    console.log(socket);
    socket.emit("message", {
      text: "Hi here is Anon",
      name: "Anon",
      id: `${socket.id}${Math.random()}`,
      socketID: socket.id,
    });
  }, []);

  return (
    <div className="h-screen min-w-80 flex flex-col">
      <ChatWindow />
      <ChatInput />
    </div>
  );
};

export default ChatRoom;
