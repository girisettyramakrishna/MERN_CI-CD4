// src/pages/Profile.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../redux/slices/resumeSlice";  // ✅ correct import
import ResumeUpload from "../components/ResumeUpload";

const Profile = () => {
  const dispatch = useDispatch();
  const { user, resumeUrl, loading } = useSelector((state) => state.resume);

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  if (loading) return <p>Loading profile...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-3">Profile</h1>
      {user ? (
        <>
          <p><b>Name:</b> {user.name}</p>
          <p><b>Email:</b> {user.email}</p>

          {resumeUrl ? (
            <p className="mt-2">
              <b>Resume:</b>{" "}
              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline"
              >
                View Resume
              </a>
            </p>
          ) : (
            <p className="mt-2 text-gray-500">No resume uploaded yet</p>
          )}

          {/* Upload Section */}
          <div className="mt-4">
            <ResumeUpload />
          </div>
        </>
      ) : (
        <p>No user found</p>
      )}
    </div>
  );
};

export default Profile;
