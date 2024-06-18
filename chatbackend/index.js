import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
  },
});

let users = [];

io.on("connection", (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);

  console.log(`${io.engine.clientsCount} user are connected`);
  // may or may not be similar to the count of Socket instances in the main namespace, depending on your usage
  const count2 = io.of("/").sockets.size;

  //Listens when a new user joins the server
  socket.on("newUser", (data) => {
    users.push(data);
    console.log(users);
    //Sends the list of users to the client
    io.emit("newUserResponse", users);
  });

  socket.on("message", (data) => {
    console.log(data);
    io.emit("messageResponse", data);
  });

  socket.on("disconnect", () => {
    console.log("🔥: A user disconnected");
    //Updates the list of users when a user disconnects from the server
    users = users.filter((user) => user.socketID !== socket.id);
    //Sends the list of users to the client
    io.emit("newUserResponse", users);
    // console.log(`${io.engine.clientsCount} user are connected`);
    // console.log(io.of("/").sockets.size);
  });
});

io.engine.on("connection_error", (err) => {
  console.log(err.req); // the request object
  console.log(err.code); // the error code, for example 1
  console.log(err.message); // the error message, for example "Session ID unknown"
  console.log(err.context); // some additional error context
});

app.get("/", (req, res) => {});

httpServer.listen(3000);
