import { Route, Routes } from "react-router-dom";
import ChatRoom from "./components/ChatRoom";
import socketIO from "socket.io-client";
import Home from "./components/Home";
const socket = socketIO.connect("http://localhost:3000");

//Based on
//https://dev.to/novu/building-a-chat-app-with-socketio-and-react-2edj

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home socket={socket} />}></Route>
        <Route path="/chat" element={<ChatRoom socket={socket} />}></Route>
      </Routes>
    </>
  );
}

export default App;
