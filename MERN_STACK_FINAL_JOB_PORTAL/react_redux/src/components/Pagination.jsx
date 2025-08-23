export default function Pagination({ page, totalPages, onChange }) {
  if (totalPages <= 1) return null;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div className="flex gap-2 justify-center mt-4">
      {pages.map(p => (
        <button key={p} onClick={() => onChange(p)}
          className={`px-3 py-1 rounded ${p === page ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
          {p}
        </button>
      ))}
    </div>
  );
}
