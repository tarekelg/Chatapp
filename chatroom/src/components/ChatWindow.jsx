import ChatBubble from "./ChatBubble";
import ChatBubbleMe from "./ChatBubbleMe";
import messages from "../../data/messages";

const ChatWindow = () => {
  return (
    <div className="bg-slate-700 flex-1 overflow-y-scroll">
      {messages.map((message, index) => {
        if ((index > 0 && index % 2 === 0) || index === 0) {
          return (
            <ChatBubble
              key={index}
              username={message.username}
              message={message.message}
            />
          );
        } else if (index > 0 && index % 2 !== 0) {
          return (
            <ChatBubbleMe
              key={index}
              username={message.username}
              message={message.message}
            />
          );
        }
      })}
    </div>
  );
};

export default ChatWindow;
