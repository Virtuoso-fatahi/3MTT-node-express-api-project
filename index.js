import express from "express";

import usersRoute from "./routes/users.js"; // Importing users route

const app = express(); // Creating an instance of express
const PORT = 5500; // Defining the port number

// Middleware to parse JSON bodies from incoming requests.
// express.json() is now built into Express and replaces body-parser for JSON.
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  // Defining a GET route for the root path
  res.send("Hello, World!"); // Sending a response
});

// Mount the user routes under the /users endpoint.
// All requests to /users and its sub-paths will be handled by usersRoutes.
app.use("/users", usersRoute);

// 404 Not Found handler middleware.
// This middleware will catch any requests that don't match existing routes.
app.use((req, res, next) => {
  const error = new Error(`Not Found: ${req.originalUrl}`); // Creating a new error for invalid routes
  res.status(404).json({
    message: error.message, // Sending a 404 error response for invalid routes
    status: 404,
  });
});

// Global error handler middleware.
// This handles any errors that occur during request processing.
app.use((err, req, res, next) => {
  // If a status code has already been set, use it; otherwise, default to 500 (Internal Server Error).
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    message: err.message,
  });
});

// Starting the server and listening on the defined port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Access the API at http://localhost:${PORT}`);
});
