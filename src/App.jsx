import { useState } from 'react'
import ChatContainer from './components/ChatContainer'
import ChatInput from './components/ChatInput'

export default function App(){

    const [ message, setMessage ] = useState("")

    return (
        <div>
            <ChatContainer message={message}/>
            <ChatInput setMessage={setMessage}/>
        </div>
    )
}