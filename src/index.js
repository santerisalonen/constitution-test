const express = require('express');
const { createTask } = require('./store');

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

app.listen(PORT, () => {
  console.log(`Task Manager API listening on port ${PORT}`);
});
