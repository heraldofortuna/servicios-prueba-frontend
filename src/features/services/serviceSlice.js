import { createSlice } from "@reduxjs/toolkit";

import initialData from "../../constants/initialData";

export const serviceSlice = createSlice({
  name: "services",
  initialState: initialData,
  reducers: {
    addService: (state, action) => {
      state.push(action.payload);
    },
    deleteService: (state, action) => {
      const serviceFound = state.find(
        (service) => service.id === action.payload
      );

      if (serviceFound) {
        state.splice(state.indexOf(serviceFound), 1);
      }
    },
  },
});

export const { addService, deleteService } = serviceSlice.actions;

export default serviceSlice.reducer;
