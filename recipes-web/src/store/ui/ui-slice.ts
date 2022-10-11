import { createSlice } from "@reduxjs/toolkit";

type UIInitialState = {
  isLoading: boolean,
  modal: boolean
}

const initialState: UIInitialState = {
  isLoading: false,
  modal: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setModal: (state, action) => {
      state.modal = action.payload;
    },
  },
});

export const { setLoading, setModal } = uiSlice.actions;

export default uiSlice.reducer;
