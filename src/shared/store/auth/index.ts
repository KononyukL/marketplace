import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import {IAuth} from "@/shared/api/auth/types";


interface IAuthState {
  auth: IAuth | null;
}

const initialState: IAuthState = {
  auth: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearAuth: (state) => {
      state.auth = null;
    },
    addAuth: (state, action: PayloadAction<IAuth>) => {
      state.auth = action.payload;
    },
  },
});

export const {
  reducer: authReducer,
  actions: authActions,
  name: authSliceName,
} = authSlice;

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
