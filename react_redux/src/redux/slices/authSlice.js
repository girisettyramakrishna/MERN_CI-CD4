import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { registerAPI, loginAPI, profileAPI } from "../../api/authAPI";

// --------------------
// Initial State
// --------------------
const userFromStorage = localStorage.getItem("token")||null

const initialState = {
  token: localStorage.getItem("token")||null,
  loading: false,
  error: null,
  isLoggedin:localStorage.getItem("token") ? true:false,
  role: localStorage.getItem("role") || null,
};

// --------------------
// Slice
// --------------------
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.error = null;
      state.isLoggedin = false
      localStorage.removeItem("token");
    },
    addUser(state,action){
      state.token = action.payload.token;
      state.role = action.payload.role;
      isLoggedin: true
    }
  },
});

export const { logout,addUser } = authSlice.actions;
export default authSlice.reducer;
