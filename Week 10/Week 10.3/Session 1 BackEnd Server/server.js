// server start krna
const database = require("./db/db");
const app = require("./src/app");

console.log(database);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// Database se connect krna hai.
