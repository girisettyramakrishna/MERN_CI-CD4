import API from "./axiosAPI";

export const uploadResumeAPI = async (data) => {
  const res = await API.post("/resume/upload", data);
  return res.data;
};
