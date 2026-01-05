import { useState } from "react";
import { analyzeText, analyzeImage } from "../services/api";
import AiAnalysis from "../components/AiAnalysis";

function FoodAnalyzer() {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleTextAnalyze = async () => {
    setLoading(true);
    try {
      const data = await analyzeText(text);
      setResult(data);
    } catch (err) {
      alert("Text analysis failed");
    }
    setLoading(false);
  };

  const handleImageAnalyze = async () => {
    if (!image) return alert("Please upload an image");
    setLoading(true);
    try {
      const data = await analyzeImage(image);
      setResult(data);
    } catch (err) {
      alert("Image analysis failed");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">AI Food Analyzer</h1>

      {/* TEXT INPUT */}
      <textarea
        className="w-full p-3 border rounded mb-3"
        placeholder="Paste ingredient list here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={handleTextAnalyze}
        className="bg-green-600 text-white px-4 py-2 rounded mr-3"
      >
        Analyze Text
      </button>

      {/* IMAGE INPUT */}
      <input
        type="file"
        accept="image/*"
        className="mt-4 mb-2"
        onChange={(e) => setImage(e.target.files[0])}
      />

      <button
        onClick={handleImageAnalyze}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Analyze Image
      </button>

      {loading && <p className="mt-4">Analyzing...</p>}

      {result && <AiAnalysis data={result} />}
    </div>
  );
}

export default FoodAnalyzer;
