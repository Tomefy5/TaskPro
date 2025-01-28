const { sortTasks } = require("../services/sortTasksServices");

const sortTasksHandler = async (req, res) => {
    try {
        const sortedTasks = await sortTasks();
        res.json(sortedTasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { sortTasksHandler };