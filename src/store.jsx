import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./HomeSlice";

export const store = configureStore({
  reducer: {
    form: formReducer,
  },
});
