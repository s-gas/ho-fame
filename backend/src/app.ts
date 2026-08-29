import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/api/recipes', (_req, res) => {
  res.send('Hello World!');
});

export default app;
