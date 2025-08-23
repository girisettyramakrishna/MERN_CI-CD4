import API from "./axios";

// ✅ Resume Upload
export const uploadResumeAPI = async (formData) => {
  const res = await API.post("/users/upload-resume", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data;
};
