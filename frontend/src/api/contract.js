import api from "./api";

export const uploadContract = async (file) => {
  const formData = new FormData();

  formData.append("file", file);

  return await api.post(
    "/contracts/upload",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
};