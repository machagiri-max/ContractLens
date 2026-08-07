import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

const messages = [
  {
    sender: "user",
    message: "What is the notice period?",
  },
  {
    sender: "bot",
    message:
      "The agreement specifies a notice period of 30 days before termination.",
    sources: ["Page 2", "Clause 4.1"],
  },
  {
    sender: "user",
    message: "Who owns the intellectual property?",
  },
  {
    sender: "bot",
    message:
      "All intellectual property created during employment belongs to the company.",
    sources: ["Page 7", "Clause 9"],
  },
];

export default function ChatPanel() {
  return (
    <div className="bg-white rounded-3xl shadow-sm border p-6">

      <h2 className="text-2xl font-bold mb-6">
        🤖 Chat with Contract
      </h2>

      <div className="space-y-5 max-h-[420px] overflow-y-auto pr-2">

        {messages.map((msg, index) => (
          <ChatMessage
            key={index}
            sender={msg.sender}
            message={msg.message}
            sources={msg.sources}
          />
        ))}

      </div>

      <ChatInput />

    </div>
  );
}