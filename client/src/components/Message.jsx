export default function Message({ message, altColor }) {
  return (
    <div class="mb-2 flex items-end justify-end">
      {message ? (
        <div
          class={`overflow-hidden rounded-lg ${
            altColor ? "bg-blue-600" : "bg-slate-600"
          } px-3 py-2 text-white`}
        >
          <p class="break-words text-sm">{message}</p>
        </div>
      ) : (
        <div class="overflow-hidden rounded-lg bg-slate-300 px-4 py-4 text-slate-500">
          <p class="break-words text-sm">Say something...</p>
        </div>
      )}
    </div>
  );
}
