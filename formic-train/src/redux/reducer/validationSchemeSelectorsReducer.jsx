import { createSlice } from "@reduxjs/toolkit";
import { SET_VALIDATION_SCHEME_LOGIN } from "../constants";

const initialState = {
  loginValidationSelector: "def", // word5 word2
};

const validationSchemeSelectors = createSlice({
  name: "validationSchemeSelectors",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(SET_VALIDATION_SCHEME_LOGIN, (state, action) => {
      state.loginValidationSelector = action.payload;
    });
  },
});

export default validationSchemeSelectors.reducer;
