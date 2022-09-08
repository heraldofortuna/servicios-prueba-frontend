import { configureStore } from "@reduxjs/toolkit";

import servicesReducer from "../features/services/serviceSlice";
import serviceTypeReducer from "../features/services/serviceTypeSlice";

export const store = configureStore({
  reducer: {
    services: servicesReducer,
    serviceType: serviceTypeReducer,
  },
});
