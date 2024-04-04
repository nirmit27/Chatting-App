import io from "socket.io-client";

const serverPort = 3000;
const socket = io.connect(`http://localhost:${serverPort}`);

export default socket;
