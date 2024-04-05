import socket from "../socketScript";
import { useState } from "react";

export default function ChatInput() {
  const [inputValue, setInputValue] = useState("");

  const scrollToBottom = () => {
    const chatContainer = document.getElementById("chat-container");
    chatContainer.scrollTop = chatContainer.scrollHeight;
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() !== "") {
      socket.emit("chat_message", inputValue);
      scrollToBottom();
      setInputValue("");
    }
  };

  return (
    <form
      id="form"
      action=""
      method="post"
      onSubmit={handleSubmit}
      class="flex max-h-24 w-full flex-shrink-0 justify-center bg-slate-300 px-2 py-6"
    >
      <input
        type="text"
        name="chat-input"
        id="chat-input"
        placeholder="Type your message..."
        value={inputValue}
        onChange={handleChange}
        class="w-full rounded border border-slate-400 bg-slate-100 p-2 focus:shadow-sm focus:shadow-blue-800 focus:outline-none focus:ring-1 focus:ring-blue-400 md:w-2/6"
      />

      <input
        type="submit"
        value="Send"
        class="ml-2 w-20 rounded-md bg-blue-600 p-2 text-white transition duration-75 ease-in-out hover:cursor-pointer hover:bg-blue-800 focus:bg-blue-800 focus:outline-none active:bg-blue-600"
      />
    </form>
  );
}
