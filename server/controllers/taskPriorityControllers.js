const { changePriority } = require("../services/taskPriorityServices");

const changePriorityHandler = async (req, res) => {
  // request form: `http://localhost:5000/api/change-priority/${taskId}?priority=${priority}`
  const { taskId } = req.params;
  const newPriority = req.query.priority;

  try {
    const taskChanged = await changePriority(taskId, newPriority);
    res.json(taskChanged);
  } catch (error) {
    res.status(500).json({
      message: `Error changing task priority: ${error.message}`,
      error: error.message,
    });
  }
};

module.exports = { changePriorityHandler };
