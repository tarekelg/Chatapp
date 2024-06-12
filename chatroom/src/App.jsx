import ChatRoom from "./components/ChatRoom";
import socketIO from "socket.io-client";
// const socket = socketIO.connect("http://localhost:3000");

function App() {
  return (
    <>
      <ChatRoom />
    </>
  );
}

export default App;
