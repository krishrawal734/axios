import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// API URL
const API_URL = "https://jsonplaceholder.typicode.com/users";

// API Fetch Function
export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async () => {
    const response = await axios.get(API_URL);
    return response.data;
  }
);

// Initial State
const initialState = {
  loading: false,
  users: [],
  error: "",
};

// Slice
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder

      // Loading
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })

      // Success
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
        state.error = "";
      })

      // Error
      .addCase(fetchUsers.rejected, (state) => {
        state.loading = false;
        state.error = "Something went wrong!";
      });
  },
});

export default userSlice.reducer;