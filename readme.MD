# Todo API

This is a simple RESTful API for managing a todo list. It provides endpoints for creating, reading, updating, and deleting todo items.

## Features

- In-memory storage with file persistence
- CRUD operations for todo items
- Express.js server

## Getting Started

### Prerequisites

- Node.js (v12 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/todo-api.git
   ```

2. Navigate to the project directory:
   ```
   cd todo-api
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the server:
   ```
   node server.js
   ```

The server will start running on `http://localhost:3000`.

## API Endpoints

### 1. Get Hello World

- **URL:** `/`
- **Method:** GET
- **Description:** Returns a "Hello World" message.

### 2. Get All Todos

- **URL:** `/todos`
- **Method:** GET
- **Description:** Retrieves all todo items.

### 3. Create Todo

- **URL:** `/todos`
- **Method:** POST
- **Body:**
  ```json
  {
    "id": 1,
    "title": "Buy groceries",
    "completed": false
  }
  ```
- **Description:** Creates a new todo item.

### 4. Update Todo

- **URL:** `/todos/:id`
- **Method:** PUT
- **Body:**
  ```json
  {
    "title": "Buy groceries and cleaning supplies",
    "completed": true
  }
  ```
- **Description:** Updates an existing todo item by ID.

### 5. Delete Todo

- **URL:** `/todos/:id`
- **Method:** DELETE
- **Description:** Deletes a todo item by ID.

## Postman Collection

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Acknowledgments

- Express.js for the web framework
- Postman for API testing and documentation