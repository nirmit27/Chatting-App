import socket from "./socketScript";
import { useState, useEffect } from "react";
import ChatContainer from "./components/ChatContainer";
import ChatInput from "./components/ChatInput";

export default function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("recieve_message", (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.off("recieve_message");
    };
  }, [socket]);

  return (
    <div>
      <ChatContainer messages={messages} />
      <ChatInput />
    </div>
  );
}
