const {
  createtask,
  deleteTask,
  updateTask,
} = require("../services/taskServices");

// Controller for creating tasks
const createTaskHandler = async (req, res) => {
  const task = req.body;
  try {
    const createdTask = await createtask(task);
    res.status(201).json(createdTask);
  } catch (error) {
    res.status(500).json({
      message: `Error creating task: ${error.message}`,
      error: error.message,
    });
  }
};

// Controller for deleting tasks
const deleteTaskHandler = async (req, res) => {
  const { taskId } = req.params;
  try {
    await deleteTask(taskId);
    res.json({ message: "Task delete successfully" });
  } catch (error) {
    res.status(500).json({
      message: `Error deleting task: ${error.message}`,
      error: error.message,
    });
  }
};

// Controllers for updating tasks
const updateTaskHandler = async (req, res) => {
  const updates = req.body;
  const { taskId } = req.params; // request form: "http://.../update-task/:taskId", updates
  try {
    const updatedTask = await updateTask(taskId, updates);
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: `Error updating task: ${error.message}` });
  }
};

module.exports = {
  createTaskHandler,
  deleteTaskHandler,
  updateTaskHandler,
};
