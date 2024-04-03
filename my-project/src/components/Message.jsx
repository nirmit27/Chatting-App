import { useState } from "react";

export default function Message(){

    const [sentMessage, updateMessage ] = useState("");

    if(!sentMessage){
        return (
            <div>
                {/* Empty */}
            </div>
        );
    }

    else return (
        <div class="mb-4 flex items-end justify-end">
            <div class="ml-11 mr-3">
                <div class="rounded-lg bg-blue-500 p-3 text-white">
                    <p class="text-sm">{ sentMessage }</p>
                </div>
            </div>
        </div>
    );
}