import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLogged: false,
    token: "",
    user: {},
    userId: "",
  },
  reducers: {
    dispatchIsLogged: (state) => {
      state.isLogged = true;
    },
    dispatchUserToken: (state, action) => {
      state.token = action.payload;
    },
    dispatchUser: (state, action) => {
      state.user = action.payload;
    },
    dispatchUserId: (state, action) => {
      state.userId = action.payload;
    },
    dispatchLogout: (state) => {
      state.isLogged = false;
    },
  },
});

export const {
  dispatchIsLogged,
  dispatchUserToken,
  dispatchUser,
  dispatchUserId,
  dispatchLogout,
} = userSlice.actions;
export default userSlice.reducer;
