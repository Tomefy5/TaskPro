const { changeDeadline } = require("../services/deadlineServices");

const changeDeadlineHandler = async (req, res) => {
  const { taskId } = req.params;
  const { deadline } = req.body; // https://...?deadline=${deadline}
  try {
    const taskToUpdate = await changeDeadline(taskId, deadline);
    res.json(taskToUpdate);
  } catch (error) {
    res.status(500).json({
      message: `Error changing deadline: ${error.message}`,
      error: error.message,
    });
  }
};

module.exports = { changeDeadlineHandler };
