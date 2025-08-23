import axios from 'axios';

const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/jobs`
});

// Public
export const fetchJobsAPI = async (filters) => {
  const response = await axios.get('/api/jobs', { params: filters });
  console.log("API Response:", response.data);  // 👈 ఇదే sample JSON
  return response.data;
};


export const fetchJobByIdAPI = (id) => API.get(`/${id}`);

// Recruiter/Admin
export const createJobAPI = (data, token) =>
  API.post('/', data, { headers: { Authorization: `Bearer ${token}` } });

export const updateJobAPI = (id, data, token) =>
  API.put(`/${id}`, data, { headers: { Authorization: `Bearer ${token}` } });

export const deleteJobAPI = (id, token) =>
  API.delete(`/${id}`, { headers: { Authorization: `Bearer ${token}` } });

// Jobseeker/Admin
export const applyToJobAPI = (id, token) =>
  API.post(`/${id}/apply`, {}, { headers: { Authorization: `Bearer ${token}` } });

export const getJobApplicantsAPI = (id, token) =>
  API.get(`/${id}/applicants`, { headers: { Authorization: `Bearer ${token}` } });

// Get jobs a specific user has applied to
export const getMyApplicationsAPI = (userId, token) =>
  axios.get(`${import.meta.env.VITE_API_BASE_URL}/users/${userId}/applications`, {
    headers: { Authorization: `Bearer ${token}` }
  });
