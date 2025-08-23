import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyApplications } from "../redux/slices/jobSlice";
import JobCard from "../components/JobCard";
import { toast } from "react-toastify";

export default function MyApplicationsPage() {
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);
  const { myApplications, loading, error } = useSelector((state) => state.jobs);

  useEffect(() => {
    if (userInfo?._id && userInfo?.token) {
      dispatch(getMyApplications({ userId: userInfo._id, token: userInfo.token }))
        .unwrap()
        .catch((err) => {
          toast.error(err || "Failed to load applications");
        });
    }
  }, [dispatch, userInfo]);

  if (loading) {
    return <p className="p-4">Loading your applications...</p>;
  }

  if (error) {
    return <p className="p-4 text-red-500">{error}</p>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">My Applications</h2>

      {myApplications && myApplications.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {myApplications.map((job) => (
            <JobCard key={job._id} job={job} />
          ))}
        </div>
      ) : (
        <p>You haven't applied to any jobs yet.</p>
      )}
    </div>
  );
}
