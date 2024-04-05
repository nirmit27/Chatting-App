import Message from "./Message";

export default function ChatContainer({ messages }) {
  return (
    <div
      class="flex-1 overflow-y-auto rounded bg-slate-200 px-6 py-4 shadow-md"
      id="messages"
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
