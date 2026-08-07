import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { askAI } from "../api/chat";

export default function AIChat() {
  const location = useLocation();

  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hello 👋 Ask me anything about your uploaded contract.",
    },
  ]);

  // Receive question from ContractDetails page
  useEffect(() => {
    if (location.state?.question) {
      const q = location.state.question;

      setQuestion(q);

      sendMessage(q);
    }
  }, []);

  const sendMessage = async (customQuestion = null) => {
    const userQuestion = customQuestion || question;

    if (!userQuestion.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: userQuestion,
      },
    ]);

    setQuestion("");

    setLoading(true);

    try {
      const res = await askAI(userQuestion);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: res.data.answer,
        },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "Something went wrong.",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <main className="flex-1 flex flex-col">
        <Topbar />

        <div className="flex-1 p-8">
          <div className="bg-white rounded-2xl shadow h-full flex flex-col">

            <div className="border-b p-6">
              <h1 className="text-3xl font-bold">
                AI Contract Assistant
              </h1>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-5">

              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={
                    msg.role === "user"
                      ? "text-right"
                      : "text-left"
                  }
                >
                  <div
                    className={
                      msg.role === "user"
                        ? "inline-block bg-blue-700 text-white px-5 py-3 rounded-xl"
                        : "inline-block bg-slate-200 px-5 py-3 rounded-xl"
                    }
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {loading && (
                <p className="text-gray-500">
                  AI is thinking...
                </p>
              )}
            </div>

            <div className="border-t p-5 flex gap-3">

              <input
                className="flex-1 border rounded-xl px-5 py-3"
                placeholder="Ask anything about the contract..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    sendMessage();
                  }
                }}
              />

              <button
                onClick={() => sendMessage()}
                className="bg-blue-700 hover:bg-blue-800 text-white px-8 rounded-xl"
              >
                Send
              </button>

            </div>

          </div>
        </div>
      </main>
    </div>
  );
}