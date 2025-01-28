import { createAsyncThunk } from "@reduxjs/toolkit";
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
      return taskId;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error on deleting task");
    }
  }
);

// Action for changing task priority
export const changePriority = createAsyncThunk(
  "tasks/changePriority",
  async ({ taskId, newPriority }, { rejectWithValue }) => {
    try {
      const response = await api.put(
        `/change-priority/${taskId}?priority=${newPriority}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Error on changing task priority"
      );
    }
  }
);


// Action for changing deadline
export const changeDeadline = createAsyncThunk(
  "tasks/changeDeadline",
  async ({ taskId, deadline }, { rejectWithValue }) => {
    try {
      const response = await api.put(`/change-deadline/${taskId}`, { deadline });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Error on changing task deadline"
      );
    }
  }
);

// Action for sorting tasks
export const sortTasks = createAsyncThunk(
  "tasks/sortTasks",
  async (_, {rejectWithValue}) => {
    try {
      const sortedTasks = await api.get("/sort-tasks");
      return sortedTasks;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error on sorting tasks");
    }
  }
)
