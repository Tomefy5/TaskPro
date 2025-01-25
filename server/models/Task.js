const mongoose = require("mongoose");
const { Schema } = mongoose;

const TaskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  priority: {
    type: String,
    enum: ["low", "medium", "high"],
    default: "low",
  },
  deadline: {
    type: Date,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;