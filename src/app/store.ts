import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userslice";

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


import { loadState, saveState } from "./localStorage";

const persistedState = loadState();

if (persistedState?.users) {
  store.dispatch({
    type: "users/restoreState",
    payload: persistedState.users,
  });
}


store.subscribe(() => {
  saveState(store.getState());
});