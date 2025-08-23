import { useState, useEffect } from "react";
import { createJob, updateJob, fetchJobs } from "../redux/slices/jobSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function JobFormPage() {
  const { id } = useParams();
  const isEdit = Boolean(id);
  const { token, role } = useSelector((s) => s.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    experience:2,
    location: "",
    type: "full-time",
  });
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/jobs",
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status == 201) {
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow">
      <h2 className="text-xl font-bold mb-4">
        {isEdit ? "Edit Job" : "Create Job"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
          className="border w-full p-2"
        />
         <input
          type="number"
          placeholder="Experience (years)"
          value={form.experience}
          min="0"
          onChange={(e) =>
          setForm({ ...form, experience: Number(e.target.value) })
  }
  className="border p-2 rounded w-28"
/>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          className="border w-full p-2"
        />
        <input
          name="location"
          value={form.location}
          onChange={handleChange}
          placeholder="Location"
          className="border w-full p-2"
        />
        <select
          name="type"
          value={form.type}
          onChange={handleChange}
          className="border w-full p-2"
        >
          <option value="full-time">Full-time</option>
          <option value="part-time">Part-time</option>
          <option value="remote">Remote</option>
          <option value="contract">Contract</option>
        </select>
        <button className="bg-blue-500 text-white px-4 py-2">
          {isEdit ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
}
