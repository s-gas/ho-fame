import pool from "./db.ts";

const schema = `
  CREATE TABLE IF NOT EXISTS recipes (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
  );
`;

const createSchema = async () => {
  try {
    await pool.query(schema);
    console.log("createSchema: success");
  } catch (err) {
    console.log("createSchema: failure: ", err);
  } finally {
    await pool.end();
  }
}

const resetSchema = async () => {
  try {
    await pool.query("DROP SCHEMA IF EXISTS public CASCADE; CREATE SCHEMA public;");
    console.log("resetSchema: success")
  } catch (err) {
    console.log("resetSchema: failure: ", err);
  }
}

if (process.env.NODE_ENV === "test") await resetSchema();
await createSchema();
