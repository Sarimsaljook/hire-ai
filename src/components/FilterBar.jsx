export default function FilterBar({ onSearch }) {
    return (
      <div className="flex gap-3 mb-4">
        <input
          type="text"
          placeholder="Search by skill..."
          className="border rounded-lg px-4 py-2 w-full"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    );
  }
  