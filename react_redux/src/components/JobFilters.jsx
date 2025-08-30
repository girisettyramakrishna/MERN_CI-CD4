import React from 'react';

export default function JobFilters({ filters, setFilters }) {
  // filters is an object like { location, jobType, salaryRange }
  // setFilters updates the filters in parent component or redux

  const handleChange = (e) => {
    setFilters(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="p-4 bg-white rounded shadow mb-4">
      <h3 className="text-lg font-semibold mb-2">Filter Jobs</h3>

      <div className="space-y-3">
        <div>
          <label htmlFor="location" className="block text-sm font-medium">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={filters.location || ''}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
            placeholder="e.g. New York"
          />
        </div>

        <div>
          <label htmlFor="jobType" className="block text-sm font-medium">Job Type</label>
          <select
            id="jobType"
            name="jobType"
            value={filters.jobType || ''}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
          >
            <option value="">Any</option>
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="contract">Contract</option>
          </select>
        </div>

        <div>
          <label htmlFor="salaryRange" className="block text-sm font-medium">Salary Range</label>
          <input
            type="text"
            id="salaryRange"
            name="salaryRange"
            value={filters.salaryRange || ''}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
            placeholder="e.g. 50000-70000"
          />
        </div>
      </div>
    </div>
  );
}
