import socket from "../socketScript";
import { useState } from "react";

export default function ChatInput() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() !== "") {
      socket.emit("chat_message", inputValue);
      setInputValue("");
    }
  };

  return (
    <form
      id="form"
      action=""
      method="post"
      onSubmit={handleSubmit}
      class="fixed bottom-0 flex max-h-24 w-screen justify-center bg-slate-300 p-6"
    >
      <input
        type="text"
        name="chat-input"
        id="chat-input"
        placeholder="Enter your prompt"
        value={inputValue}
        onChange={handleChange}
        class="w-300 rounded border border-slate-400 p-2 
        focus:shadow-sm focus:shadow-blue-800 focus:outline-none focus:ring-1 focus:ring-blue-400 md:w-2/6"
      />

      <input
        type="submit"
        value="Send"
        class="ml-2 w-20 rounded-md bg-blue-600 p-2 text-white hover:cursor-pointer hover:bg-blue-800 focus:bg-blue-800 focus:outline-none transition ease-in-out delay-50 active:bg-blue-600"
      />
    </form>
  );
}
