import { createSlice } from "@reduxjs/toolkit";

export const serviceTypeSlice = createSlice({
  name: "serviceType",
  initialState: "all",
  reducers: {
    filterServices: (state, action) => {
      return action.payload;
    },
  },
});

export const { filterServices } = serviceTypeSlice.actions;

export default serviceTypeSlice.reducer;
