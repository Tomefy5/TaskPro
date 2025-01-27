const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskPriorityControllers");

// Route for changing task priority
router.put("/change-priority/:taskId", taskController.changePriorityHandler);

module.exports = router;