import { configureStore } from '@reduxjs/toolkit'; // importing a function from redux  to easily setup a redux store
import userReducer from './user/userSlice';

//? Redux store is where your application`s state is managed and live

export const store = configureStore({
  reducer: {user: userReducer}, // reducer is a function that takes the current state and an action, and returns a new state
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  })
})  