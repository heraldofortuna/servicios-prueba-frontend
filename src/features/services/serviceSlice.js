import { createSlice } from "@reduxjs/toolkit";

import initialData from "../../constants/data";

export const serviceSlice = createSlice({
  name: "services",
  initialState: initialData,
  reducers: {},
});

export default serviceSlice.reducer;
