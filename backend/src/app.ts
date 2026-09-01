import express from 'express';
import cors from 'cors';
import recipesRouter from "./routes/recipes.ts";
import resetRouter from "./routes/reset.ts";

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/recipes', recipesRouter);
if (process.env.NODE_ENV === "test") {
  app.use('/api/reset', resetRouter);
}

export default app;
