// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './features/users/UsersSlice.jsx';

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export default store;
