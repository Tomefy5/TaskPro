const { default: mongoose } = require("mongoose");
const Task = require("../models/Task");


// Function for changing deadline
const changeDeadline = async (taskId, deadline) => {

    const taskObjectId = new mongoose.Types.ObjectId(taskId);

    try {
        const taskToUpdate = await Task.findByIdAndUpdate(taskObjectId, { deadline }, { new: true });
        if(!taskToUpdate) throw new Error("changeDeadline: task not found");
        return taskToUpdate;
    } catch (error) {
        throw error;
    }
}


module.exports = { changeDeadline };