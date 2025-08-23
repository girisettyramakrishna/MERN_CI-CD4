// src/components/ResumeUpload.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { uploadResume } from "../redux/slices/resumeSlice";

const ResumeUpload = () => {
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) return alert("Please select a file");

    const formData = new FormData();
    formData.append("resume", file);

    dispatch(uploadResume(formData));
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={(e) => setFile(e.target.files[0])}
        className="block mb-2"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Upload Resume
      </button>
    </form>
  );
};

export default ResumeUpload;
