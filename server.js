const express = require("express");

const app = express();

// Middleware
app.use(express.json());

const PORT = 4000;

const jobs = [];

// GET - All jobs
app.get("/api/v1/jobs", (req, res) => {
  res.status(200).json({ status: "success", jobs });
});

// GET - A single job
app.get("/api/v1/jobs/:id", (req, res) => {
  res.status(200).json({ status: "success", message: "Get Job" });
});

// POST - New jobs
app.post("/api/v1/jobs", (req, res) => {
  const job = req.body;

  jobs.push(job);
  res.status(201).json({ message: "Add New Jobs", job });
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
