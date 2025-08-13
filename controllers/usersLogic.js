import { v4 as uuidv4 } from "uuid"; // Importing uuidv4 for generating unique IDs

// In-memory data store for users.
// Each user object includes id, name, and description as per feedback
let users = [
  { id: '1', name: 'Alice Smith', description: 'Software Engineer' },
  { id: '2', name: 'Bob Johnson', description: 'Project Manager' },
  { id: '3', name: 'Charlie Brown', description: 'UX Designer' },
]; 

// Middleware for input validation.
// This function checks if 'name' and 'description' are present in the request body.
export const validUserInput = (req, res, next) => {
  const { name, description } = req.body;
  if (!name || !description) {
    return res.status(400).json({
      message: "Name and description are required fields.",
      status: 400,
    })
  }

  next(); // If validation passes, proceed to the next middleware or route handler
};

// Function to get all users
export const getAllUsers = (req, res) => {
  res.status(200).json(users); // Sending a response for the users route
};

// Function to create a new user
export const createUser = (req, res) => {
  const user = req.body;

  users.push({...user, id: uuidv4()}); // Adding a new user to the users array with a unique ID

  res.status(201).json(
    { message: 'User created successfully', user: newUser }
  ); // Sending a response after adding a new user
};

// Function to get user by ID
export const getUserById = (req, res) => {
          const { id } = req.params;

          const foundUser = users.find((user) => user.id === id);

          if (!foundUser) {
            return res.status(404).json({ message: `User with ID ${id} not found`, status: 404 }); // Sending a 404 error if user is not found
          }

          res.status(200).json(foundUser); // Sending the found user as a response
};

// Function to delete a user by ID
export const deleteUserbyId = (req, res) => {
          const { id } = req.params;

          const initialLength = users.length; // Storing the initial length of the users array

          users = users.filter((user) => user.id !== id);

          if (users.length === initialLength) {
            return res.status(404).json({ message: `User with ID ${id} not found`, status: 404 }); // Sending a 404 error if user is not found
          }

          res.status(204).send(`User with ID ${id} has been deleted!`); // Sending a response after deleting the user

};

//  Function to update a user by ID
export const updateUserById = (req, res) => {
   const { id } = req.params;
   const { name, description } = req.body;

   const user = users.find((user) => user.id === id);

   if (!user) {
      return res.status(404).json({ message: `User with ID ${id} not found`, status: 404 }); // Sending a 404 error if user is not found
    }

   if (name) user.name = name;
   if (description) user.description = description;

   res.status(200).json({ message: 'User updated successfully', user: users[user]});
};