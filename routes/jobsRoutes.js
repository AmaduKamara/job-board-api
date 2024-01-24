const express = require("express");

const router = express.Router();

const jobs = [];

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

// Jobs routes
router.route("/").get(getAllJobs).post(createNewJob);
router.route("/:id").get(getJob).patch(updateJob).delete(deleteJob);

module.exports = router;
