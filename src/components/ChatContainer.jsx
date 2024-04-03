import Message from './Message'

export default function ChatContainer({ message }){
    return (
        <div class="mt-4 mx-auto max-w-lg overflow-hidden rounded bg-slate-100 p-4 shadow-md" id="messages">
            {
                message ? (<Message message={message} />) : (<Message message="" />)
            } 
        </div>
    )
}