const Task = require("../models/Task");

// Create Task
const createtask = async (task) => {
  // Title verification
  if (!task.title || typeof task.title !== "string")
    throw new Error("Task is required and must be a string");

  // Priority verification
  if (task.priority && !["high", "low", "medium"].includes(task.priority))
    throw new Error("Invalid priority value");

  const newTask = new Task(task);

  try {
    await newTask.save();
  } catch (err) {
    throw err; //propagate error
  }
};

module.exports = { createtask };
