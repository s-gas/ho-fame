import app from "./app.ts";
import "dotenv/config";

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server listening at :${PORT}`);
});
