// jobSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchJobsAPI,
  fetchJobByIdAPI,
  createJobAPI,
  updateJobAPI,
  deleteJobAPI,
  getMyApplicationsAPI,
  getJobApplicantsAPI,
} from '../../api/jobsAPI';

// Async thunks
export const fetchJobs = createAsyncThunk(
  'jobs/fetchJobs',
  async (filters = {}, { rejectWithValue }) => {
    try {
      const data = await fetchJobsAPI(filters);
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || 'Failed to fetch jobs'
      );
    }
  }
);

export const fetchJobById = createAsyncThunk(
  'jobs/fetchJobById',
  async (jobId, { rejectWithValue }) => {
    try {
      const data = await fetchJobByIdAPI(jobId);
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || 'Failed to fetch job details'
      );
    }
  }
);

export const createJob = createAsyncThunk(
  'jobs/createJob',
  async ({ jobData, token }, { rejectWithValue }) => {
    try {
      const data = await createJobAPI(jobData, token);
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || 'Failed to create job'
      );
    }
  }
);

export const updateJob = createAsyncThunk(
  'jobs/updateJob',
  async ({ jobId, jobData, token }, { rejectWithValue }) => {
    try {
      const data = await updateJobAPI(jobId, jobData, token);
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || 'Failed to update job'
      );
    }
  }
);

export const deleteJob = createAsyncThunk(
  'jobs/deleteJob',
  async ({ jobId, token }, { rejectWithValue }) => {
    try {
      await deleteJobAPI(jobId, token);
      return jobId;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || 'Failed to delete job'
      );
    }
  }
);

export const getMyApplications = createAsyncThunk(
  'jobs/getMyApplications',
  async (token, { rejectWithValue }) => {
    try {
      const data = await getMyApplicationsAPI(token);
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || 'Failed to fetch applications'
      );
    }
  }
);
export const applyToJob = createAsyncThunk(
  'jobs/applyToJob',
  async ({ id, token }, { rejectWithValue }) => {
    try {
      const data = await applyToJobAPI(id, token);
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || 'Failed to apply to job'
      );
    }
  }
);

export const getJobApplicants = createAsyncThunk(
  'jobs/getJobApplicants',
  async ({ jobId, token }, { rejectWithValue }) => {
    try {
      const data = await getJobApplicantsAPI(jobId, token);
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || 'Failed to fetch applicants'
      );
    }
  }
);

const jobSlice = createSlice({
  name: 'jobs',
  initialState: {
    jobs: [],
    currentJob: null,
    applications: [],
    applicants: [],
    loading: false,
    error: null,
    filters: {
      title: '',
      location: '',
      experience: '',
    },
  },
  reducers: {
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
    clearCurrentJob: (state) => {
      state.currentJob = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // All addCase calls first
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = action.payload;
      })
      .addCase(fetchJobById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentJob = action.payload;
      })
      .addCase(createJob.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs.unshift(action.payload);
      })
      .addCase(updateJob.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = state.jobs.map((job) =>
          job._id === action.payload._id ? action.payload : job
        );
      })
      .addCase(deleteJob.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = state.jobs.filter((job) => job._id !== action.payload);
      })
      .addCase(getMyApplications.fulfilled, (state, action) => {
        state.loading = false;
        state.applications = action.payload;
      })
      .addCase(getJobApplicants.fulfilled, (state, action) => {
        state.loading = false;
        state.applicants = action.payload;
      })

      // Then addMatcher calls
      .addMatcher(
        (action) => action.type.endsWith('/pending'),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

export const { setFilters, clearCurrentJob } = jobSlice.actions;
export default jobSlice.reducer;
