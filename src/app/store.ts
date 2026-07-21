import { configureStore } from "@reduxjs/toolkit";
import users from "../features/userslice";

import { persistReducer, persistStore } from "redux-persist";
import { createPersistStorage } from "./storage";

// Redux Persist configuration
const persistConfig = {
  key: "root",
  storage: createPersistStorage(),
};

// Wrap reducer with persistReducer
const persistedReducer = persistReducer(persistConfig, users);

// Create store
export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
