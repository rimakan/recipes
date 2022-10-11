import { createSlice } from "@reduxjs/toolkit";
import { User } from '../../types/user';

type UserInitialState = {
  user: User,
}

const initialState: UserInitialState = {
  user: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
