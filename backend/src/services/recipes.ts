import pool from "../db.ts";
import { type RecipeInput } from "../types.ts";

const getAll = async () => {
  const result = await pool.query("SELECT * FROM recipes");
  return result.rows;
};

const createRecipe = async (recipe: RecipeInput) => {
  const result = await pool.query(`
    INSERT INTO recipes (name, url) VALUES ($1, $2) RETURNING *;
  `, [recipe.name, recipe.url]);
  return result.rows[0];
};

const reset = async () => {
  await pool.query(`
    TRUNCATE TABLE recipes RESTART IDENTITY CASCADE;
  `);
};

export default { getAll, createRecipe, reset };
