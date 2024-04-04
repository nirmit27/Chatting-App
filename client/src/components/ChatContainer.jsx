import Message from "./Message";

export default function ChatContainer({ messages }) {
  return (
    <div
      class="py-3 px-2 mx-auto w-full md:w-3/5 md:rounded bg-slate-100 shadow-md"
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
