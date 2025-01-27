const mongoose = require("mongoose");
const Task = require("../models/Task");
// Change priority of task
const changePriority = async (taskId, newPriority) => {
  const taskObjectId = new mongoose.Types.ObjectId(taskId);
  const validPriorities = ["low", "medium", "high"];
  try {
    if (!validPriorities.includes(newPriority))
      throw new Error("Invalid priority value");
    const taskToUpdate = await Task.findByIdAndUpdate(
      taskObjectId,
      { priority: newPriority },
      { new: true }
    );
    if (!taskToUpdate) throw new Error("changePriority: task not found");
    return taskToUpdate;
  } catch (error) {
    throw error;
  }
};

module.exports = { changePriority };
