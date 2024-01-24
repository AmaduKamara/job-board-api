const express = require("express");

// Routes
const jobsRouter = require("./routes/jobsRoutes");
const userRouter = require("./routes/userRoutes");

const app = express();

// Middleware
app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// MOUNTING ROUTERS
// Jobs routes
app.use("/api/v1/jobs", jobsRouter);
// Users Routes
app.use("/api/v1/users", userRouter);

module.exports = app;
