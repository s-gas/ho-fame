import pool from "../db.ts";
import type { RecipeInput } from "../types.ts";

const getAll = async () => {
  const result = await pool.query("SELECT * FROM recipes");
  return result.rows;
};

const createRecipe = async (recipe: RecipeInput) => {
  const result = await pool.query(`
    INSERT INTO recipes (name) VALUES ($1) RETURNING *;
  `, [recipe.name]);
  console.log(result.rows[0]);
  return result.rows[0];
}

export default { getAll, createRecipe };
