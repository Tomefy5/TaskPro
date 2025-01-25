const express = require('express');
const router = express.Router();
const taskController = require("../controllers/taskControllers");

// Route for creating new task
router.post("/create-task", taskController.createTaskHandler);

// Route for deleting task
router.delete("/delete-task/:taskId", taskController.deleteTaskHandler);

// Route for updating task
router.put("/update-task/:taskId", taskController.updateTaskHandler);

module.exports = router;