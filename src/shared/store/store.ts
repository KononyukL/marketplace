import {
  configureStore,
  type ThunkAction,
  type Action,
  combineReducers,
} from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import { authReducer, authSliceName } from "./auth";
import storage from "./storage";

const rootReducer = combineReducers({ [authSliceName]: authReducer });
const persistedReducer = persistReducer(
  {
    key: "root",
    version: 1,
    storage,
  },
  rootReducer,
);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
