import Message from './Message'

export default function ChatContainer({ messages }){
    return (
        <div class="mt-4 py-3 px-4 mx-auto w-4/5 md:w-2/5 overflow-hidden rounded bg-slate-100 shadow-md" id="messages">
            {
                (messages.length) ? (
                    messages.map((message, index) => (
                        <Message key={index} message={message} />
                    ))
                ) : (<Message message="" />)
            }
        </div>
    )
}