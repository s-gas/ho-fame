import pool from "../db.ts";

const getAll = async () => {
  const result = await pool.query("SELECT * FROM recipes");
  return result.rows;
};

export default { getAll };
