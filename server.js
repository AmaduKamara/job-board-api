const express = require("express");

const app = express();

// Middleware
app.use(express.json());

const PORT = 4000;

const jobs = [];

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

const getAllJobs = (req, res) => {
  console.log(req.requestTime);
  res.status(200).json({ status: "success", data: jobs });
};

const getJob = (req, res) => {
  const id = req.params.id * 1; // multiply the returned id by 1 to convert it to string value

  if (id > jobs.length) {
    return res
      .status(404)
      .json({ status: "Failed", message: "Invalid job ID" });
  }

  const job = jobs.find((job) => job.id === id);

  // if (!job) {
  //   return res.status(404).json({
  //     status: "Failed",
  //     message: "Could notn find a bob with the given ID",
  //   });
  // }

  res.status(200).json({ status: "success", data: job });
};

const createNewJob = (req, res) => {
  const job = req.body;

  jobs.push(job);
  res.status(201).json({ message: "Add New Jobs", job });
};

const updateJob = (req, res) => {
  const id = req.params.id * 1;

  const job = jobs.find((job) => job.id === id);
  if (!job) {
    return res
      .status(404)
      .json({ status: "Failed", message: "Tour not found" });
  }
  res.status(200).json({ status: "success", message: "Updated job" });
};

const deleteJob = (req, res) => {
  res.status(200).json({ status: "success", message: "Deleted job" });
};

// User Controller Functions
const getAllUsers = (req, res) => {
  res.status(500).json({
    status: "Success",
    message: "This route is not created yet",
  });
};

const getUser = (req, res) => {
  res.status(500).json({
    status: "Success",
    message: "This route is not created yet",
  });
};

const createUser = (req, res) => {
  res.status(500).json({
    status: "Success",
    message: "This route is not created yet",
  });
};

const updateUser = (req, res) => {
  res.status(500).json({
    status: "Success",
    message: "This route is not created yet",
  });
};

const deleteUser = (req, res) => {
  res.status(500).json({
    status: "Success",
    message: "This route is not created yet",
  });
};

// SHortening the routes
app.route("/api/v1/jobs").get(getAllJobs).post(createNewJob);
app.route("/api/v1/jobs/:id").get(getJob).patch(updateJob).delete(deleteJob);

// Users Routes
app.route("/api/v1/users").get(getAllUsers).post(createUser);
app
  .route("/api/v1/users/:id")
  .get(getUser)
  .patch(updateUser)
  .delete(deleteUser);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
