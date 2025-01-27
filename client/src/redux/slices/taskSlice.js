import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../services/api";

// Action for fetching all tasks
export const fetchTasks = createAsyncThunk(
  "tasks/fetchTasks",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/fetch-tasks");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error on fetching tasks");
    }
  }
);

// Action for creating new tasks
export const createTask = createAsyncThunk(
  "tasks/createTask",
  async (task, { rejectWithValue }) => {
    try {
      const response = await api.post("/create-task", task);
      return response.data; // created task
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Error on creating new task"
      );
    }
  }
);

// Action for updating tasks
export const updateTask = createAsyncThunk(
  "tasks/updateTask",
  async ({ taskId, update }, { rejectWithValue }) => {
    try {
      const response = await api.put(`/update-task/${taskId}`, update);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error on updating task");
    }
  }
);

// Action for deleting tasks
export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (taskId, { rejectWithValue }) => {
    try {
      await api.delete(`/delete-task/${taskId}`);
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error on deleting task");
    }
  }
);

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
        store.tasks = store.tasks.filter(task => task._id !== action.payload);
      })
  },
});
export default taskSlice.reducer;
