import { combineReducers, configureStore } from '@reduxjs/toolkit'; // importing a function from redux  to easily setup a redux store
import userReducer from './user/userSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//? Redux store is where your application`s state is managed and live

const rootReducer = combineReducers({user: userReducer}); // this function combines multiple reducers

const persistConfig = {
  key: 'root',
  version: 1,
  storage, // use local storage to persist data
}

const persistedReducer = persistReducer(persistConfig, rootReducer); // persist capability

export const store = configureStore({
  reducer: persistedReducer, // reducer is a function that takes the current state and an action, and returns a new state
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  })
})  

export const persistor = persistStore(store); // creates and exports a persistor object to manage the persistence of the store