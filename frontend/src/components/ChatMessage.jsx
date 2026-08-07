import { Bot, User } from "lucide-react";

export default function ChatMessage({
  sender,
  message,
  sources = [],
}) {
  const isBot = sender === "bot";

  return (
    <div
      className={`flex gap-4 ${
        isBot ? "justify-start" : "justify-end"
      }`}
    >
      {isBot && (
        <div className="bg-blue-600 p-3 rounded-full text-white">
          <Bot size={18} />
        </div>
      )}

      <div
        className={`max-w-[80%] rounded-2xl px-5 py-4 shadow-sm ${
          isBot
            ? "bg-white border"
            : "bg-blue-700 text-white"
        }`}
      >
        <p>{message}</p>

        {isBot && sources.length > 0 && (
          <div className="mt-4 flex gap-2 flex-wrap">

            {sources.map((source) => (
              <span
                key={source}
                className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full"
              >
                📄 {source}
              </span>
            ))}

          </div>
        )}
      </div>

      {!isBot && (
        <div className="bg-slate-700 p-3 rounded-full text-white">
          <User size={18} />
        </div>
      )}
    </div>
  );
}