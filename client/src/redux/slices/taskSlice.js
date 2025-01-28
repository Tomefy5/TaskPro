import { createSlice } from "@reduxjs/toolkit";
import {
  changeDeadline,
  changePriority,
  createTask,
  deleteTask,
  fetchTasks,
  sortTasks,
  updateTask,
} from "../actions/reduxActions";

const taskSlice = createSlice({
  name: "tasks",
  initialState: { tasks: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.fulfilled, (store, action) => {
        store.tasks = action.payload;
      })
      .addCase(createTask.fulfilled, (store, action) => {
        store.tasks = [...store.tasks, action.payload];
      })
      .addCase(updateTask.fulfilled, (store, action) => {
        const updatedTasks = store.tasks.map((task) =>
          task._id === action.payload.taskId
            ? { ...task, ...action.payload.update }
            : task
        );
        store.tasks = updatedTasks;
      })
      .addCase(deleteTask.fulfilled, (store, action) => {
        store.tasks = store.tasks.filter((task) => task._id !== action.payload);
      })
      .addCase(changePriority.fulfilled, (store, action) => {
        store.tasks.map((task) =>
          task._id === action.payload.taskId
            ? { ...task, priority: action.payload.priority }
            : task  
        );
      })
      .addCase(changeDeadline.fulfilled, (store, action) => {
        store.tasks = store.tasks.map((task) =>
          task._id === action.payload.taskId
            ? { ...task, deadline: action.payload.deadline }
            : task
        );
      })
      // .addCase(sortTasks.fulfilled, (store, action) => {
      //   store.tasks = action.pa  //! To do
      // })
  },
});
export default taskSlice.reducer;
