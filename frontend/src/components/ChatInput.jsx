import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Send } from "lucide-react";

export default function ChatInput() {
  const [question, setQuestion] = useState("");
  const navigate = useNavigate();

  const handleSend = () => {
    if (!question.trim()) return;

    navigate("/chat", {
      state: {
        question,
      },
    });
  };

  return (
    <div className="mt-6 flex gap-4">
      <input
        type="text"
        placeholder="Ask anything about this contract..."
        className="flex-1 border rounded-xl px-5 py-4 outline-none"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSend();
          }
        }}
      />

      <button
        onClick={handleSend}
        className="bg-blue-700 hover:bg-blue-800 text-white px-6 rounded-xl"
      >
        <Send />
      </button>
    </div>
  );
}