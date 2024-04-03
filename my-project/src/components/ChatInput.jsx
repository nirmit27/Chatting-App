import { useState, useEffect } from "react";

export default function ChatInput(){
    return (
        <form id="form" action="" method="post" class="fixed bottom-0 flex max-h-24 w-screen justify-center bg-slate-300 p-6">
        <input type="text" name="chat-input" id="chat-input" placeholder="Enter your prompt"
            class="w-300 rounded border border-slate-400 p-2 focus:shadow-sm focus:shadow-blue-800 focus:outline-none focus:ring-1 focus:ring-blue-400 md:w-2/6" />
        <input type="submit" value="Send" class="ml-2 w-20 rounded-md bg-blue-600 p-2 text-white hover:cursor-pointer hover:bg-blue-800 focus:bg-blue-800 focus:outline-none
            transition ease-in-out delay-50 active:bg-blue-600" />
        </form>
    );
}