const express = require('express');
const router = express.Router();
const taskController = require("../controllers/taskControllers");

// Route for creating new task
router.post("/create-task", taskController.createTaskHandler);

// Route for deleting task
router.delete("/delete-task/:taskId", taskController.deleteTaskHandler);

module.exports = router;