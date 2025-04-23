const express = require("express");
const morgan = require("morgan");
const app = express();
app.use(morgan("dev"));
// Route to handle the root URL
app.get("/", (req, res) => {
  for (let i = 0; i < 100000000; i++) {}
  res.send("Hello, World!");
});

app.get("/stress-test", (req, res) => {
  for (let i = 0; i < 100000000; i++) {}
  res.send("Hello, World!");
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
