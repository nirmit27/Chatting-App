import Message from "./Message";

export default function ChatContainer({ messages }) {
  return (
    <div
      class="flex-1 overflow-y-auto rounded bg-slate-200 md:px-60 px-4 pt-4 shadow-md"
      id="chat-container"
    >
      {messages.length ? (
        messages.map((message, index) => (
          <Message key={index} message={message} altColor={index % 2 == 0} />
        ))
      ) : (
        <Message message="" />
      )}
    </div>
  );
}
