import ChatBubble from "./ChatBubble";
import ChatBubbleMe from "./ChatBubbleMe";
import messages from "../../data/messages";

const ChatWindow = ({ messages, socket }) => {
  console.log(messages);
  return (
    <div className="bg-slate-700 flex-1 overflow-y-scroll">
      {messages.map((message, index) => {
        if (socket.id === message.socketID) {
          return (
            <ChatBubbleMe
              key={index}
              username={message.name}
              message={message.text}
            />
          );
        } else {
          return (
            <ChatBubble
              key={index}
              username={message.name}
              message={message.text}
            />
          );
        }
      })}
    </div>
  );
};

export default ChatWindow;

{
  /* {messages.map((message, index) => {
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
              username={messages.username}
              message={messages.message}
            />
          );
        }
      })} */
}
