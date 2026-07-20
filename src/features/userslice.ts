import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import API from "./userAPI";
import type { User, UserState } from "./usertypes";


export const fetchUsers = createAsyncThunk<
  User[],
  void,
  { rejectValue: string }
>("users/fetchUsers", async (_, thunkAPI) => {
  try {
    const response = await API.get<User[]>("/users");

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return thunkAPI.rejectWithValue(
        error.message || "Axios request failed."
      );
    }

    return thunkAPI.rejectWithValue("Something went wrong.");
  }
});

const initialState: UserState = {
  loading: false,
  users: [],
  error: "",
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = "";
      })

      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })

      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload || "Failed to fetch users.";
      });
  },
});

export default userSlice.reducer;