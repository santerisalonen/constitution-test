const express = require('express');
const { createTask, getTasks, completeTask, deleteTask } = require('./store');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/tasks', (req, res) => {
  const title = req.body && req.body.title;
  if (typeof title !== 'string' || title.trim() === '') {
    return res.status(400).json({ error: 'title is required' });
  }
  const task = createTask(title.trim());
  return res.status(201).json(task);
});

app.get('/tasks', (req, res) => {
  return res.json(getTasks());
});

app.post('/tasks/:id/complete', (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id < 1) {
    return res.status(400).json({ error: 'invalid task id' });
  }
  const task = completeTask(id);
  if (!task) {
    return res.status(404).json({ error: 'task not found' });
  }
  return res.json(task);
});

app.delete('/tasks/:id', (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id < 1) {
    return res.status(400).json({ error: 'invalid task id' });
  }
  const deleted = deleteTask(id);
  if (!deleted) {
    return res.status(404).json({ error: 'task not found' });
  }
  return res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Task Manager API listening on port ${PORT}`);
});
