// src/redux/slices/resumeSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { profileAPI } from "../../api/authAPI";
import { uploadResumeAPI } from "../../api/resumeAPI";

// ✅ Profile Fetch
export const fetchProfile = createAsyncThunk("resume/fetchProfile", async (_, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem("token");
    const data = await profileAPI(token);
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

// ✅ Resume Upload
export const uploadResume = createAsyncThunk("resume/uploadResume", async (formData, { rejectWithValue }) => {
  try {
    const res = await uploadResumeAPI(formData);
    return res; // { message, resumeUrl }
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const resumeSlice = createSlice({
  name: "resume",
  initialState: {
    user: null,
    resumeUrl: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Profile
      .addCase(fetchProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.resumeUrl = action.payload.user?.resumeUrl || null;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Resume Upload
      .addCase(uploadResume.fulfilled, (state, action) => {
        state.resumeUrl = action.payload.resumeUrl; // Cloudinary URL
      })
      .addCase(uploadResume.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default resumeSlice.reducer;
