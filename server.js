const express = require("express");
const app = express();

let visitorCount = 0;

app.get("/", (req, res) => {
  // Increase the visitor count
  visitorCount++;

  // Get the current time
  const now = new Date();

  // Send the response
  res.send(
    `Current time: ${now.toLocaleTimeString()}. Number of visitors: ${visitorCount}`
  );
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
