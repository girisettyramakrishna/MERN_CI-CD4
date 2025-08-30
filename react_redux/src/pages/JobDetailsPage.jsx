import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import { applyToJob } from "../redux/slices/jobSlice";

export default function JobDetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const { applyLoading } = useSelector((state) => state.jobs);

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch job details
  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/jobs/${id}`
        );
        setJob(res.data.data);
      } catch (err) {
        toast.error("Failed to load job details");
      } finally {
        setLoading(false);
      }
    };
    fetchJobDetails();
  }, [id]);

  const handleApply = () => {
    if (!userInfo) {
      toast.error("Please login as jobseeker to apply");
      return;
    }
    dispatch(applyToJob({ id, token: userInfo.token }))
      .unwrap()
      .then(() => {
        toast.success("Application submitted successfully");
      })
      .catch((err) => {
        toast.error(err || "Failed to apply");
      });
  };

  if (loading) return <p className="p-4">Loading job details...</p>;
  if (!job) return <p className="p-4">Job not found.</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-2">{job.title}</h1>
      <p className="text-gray-600">
        {job.location} • {job.type}
      </p>
      <p className="mt-4 whitespace-pre-line">{job.description}</p>

      <div className="mt-6 flex items-center gap-4">
        {userInfo?.role === "jobseeker" && (
          <button
            onClick={handleApply}
            disabled={applyLoading}
            className={`px-4 py-2 rounded text-white ${
              applyLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-600"
            }`}
          >
            {applyLoading ? "Applying..." : "Apply Now"}
          </button>
        )}
      </div>

      <div className="mt-6 text-sm text-gray-500">
        Posted by: {job.postedBy?.name} ({job.postedBy?.email})
      </div>
    </div>
  );
}
