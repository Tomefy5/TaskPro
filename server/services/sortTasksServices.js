const Task = require("../models/Task");

const sortTasks = async () => {
  try {
    const tasks = await Task.find();
    if (!tasks) throw new Error("sortTasks: can't fecth tasks");

    const sortedTasks = tasks.sort((a, b) => {
      // First, sort by priority
      if (a.priority !== b.priority) {
        return a.priority === "high" ? -1 : a.priority === "medium" ? 0 : 1;
      }

      // Then, sort by deadline if priorities are the same
      return new Date(a.deadline) - new Date(b.deadline);
      // Negatif if a older than b
      // Pofitif if b older than a
    });
    return sortedTasks;
  } catch (error) {
    throw error;
  }
};

module.exports = { sortTasks };
