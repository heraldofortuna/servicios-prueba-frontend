import { createSlice } from "@reduxjs/toolkit";

import initialData from "../../constants/initialData";

export const serviceSlice = createSlice({
  name: "services",
  initialState: initialData,
  reducers: {
    addService: (state, action) => {
      state.push(action.payload);
    },
    editService: (state, action) => {
      const { id, title, description, type } = action.payload;

      const foundService = state.find(
        (service) => service.id === Number(id)
      );

      if (foundService) {
        foundService.title = title;
        foundService.description = description;
        foundService.type = type;
      }
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

export const { addService, editService, deleteService } =
  serviceSlice.actions;

export default serviceSlice.reducer;
