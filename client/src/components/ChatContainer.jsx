import { useState } from "react";
import Message from "./Message";

export default function ChatContainer({ messages }) {

  // 

  return (
    <div
      class="py-3 px-2 mx-auto w-4/5 md:w-2/5 overscroll-contain rounded bg-slate-50 shadow-md"
      id="messages"
    >
      {messages.length ? (
        messages.map((message, index) => (
          <Message key={index} message={message} />
        ))
      ) : (
        <Message message="" />
      )}
    </div>
  );
}
