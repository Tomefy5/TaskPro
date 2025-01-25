const { createtask } = require("../services/taskServices");

const createTaskHandler = async (req, res) => {
  const task = req.body;
  try {
    await createtask(task);
    res.status(201).json(task);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error in createTaskHandler", error: error.message });
  }
};

module.exports = {
  createTaskHandler,
};
