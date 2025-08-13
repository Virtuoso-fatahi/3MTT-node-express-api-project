// const express = require('express'); // Importing express module
import express from 'express'; 
import bodyParser from "body-parser"; // Importing body-parser module
import usersRoute from "./routes/users.js"; // Importing users route


const app = express(); // Creating an instance of express
const PORT = 5500; // Defining the port number

app.use(bodyParser.json()); // Using body-parser middleware to parse JSON request

// Using the users route
app.use('/users', usersRoute); // Mounting the users route at /users path

// Home route
app.get('/', (req, res) => { // Defining a GET route for the root path
    res.send('Hello, World!'); // Sending a response
});

// Handle invalid routes (404)
app.use((req, res, next) => {
    res.status(404).json({
        error: "Route not found" // Sending a 404 error response for invalid routes
    })
})

app.listen(PORT, () => {
          console.log(`Server is running on http://localhost:${PORT}`); // Logging the server status
});