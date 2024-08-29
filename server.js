const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const port = 3000;

// In-memory database
let todos = [];

// Function to load todos from file
async function loadTodos() {
  try {
    const data = await fs.readFile(path.join(__dirname, 'todos.json'), 'utf8');
    todos = JSON.parse(data);
    console.log('Todos loaded from file');
  } catch (error) {
    console.error('Error loading todos:', error);
    todos = []; // Initialize with empty array if file doesn't exist or has an error
  }
}

// Function to save todos to file
async function saveTodos() {
  try {
    await fs.writeFile(path.join(__dirname, 'todos.json'), JSON.stringify(todos, null, 2));
    console.log('Todos saved to file');
  } catch (error) {
    console.error('Error saving todos:', error);
  }
}

app.use(express.json());

// Load todos when server starts
loadTodos();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// GET all todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

// POST a new todo
app.post('/todos', async (req, res) => {
  const newTodo = req.body;
  todos.push(newTodo);
  await saveTodos();
  res.status(201).json(newTodo);
});

// PUT (update) a todo
app.put('/todos/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const updatedTodo = req.body;
  
  const todoIndex = todos.findIndex(todo => todo.id === id);
  
  if (todoIndex === -1) {
    return res.status(404).json({ message: "Todo not found" });
  }
  
  todos[todoIndex] = { ...todos[todoIndex], ...updatedTodo };
  await saveTodos();
  res.json(todos[todoIndex]);
});

// DELETE a todo
app.delete('/todos/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter(todo => todo.id !== id);
  await saveTodos();
  res.sendStatus(204);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});