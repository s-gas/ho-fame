import app from "./app.ts";
import "dotenv/config";

const PORT = process.env.PORT;
const DB = process.env.DB_NAME;

app.listen(PORT, () => {
  console.log("Server info:");
  console.log("- Port:\t", PORT);
  console.log("- DB:\t", DB);
});
