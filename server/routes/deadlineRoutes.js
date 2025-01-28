const express = require("express");
const router = express.Router();
const deadlineController = require("../controllers/deadlineControllers");

// Route for changing the deadline
router.put("/change-deadline/:taskId", deadlineController.changeDeadlineHandler);

module.exports = router;