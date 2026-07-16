import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userslice";

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
});

// Type for the entire Redux state
export type RootState = ReturnType<typeof store.getState>;

// Type for dispatch
export type AppDispatch = typeof store.dispatch;