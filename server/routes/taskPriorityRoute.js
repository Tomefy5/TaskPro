const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskPriorityControllers");

// Route for changing task priority
router.put("/change-priority/:taskId", taskController.changePriorityHandler); // request form: `http://localhost:5000/api/change-priority/${taskId}?priority=${priority}`

module.exports = router;
