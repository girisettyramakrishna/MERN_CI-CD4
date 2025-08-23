// src/api/authAPI.js
import API from "./axiosAPI";

// --------------------
// REGISTER
// --------------------
export const registerAPI = async (data) => {
  try {
    const res = await API.post("/auth/register", data);
    return res.data; // return only the response body
  } catch (err) {
    throw new Error(err.response?.data?.message || "Registration failed");
  }
};

// --------------------
// LOGIN
// --------------------
export const loginAPI = async (data) => {
  try {
    const res = await API.post("/auth/login", data);
    return res.data;
  } catch (err) {
    throw new Error(err.response?.data?.message || "Login failed");
  }
};

// --------------------
// PROFILE
// --------------------
export const profileAPI = async () => {
  try {
    const res = await API.get("/auth/profile");
    return res.data;
  } catch (err) {
    throw new Error(err.response?.data?.message || "Fetching profile failed");
  }
};
