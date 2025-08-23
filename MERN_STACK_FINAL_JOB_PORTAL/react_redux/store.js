// store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./src/redux/slices/authSlice";
import jobReducer from "./src/redux/slices/jobSlice";
import resumeReducer from "./src/redux/slices/resumeSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    jobs: jobReducer,
    resume: resumeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
