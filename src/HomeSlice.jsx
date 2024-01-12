import { createSlice } from "@reduxjs/toolkit";

const fromSlice = createSlice({
  name: "form",
  initialState: {
    formData: null,
  },
  reducers: {
    setForm: (state, action) => {
      state.formData = action.payload;
    },
  },
});
export const { setForm } = fromSlice.actions;
export default fromSlice.reducer;
