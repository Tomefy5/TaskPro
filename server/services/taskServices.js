const { default: mongoose } = require("mongoose");
const Task = require("../models/Task");

// Create Task
const createtask = async (task) => {
  // Title verification
  if (!task.title || typeof task.title !== "string")
    throw new Error("createtask: Task is required and must be a string");

  // Priority verification
  if (task.priority && !["high", "low", "medium"].includes(task.priority))
    throw new Error("createtask: Invalid priority value");

  const newTask = new Task(task);

  try {
    await newTask.save();
    return newTask;
  } catch (err) {
    throw err; //propagate error
  }
};

// Delete Task
const deleteTask = async (taskId) => {

  const taskObjectId = new mongoose.Types.ObjectId(taskId);
  
  try {
    const taskToDelete = await Task.findByIdAndDelete(taskObjectId);
    if (!taskToDelete) throw new Error("deleteTask: Task not found");
  } catch (error) {
    throw error;
  }
};

module.exports = { createtask, deleteTask };
