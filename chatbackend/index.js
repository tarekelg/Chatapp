import { Server } from "socket.io";

const io = new Server({
  cors: {
    origin: "http://localhost:4000",
  },
});

io.on("connection", (socket) => {
  console.log("a user connected");
});

io.listen(3000);
