const express = require("express");

const tourController = require("../controllers/jobController");

const router = express.Router();

// Jobs routes
router
  .route("/")
  .get(tourController.getAllJobs)
  .post(tourController.createNewJob);
router
  .route("/:id")
  .get(tourController.getJob)
  .patch(tourController.updateJob)
  .delete(tourController.deleteJob);

module.exports = router;
