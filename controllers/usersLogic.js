import { v4 as uuidv4 } from "uuid"; // Importing uuidv4 for generating unique IDs

let users = []; // Initializing an empty array to store users

// Function to get all users
export const getAllUsers = (req, res) => {
  res.send(users); // Sending a response for the users route
};

// Function to create a new user
export const createUser = (req, res) => {
  const user = req.body;

  users.push({...user, id: uuidv4()}); // Adding a new user to the users array with a unique ID

  res.send(
    `User with this name ${user.firstName} has been added to the database!`
  ); // Sending a response after adding a new user
};

// Function to get user by ID
export const getUserById = (req, res) => {
          const { id } = req.params;

          const foundUser = users.find((user) => user.id === id);

          if (!foundUser) {
            return res.status(404).send("User not found!"); // Sending a 404 error if user is not found
          }

          res.send(foundUser); // Sending the found user as a response
};

// Function to delete a user by ID
export const deleteUserbyId = (req, res) => {
          const { id } = req.params;

          users = users.filter((user) => user.id !== id);

          res.send(`User with ID ${id} has been deleted!`); // Sending a response after deleting the user

};

//  Function to update a user by ID
export const updateUserById = (req, res) => {
   const { id } = req.params;
   const { firstName, lastNmae, age } = req.body;

   const user = users.find((user) => user.id === id);

   if (!user) {
      return res.status(404).send("User not found!"); // Sending a 404 error if user is not found
    }

   if (firstName) user.firstName = firstName; // Updating firstName if provided
   if (lastNmae) user.lastNmae = lastNmae; // Updating lastName if provided
   if (age) user.age = age; // Updating age if provided
   
   res.send(`User with ID ${id} has been updated!`); // Sending a response after updating the user
};