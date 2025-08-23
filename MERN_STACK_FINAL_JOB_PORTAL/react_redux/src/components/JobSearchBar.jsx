import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilters, fetchJobs } from '../redux/slices/jobSlice';

const JobSearchBar = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [experience, setExperience] = useState('');

  const onSearch = (e) => {
    e.preventDefault();
    const filters = { title, location, experience };
    dispatch(setFilters(filters));
    dispatch(fetchJobs(filters));
  };

  return (
    <form onSubmit={onSearch} className="flex gap-3 max-w-4xl mx-auto mt-6 p-4 bg-white rounded shadow">
      <input
        type="text"
        placeholder="Job Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 rounded flex-grow"
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="border p-2 rounded flex-grow"
      />
      <input
        type="number"
        placeholder="Experience (years)"
        value={experience}
        min="0"
        onChange={(e) => setExperience(e.target.value)}
        className="border p-2 rounded w-28"
      />
      <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 rounded">
        Search
      </button>
    </form>
  );
};

export default JobSearchBar;
