const express = require("express");
const { createServer } = require("node:http");
const { Server } = require("socket.io");
const cors = require("cors");

const serverPort = 3000;
const clientPort = 5173;

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: `http://localhost:${clientPort}`,
    methods: ["GET", "POST"],
  },
});

app.use(cors());

io.on("connection", (socket) => {
  console.log("\nA user connected");
  socket.on("disconnect", () => {
    console.log("\nA user disconnected");
  });
});

io.on("connection", (socket) => {
  socket.on("chat_message", (msg) => {
    socket.broadcast.emit("recieve_message", msg);
  });
});

server.listen(serverPort, () => {
  console.log(`\nServer is listening on port ${serverPort}`);
});
