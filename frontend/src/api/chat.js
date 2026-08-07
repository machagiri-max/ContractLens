import api from "./api";

export const askAI = async (question) => {
  return await api.post("/chat", {
    question,
  });
};