import * as taskService from '../services/taskService.js';

export async function getTasks(req, res, next) {
  const tasks = await taskService.getAllTasks();
  res.json(tasks);
}

export async function getTaskById(req, res, next) {
  try {
    const task = await taskService.getTaskById(req.params.id);
    res.json(task);
  } catch (error) {
    if (error.status === 404) {
      res.status(404).json({ error: 'Task not found' });
    } else {
      next(error);
    }
  }
}

export async function createTask(req, res, next) {
  const { title, completed } = req.body;
  const task = await taskService.createTask({ title, completed });
  res.status(201).json(task);
}
