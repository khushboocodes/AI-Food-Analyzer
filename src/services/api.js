import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

// TEXT ANALYSIS
export const analyzeText = async (text) => {
  const response = await API.post("/analyze-text", {
    text,
  });
  return response.data;
};

// IMAGE ANALYSIS
export const analyzeImage = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await API.post("/analyze-image", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};
