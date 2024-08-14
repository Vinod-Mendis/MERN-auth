// Redux createSlice function creates redux slices
// a Redux slice is a collections redux reducer logic and actions per specific feature
// sets up a slice, which means it setups a initial state, actions( thing you can do to change the state ), and the logic for how to change the state when actions happen
import { createSlice } from "@reduxjs/toolkit";

// initial state/data of the user
const initialState = {
  currentUser: null, // the user isn`t signed in yet
  loading: false, // therefore its not loading
  error: null, // there is no error to start with
};

// below code snippet defines what happens when you try to sign in a user
const userSlice = createSlice({
  name: 'user', // just a label for this part of the state
  initialState, // start with the information defined earlier
  reducers: { // reducers are different action you can take
    signInStart: (state) => { // when start signin
      state.loading = true;
    },
    signInSuccess: (state, action) => { // if sign in is success,
      state.currentUser = action.payload; // store the data of the user in 'currentUser'
      state.loading = false;
      state.error = false;
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload; // stores the error message in the 'error'
    },
  },
});

// signInStart, signInSuccess, signInFailure are the functions that can be used to trigger to change the states
// Reducer is like instructions for how to change the states when these actions happen
export const { signInStart, signInSuccess, signInFailure } = userSlice.actions;

export default userSlice.reducer;