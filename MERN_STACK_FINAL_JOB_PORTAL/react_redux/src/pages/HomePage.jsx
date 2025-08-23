import React, { useEffect, useState } from "react";
import axios from "axios";
import JobSearchBar from "../components/JobSearchBar";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchJobs() {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:5000/api/jobs", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        if (response.status === 200 && Array.isArray(response.data.data)) {
          setJobs(response.data.data);
        } else {
          setJobs([]);
        }
      } catch (err) {
        console.error("Error fetching jobs:", err);
        setJobs([]);
      } finally {
        setLoading(false);
      }
    }
    fetchJobs();
  }, []);

  return (
    <div className="relative">
      {/* Hero Section */}
      <div
        className="relative bg-[url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d')] bg-cover bg-center h-[380px] flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-black/45"></div>
        <div className="relative z-10 text-center text-white max-w-2xl px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Your Career, Your Future
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Discover opportunities, connect with companies, and build your dream career.
          </p>
          <div className="flex justify-center">
            <button
              onClick={() => navigate("/register")}
              className="px-6 py-2 bg-white text-blue-900 rounded-lg shadow-lg font-semibold hover:scale-105 transition"
            >
              🚀 Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative z-20 max-w-3xl mx-auto -mt-8">
        <JobSearchBar />
      </div>

      {/* How It Works */}
      <div className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-10">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3 text-blue-800">🔍 Search Jobs</h3>
            <p className="text-gray-600">
              Explore jobs that match your skills and goals.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3 text-blue-800">📑 Apply Easily</h3>
            <p className="text-gray-600">
              Apply with just a few clicks and get noticed fast.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3 text-blue-800">🤝 Get Hired</h3>
            <p className="text-gray-600">
              Land the job you’ve always wanted.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-10">Why Choose Job Portal?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-blue-800">✔ Trusted by Thousands</h3>
            <p className="text-gray-600 mt-2">
              Join a growing network of job seekers and recruiters worldwide.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-blue-800">✔ Fast & Easy</h3>
            <p className="text-gray-600 mt-2">
              Job applications made simple and efficient.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-blue-800">✔ Career Growth</h3>
            <p className="text-gray-600 mt-2">
              Find opportunities that boost your career forward.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
