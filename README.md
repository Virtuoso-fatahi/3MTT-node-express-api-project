# Node.js Express REST API

## Project Overview
This project implements a basic RESTful API using Node.js and Express.js, providing CRUD (Create, Read, Update, Delete) operations for managing user resources. It uses an in-memory data store, making it suitable for learning and demonstrating core API concepts. The application follows best practices for route modularity, error handling, and input validation.

## Features
1. Express.js Framework: A robust and flexible web application framework.

2. RESTful API Design: Clear, intuitive endpoints for user management.

3. CRUD Operations: Full functionality to create, retrieve, update, and delete user data.

4. In-Memory Data Store: Simple array-based storage for demonstration purposes.

5. Input Validation: Basic validation for name and description fields on user creation and updates.

6. Centralized Error Handling: Global error middleware and a 404 Not Found handler.

7. Modular Code Structure: Separation of concerns with dedicated route files.

## Prerequisites
Before you begin, ensure you have the following installed on your system:

Node.js: Download & Install Node.js (LTS version recommended).

npm (Node Package Manager): Comes bundled with Node.js.

## Setup and Installation
Follow these steps to get the project up and running on your local machine:

Clone the Repository (or create the files manually):

If you're creating the files, ensure you have the following structure:

my-api-project/
├── app.js
├── package.json
└── routes/
    └── users.js

Navigate to the Project Directory:

cd my-api-project

Install Dependencies:

Install the necessary Node.js packages as defined in package.json.

npm install

Start the Server:

Launch the Express application.

npm start

You should see a message in your console indicating that the server is running, typically on http://localhost:3000.

## API Endpoints
The API exposes endpoints for managing users. All responses are in JSON format.

1. Get All Users
URL: /users

Method: GET

Description: Retrieves a list of all users currently in the in-memory store.

Request Body: None

Example Request:

GET http://localhost:3000/users

Example Response (Status: 200 OK):

[
  { "id": "1", "name": "Alice Smith", "description": "Software Engineer" },
  { "id": "2", "name": "Bob Johnson", "description": "Project Manager" },
  { "id": "3", "name": "Charlie Brown", "description": "UX Designer" }
]

2. Create a New User
URL: /users

Method: POST

Description: Adds a new user to the in-memory store. Requires name and description in the request body.

Request Body (JSON):

{
  "name": "Jane Doe",
  "description": "Marketing Specialist"
}

Example Request:

POST http://localhost:3000/users
Content-Type: application/json

{
  "name": "Jane Doe",
  "description": "Marketing Specialist"
}

Example Response (Status: 201 Created):

{
  "message": "User created successfully",
  "user": {
    "id": "abc123xyz",
    "name": "Jane Doe",
    "description": "Marketing Specialist"
  }
}

Error Response (Status: 400 Bad Request - if name or description is missing):

{
  "message": "Name and description are required fields.",
  "status": 400
}

3. Get User by ID
URL: /users/:id

Method: GET

Description: Retrieves a single user by their unique ID.

URL Parameters: id (e.g., /users/1)

Request Body: None

Example Request:

GET http://localhost:3000/users/1

Example Response (Status: 200 OK):

{
  "id": "1",
  "name": "Alice Smith",
  "description": "Software Engineer"
}

Error Response (Status: 404 Not Found - if user ID does not exist):

{
  "message": "User with ID <id> not found",
  "status": 404
}

4. Update User by ID
URL: /users/:id

Method: PUT

Description: Updates an existing user's name and description by their unique ID.

URL Parameters: id (e.g., /users/1)

Request Body (JSON):

{
  "name": "Alice Wonderland",
  "description": "Senior Software Engineer"
}

Example Request:

PUT http://localhost:3000/users/1
Content-Type: application/json

{
  "name": "Alice Wonderland",
  "description": "Senior Software Engineer"
}

Example Response (Status: 200 OK):

{
  "message": "User updated successfully",
  "user": {
    "id": "1",
    "name": "Alice Wonderland",
    "description": "Senior Software Engineer"
  }
}

Error Response (Status: 400 Bad Request - if name or description is missing):

{
  "message": "Name and description are required fields.",
  "status": 400
}

Error Response (Status: 404 Not Found - if user ID does not exist):

{
  "message": "User with ID <id> not found",
  "status": 404
}

5. Delete User by ID
URL: /users/:id

Method: DELETE

Description: Removes a user from the in-memory store by their unique ID.

URL Parameters: id (e.g., /users/1)

Request Body: None

Example Request:

DELETE http://localhost:3000/users/1

Example Response (Status: 204 No Content):

A successful DELETE operation typically returns a 204 status with no response body.

Error Response (Status: 404 Not Found - if user ID does not exist):

{
  "message": "User with ID <id> not found",
  "status": 404
}

## Error Handling
1. 404 Not Found: Any request to an undefined route will result in a 404 Not Found response.

2. Global Error Handling: Uncaught errors within the application will be handled by a global error middleware, returning a 500 Internal Server Error (or specific status if already set).

3. Validation Errors: Missing required fields (name, description) during POST or PUT operations will return a 400 Bad Request with a descriptive message.