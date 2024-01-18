const express = require("express");

const app = express();

const PORT = 4000;

// GET - All jobs
app.get("/api/v1/jobs", (req, res) => {
  res.status(200).json({ status: "success", message: "Get All Jobs" });
});

// GET - A single job
app.get("/api/v1/jobs/:id", (req, res) => {
  res.status(200).json({ status: "success", message: "Get Job" });
});

// POST - New jobs
app.post("/api/v1/jobs", (req, res) => {
  res.status(201).json({ message: "New Jobs" });
});

// PUT - Update a single job
app.put("/api/v1/jobs/:id", (req, res) => {
  res.status(200).json({ status: "success", message: "Updated job" });
});

// DELETE - Delete a single job
app.delete("/api/v1/jobs/:id", (req, res) => {
  res.status(200).json({ status: "success", message: "Deleted job" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
