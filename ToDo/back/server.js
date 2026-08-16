const express = require('express');
const cors = require('cors');
const { randomUUID } = require('crypto');

const app = express();
app.use(cors());
app.use(express.json());

// In-memory storage
let todos = [
  { id: randomUUID(), description: 'short description', fullDescription: 'Full info here', done: true },
];

// GET /todos - list all
app.get('/todos', (req, res) => {
  res.json(todos);
});

// GET /todos/:id - single item
app.get('/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === req.params.id);
  if (!todo) return res.status(404).json({ error: 'Not found' });
  res.json(todo);
});

// POST /todos - create
app.post('/todos', (req, res) => {
  const { description, fullDescription } = req.body;
  if (!description) return res.status(400).json({ error: 'description is required' });

  const newTodo = {
    id: randomUUID(),
    description,
    fullDescription: fullDescription || '',
    done: false,
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// PATCH /todos/:id - update (toggle done, edit fields)
app.patch('/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === req.params.id);
  if (!todo) return res.status(404).json({ error: 'Not found' });

  Object.assign(todo, req.body);
  res.json(todo);
});

// DELETE /todos/:id - remove
app.delete('/todos/:id', (req, res) => {
  const exists = todos.some(t => t.id === req.params.id);
  if (!exists) return res.status(404).json({ error: 'Not found' });

  todos = todos.filter(t => t.id !== req.params.id);
  res.status(204).send();
});

const PORT = 4000;
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));