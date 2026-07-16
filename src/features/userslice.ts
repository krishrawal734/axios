import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// API URL
const API_URL = "https://jsonplaceholder.typicode.com/users";

// User Type
interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

// State Type
interface UserState {
  loading: boolean;
  users: User[];
  error: string;
}

// API Call
export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async () => {
    const response = await axios.get<User[]>(API_URL);
    return response.data;
  }
);

// Initial State
const initialState: UserState = {
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
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
        state.error = "";
      })

      .addCase(fetchUsers.rejected, (state) => {
        state.loading = false;
        state.error = "Something went wrong!";
      });
  },
});

export default userSlice.reducer;