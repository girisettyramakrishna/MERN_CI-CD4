import { useState } from "react";
import { Bookmark, BookmarkCheck, Trash2, MapPin, Briefcase, IndianRupee } from "lucide-react";

export default function JobCard({ job, onApply, onDelete }) {
  const [bookmarked, setBookmarked] = useState(false);

  return (
    <div className="border rounded-2xl p-6 shadow-md bg-white hover:shadow-lg transition duration-300 flex flex-col justify-between">
      {/* Top Section */}
      <div className="flex items-start justify-between">
        <div>
          {/* Company + Title */}
          <h3 className="text-lg font-bold text-gray-900">{job.company}</h3>
          <p className="text-xl font-semibold text-blue-600">{job.title}</p>

          {/* Location + Type */}
          <div className="flex gap-3 mt-2 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" /> {job.location}
            </span>
            <span className="flex items-center gap-1">
              <Briefcase className="w-4 h-4" /> {job.type}
            </span>
            {job.salary && (
              <span className="flex items-center gap-1">
                <IndianRupee className="w-4 h-4" /> {job.salary}
              </span>
            )}
          </div>
        </div>

        {/* Bookmark */}
        <button
          onClick={() => setBookmarked(!bookmarked)}
          className="text-gray-500 hover:text-yellow-500 transition"
        >
          {bookmarked ? (
            <BookmarkCheck className="w-6 h-6" />
          ) : (
            <Bookmark className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Description */}
      <p className="text-gray-700 text-sm mt-4 leading-relaxed">
        {job.description.slice(0, 150)}...
      </p>

      {/* Actions */}
      <div className="mt-5 flex items-center gap-3">
        <button
          onClick={onApply}
          className="flex-1 bg-blue-900 text-white py-2 rounded-xl hover:bg-blue-700 transition font-medium"
        >
          Apply Now
        </button>

        <button
          onClick={onDelete}
          className="p-2 rounded-xl bg-red-100 hover:bg-red-200 text-red-600 transition"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
