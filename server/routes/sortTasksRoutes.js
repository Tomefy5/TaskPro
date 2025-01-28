const express = require("express");
const router = express.Router();
const sortTasksControllers = require("../controllers/sortTasksControllers");

// Route for sorting the tasks
router.get("/sort-tasks", sortTasksControllers.sortTasksHandler);

module.exports = router;