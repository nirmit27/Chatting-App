export default function Message({ message, altColor }) {
  return (
    <div class="flex items-end justify-end">
      <div class="ml-11 mr-3 my-1">
        {message ? (
          <div class={`rounded-lg px-3 py-2 text-white ${
            altColor ? 'bg-blue-600' : 'bg-slate-600'
          } overflow-hidden`}>
            <p class="text-sm break-words">{message}</p>
          </div>
        ) : (
          <div class="rounded-lg bg-transparent px-3 py-2 text-slate-400 overflow-hidden">
            <p class="text-sm break-words">Say something ...</p>
          </div>
        )}
      </div>
    </div>
  );
}
