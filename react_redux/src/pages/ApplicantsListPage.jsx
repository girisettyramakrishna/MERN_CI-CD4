import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getJobApplicants, fetchJobById } from "../redux/slices/jobSlice";
import { toast } from "react-toastify";

export default function ApplicantsListPage() {
  const { jobId } = useParams();
  const dispatch = useDispatch();

  const { applicants, loading, error, singleJob } = useSelector((state) => state.jobs);
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo?.token && jobId) {
      dispatch(getJobApplicants({ jobId, token: userInfo.token }))
        .unwrap()
        .catch((err) => toast.error(err || "Failed to load applicants"));

      dispatch(fetchJobById(jobId))
        .unwrap()
        .catch(() => {}); // ignore job fetch errors here
    }
  }, [dispatch, userInfo, jobId]);

  if (loading) return <p className="p-4">Loading applicants...</p>;
  if (error) return <p className="p-4 text-red-500">{error}</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">
        Applicants {singleJob?.title ? `for "${singleJob.title}"` : ""}
      </h2>

      {applicants && applicants.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 bg-white">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border">#</th>
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Email</th>
                <th className="px-4 py-2 border">Role</th>
                {applicants[0]?.appliedAt && (
                  <th className="px-4 py-2 border">Applied On</th>
                )}
              </tr>
            </thead>
            <tbody>
              {applicants.map((user, idx) => (
                <tr key={user._id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border">{idx + 1}</td>
                  <td className="px-4 py-2 border">{user.name}</td>
                  <td className="px-4 py-2 border">{user.email}</td>
                  <td className="px-4 py-2 border capitalize">{user.role}</td>
                  {user.appliedAt && (
                    <td className="px-4 py-2 border">
                      {new Date(user.appliedAt).toLocaleDateString()}
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3 rounded">
          No applicants have applied for this job yet.
        </div>
      )}
    </div>
  );
}
