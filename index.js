/*  Socket.IO Chatting App  */ 

const path = require("path");
const express = require("express");
const { createServer } = require("node:http");
const { Server } = require("socket.io");

const port = 3000;
const app = express();
const server = createServer(app);
const io = new Server(server);

// For serving static HTML and CSS files
app.use(express.static(path.join(__dirname, "src")));

// For serving other static files
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src/index.html"));
});

io.on("connection", (socket) => {
  console.log("A user connected.");
  socket.on("disconnect", () => {
    console.log("A user disconnected.");
  });
});

io.on("connection", (socket)=>{
  socket.on("chat message", (msg)=>{
    console.log("\nMessage : " + msg);
  });
});

server.listen(port, () => {
  console.log(`\nServer is listening on port ${port}\n`);
});
