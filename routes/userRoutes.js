const express = require("express");

const router = express.Router();

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

// Users Routes
router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
