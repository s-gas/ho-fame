import pool from "../db.ts";
import type { Recipe } from "../types.ts";

const getAll = async () => {
  const result = await pool.query("SELECT * FROM recipes");
  return result.rows;
};

const createRecipe = async (recipe: Recipe) => {
  const result = await pool.query(`
    INSERT INTO recipes (name) VALUES ($1) RETURNING *;
  `, [recipe.name]);
  return result.rows[0];
}

export default { getAll, createRecipe };
