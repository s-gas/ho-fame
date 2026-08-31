import type { Recipe, RecipeInput } from "../types";

const url = "http://localhost:3000/api/recipes";

const getAll = async (): Promise<Recipe[]> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`getAll: response status: ${response.status}`);
  }
  const data: Recipe[] = await response.json();
  return data;
};

const createRecipe = async (recipe: RecipeInput): Promise<Recipe> => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(recipe),
  });
  if (!response.ok) {
    throw new Error(`createRecipe: response status: ${response.status}`);
  }
  const data: Recipe = await response.json();
  return data;
};

export default { getAll, createRecipe };
