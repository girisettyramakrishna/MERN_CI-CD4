// src/api/axiosAPI.js
import axios from "axios";

// ✅ Create a single axios instance
const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, 
  // Example: .env → VITE_API_BASE_URL=http://localhost:5000/api/v1
});

// ✅ Attach token automatically
API.interceptors.request.use((req) => {
  const storedData = localStorage.getItem("user"); // saved as { user, token }
  if (storedData) {
    const { token } = JSON.parse(storedData);
    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }
  }
  return req;
});

export default API;
