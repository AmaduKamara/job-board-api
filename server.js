const express = require("express");

const app = express();

const PORT = 4000;

app.get("/", (req, res) => {
  res
    .status(200)
    .json({ message: "Hello, job board api server is running successfully" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
