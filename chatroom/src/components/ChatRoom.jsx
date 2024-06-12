import ChatInput from "./ChatInput";
import ChatWindow from "./ChatWindow";

const ChatRoom = () => {
  return (
    <div className="h-screen min-w-80 flex flex-col">
      <ChatWindow />
      <ChatInput />
    </div>
  );
};

export default ChatRoom;
