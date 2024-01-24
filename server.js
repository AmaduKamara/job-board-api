const express = require("express");

const jobsRouter = require("./routes/jobsRoutes");
const userRouter = require("./routes/userRoutes");

const app = express();

// Middleware
app.use(express.json());

const PORT = 4000;

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// Jobs routes
app.use("/api/v1/jobs", jobsRouter);

// Users Routes
app.use("/api/v1/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
