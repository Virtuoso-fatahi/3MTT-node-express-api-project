# Node Express API

A simple Node.js REST API built with Express.

## Setup Instructions

1. **Clone the repository**
   ```sh
   git clone <your-repo-url>
   cd node-express-api
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Start the server**
   ```sh
   npm start
   ```
   The server will run on [http://localhost:5500](http://localhost:5500).

## API Endpoints

### Home

- **GET /**  
  Returns a welcome message.
  ```
  Response: "Hello, World!"
  ```

### Users

All user-related endpoints are prefixed with `/users`.

#### GET /users

- Returns a list of users.

#### POST /users

- Creates a new user.
- **Request Body (JSON):**
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com"
  }
  ```

#### GET /users/:id

- Returns details of a user by ID.

#### PUT /users/:id

- Updates a user by ID.
- **Request Body (JSON):**
  ```json
  {
    "name": "Jane Doe",
    "email": "jane@example.com"
  }
  ```

#### DELETE /users/:id

- Deletes a user by ID.

### Invalid Routes

- Any undefined route returns:
  ```json
  {
    "error": "Route not found"
  }
  ```

## Notes

- All request bodies should be sent as JSON.
- Make sure to update `/routes/users.js` with your user logic.