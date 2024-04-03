export default function Message({ message }){
    return (
        <div class="flex items-end justify-end">
            <div class="ml-11 mr-3">
                {
                    message ? (
                    <div class="rounded-lg bg-blue-500 px-3 py-2 text-white">
                        <p class="text-sm">{ message }</p>
                    </div>
                    ) : (
                    <div class="rounded-lg bg-transparent px-3 py-2 text-slate-400">
                        <p class="text-sm">Say something ...</p>
                    </div>
                    )
                }
            </div>
        </div>
    )   
}