// state/store.js

import { configureStore } from '@reduxjs/toolkit';

// Initial state
const initialState = {};

// Reducer function
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // Define your action cases here
    default:
      return state;
  }
};

// Create store
const store = configureStore({
  reducer: rootReducer,
});

export default store;
