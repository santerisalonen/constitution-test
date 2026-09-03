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

module.exports = {
  createTask,
  getTasks,
};
