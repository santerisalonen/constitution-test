let nextId = 1;
const tasks = [];

function createTask(title) {
  const task = { id: nextId++, title, completed: false };
  tasks.push(task);
  return task;
}

function getTasks() {
  return tasks;
}

function completeTask(id) {
  const task = tasks.find((t) => t.id === id);
  if (!task) return null;
  task.completed = true;
  return task;
}

function deleteTask(id) {
  const index = tasks.findIndex((t) => t.id === id);
  if (index === -1) return false;
  tasks.splice(index, 1);
  return true;
}

module.exports = {
  createTask,
  getTasks,
  completeTask,
  deleteTask,
};
