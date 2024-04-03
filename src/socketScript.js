import io from "socket.io-client";

const port = 5173;
const socket = io(`http://localhost:${port}/`);

export default socket;
