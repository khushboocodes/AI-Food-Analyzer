function AiAnalysis({ data }) {
  return (
    <div className="mt-6 space-y-6">
      {/* SUMMARY */}
      <div className="p-4 bg-yellow-50 border rounded">
        <h2 className="font-semibold text-lg mb-1">AI Summary</h2>
        <p className="text-gray-700">{data.summary}</p>
      </div>

      {/* INGREDIENT CARDS */}
      {data.ingredients.map((item, index) => (
        <div
          key={index}
          className="p-4 border rounded shadow-sm bg-white"
        >
          <h3 className="font-semibold text-lg mb-2">
            ⚠ {item.name} —{" "}
            <span
              className={
                item.risk === "High"
                  ? "text-red-600"
                  : item.risk === "Moderate"
                  ? "text-orange-600"
                  : "text-green-600"
              }
            >
              {item.risk} Risk
            </span>
          </h3>

          <p>
            <strong>Why it matters:</strong> {item.why}
          </p>
          <p>
            <strong>Trade-off:</strong> {item.tradeoff}
          </p>
          <p className="text-gray-600">
            <strong>Uncertainty:</strong> {item.uncertainty}
          </p>
        </div>
      ))}
    </div>
  );
}

export default AiAnalysis;
