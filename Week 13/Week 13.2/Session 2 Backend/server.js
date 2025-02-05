require("dotenv").config();
const app = require("./src/app");
const connect = require("./src/db/db");

// Connected to database
connect();

// Server listening on port 3000
// Change the port in .env file to start on a different port
app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
