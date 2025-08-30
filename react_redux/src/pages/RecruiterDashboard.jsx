import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs, deleteJob } from "../redux/slices/jobSlice";
import { useNavigate, Link } from "react-router-dom";

export default function RecruiterDashboard() {
  const { jobs, loading } = useSelector((state) => state.jobs);
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      // Fetch only jobs posted by this recruiter
      dispatch(fetchJobs({ postedBy: userInfo._id }));
    }
  }, [dispatch, userInfo]);

  const handleDelete = (id) => {
    if (confirm("Delete this job?")) {
      dispatch(deleteJob({ id, token: userInfo.token }));
    }
  };

  if (loading) return <p className="p-4">Loading your jobs...</p>;

  return (
    <div className="p-4">
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-bold">My Posted Jobs</h2>
        <button
          onClick={() => navigate("/jobs/create")}
          className="bg-green-500 px-3 py-1 text-white rounded hover:bg-green-600"
        >
          Create Job
        </button>
      </div>

      {jobs.length === 0 ? (
        <p>You haven't posted any jobs yet.</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {jobs.map((job) => (
            <div key={job._id} className="border p-4 rounded shadow">
              <h3 className="text-lg font-semibold">{job.title}</h3>
              <p className="text-gray-600">
                {job.location} • {job.type}
              </p>
              <div className="mt-4 flex gap-2">
                <Link
                  to={`/jobs/edit/${job._id}`}
                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                >
                  Edit
                </Link>
                <Link
                  to={`/jobs/${job._id}/applicants`}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  View Applicants
                </Link>
                <button
                  onClick={() => handleDelete(job._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
