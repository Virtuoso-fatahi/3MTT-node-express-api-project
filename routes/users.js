import express from "express"; // Importing express module
import { createUser, deleteUserbyId, getAllUsers, getUserById, updateUserById, validUserInput } from "../controllers/usersLogic.js"; // Importing the createUser function from usersLogic controller

const router = express.Router(); // Creating a new router instance

// Route to get all users
router.get("/", getAllUsers);

// Route to create a new user
router.post("/", validUserInput, createUser); // Using the createUser function to handle POST requests for creating a new user

// Route to get user by ID
router.get("/:id", getUserById); // Using the getUserById function to handle GET requests for fetching a user by ID

// Route to delete a user by ID
router.delete("/:id", deleteUserbyId); // Using the deleteUserbyId function to handle DELETE requests for deleting a user by ID

// Router to update a user by ID
router.patch("/:id", validUserInput, updateUserById); // Using the updateUserById function to handle PATCH requests for updating a user by ID

export default router; // Exporting the router to be used in other files
