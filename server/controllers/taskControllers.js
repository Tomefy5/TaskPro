const { createtask, deleteTask } = require("../services/taskServices");

// Controller for creating tasks
const createTaskHandler = async (req, res) => {
  const task = req.body;
  try {
    const createdTask = await createtask(task);
    res.status(201).json(createdTask);
  } catch (error) {
    res.status(500).json({
      message: "Error with createTaskHandler()",
      error: error.message,
    });
  }
};

const deleteTaskHandler = async (req, res) => {
  const { taskId } = req.params;
  try {
    await deleteTask(taskId);
    res.json({ message: "Task delete successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Error with deleteTaskHandler()",
      error: error.message,
    });
  }
};

module.exports = {
  createTaskHandler,
  deleteTaskHandler,
};
