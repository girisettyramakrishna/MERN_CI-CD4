import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../redux/slices/jobSlice";
import JobCard from "../components/JobCard";
import JobFilters from "../components/JobFilters";
import Pagination from "../components/Pagination";
import axios from "axios";

export default function JobListPage() {
  const dispatch = useDispatch();
  const { token } = useSelector(s => s.jobs);
  const [filters, setFilters] = useState({ page: 1 });
  const [jobs,setJobs] = useState([])
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch jobs every time filters change (includes page, title, location etc)
  useEffect(() => {
    async function fetch(){
      try{
         const response = await axios.get("http://localhost:5000/api/jobs", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        if(response.status===200){
          setJobs(response.data.data)
        }
      }catch(err){
        console.log(err)
      }
    }
    fetch()
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Available Jobs</h2>

      {/* <JobFilters onFilter={(newFilters) => setFilters(prev => ({ ...prev, ...newFilters, page: 1 }))} /> */}

      {error && <p className="text-red-600">Error: {error}</p>}

      <div className="grid gap-4 md:grid-cols-3">
        {jobs.map(job => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>

     
    </div>
  );
}
