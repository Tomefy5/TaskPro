import { createSlice } from "@reduxjs/toolkit";

 const taskSlice = createSlice({
  name: "tasks",
  initialState: { tasks: [] },
  reducers: {},
  extraReducers: () => {}
});
export default taskSlice;