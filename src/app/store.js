import { configureStore } from "@reduxjs/toolkit";
import servicesReducer from "../features/services/serviceSlice";

export const store = configureStore({
  reducer: {
    services: servicesReducer,
  },
});
