import React from 'react';
import Message from './Message';

export default function ChatContainer(){
    return (
        <div class="mx-auto max-w-md overflow-hidden rounded bg-slate-100 p-4 shadow-md" id="messages">
            <Message />
        </div>
    );
}