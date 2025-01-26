import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../services/api";

export const fetchTasks = createAsyncThunk(
  "tasks/fetchTasks",
  async (_,{ rejectWithValue }) => {
    try {
      const response = await api.get("/fetch-tasks");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error on fetching tasks");
    }
  }
);

const taskSlice = createSlice({
  name: "tasks",
  initialState: { tasks: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.fulfilled, (store, action) => {
      store.tasks = action.payload;
    });
  },
});
export default taskSlice.reducer;
