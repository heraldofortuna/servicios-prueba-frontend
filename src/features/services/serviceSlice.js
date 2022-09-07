import { createSlice } from "@reduxjs/toolkit";

import initialData from "../../constants/data";

export const serviceSlice = createSlice({
  name: "services",
  initialState: initialData,
  reducers: {
    addService: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addService } = serviceSlice.actions;

export default serviceSlice.reducer;
