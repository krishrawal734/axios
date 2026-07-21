import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userslice";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Redux Persist configuration
const persistConfig = {
  key: "root",
  storage,
};

// Wrap reducer with persistReducer
const persistedReducer = persistReducer(
  persistConfig,
  userReducer
);

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