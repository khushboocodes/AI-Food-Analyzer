console.log("🔥 detectIngredients FILE IS RUNNING");

import { ingredientKnowledge } from "../data/ingredientKnowledge";

export function detectIngredients(text) {
  if (!text) return [];

  // Normalize input: lowercase + remove punctuation
  const cleaned = text
    .toLowerCase()
    .replace(/[^a-z\s]/g, " ");

  const detected = [];

  if (cleaned.includes("sugar")) detected.push("sugar");
  if (cleaned.includes("salt") || cleaned.includes("sodium"))
    detected.push("salt");
  if (cleaned.includes("palm")) detected.push("palmOil");
  if (cleaned.includes("benzoate")) detected.push("sodiumBenzoate");
  if (cleaned.includes("color") || cleaned.includes("colour"))
    detected.push("artificialColor");

  return [...new Set(detected)].map(
    (key) => ingredientKnowledge[key]
  );
}
