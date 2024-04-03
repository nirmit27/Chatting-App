import { useState } from 'react'
import ChatContainer from './components/ChatContainer'
import ChatInput from './components/ChatInput'

export default function App(){

    const [ messages, setMessages ] = useState([])

    const handleNewMessages = (message) => {
        setMessages([...messages, message])
    }

    return (
        <div>
            <ChatContainer messages={messages}/>
            <ChatInput onNewMessage={handleNewMessages}/>
        </div>
    )
}