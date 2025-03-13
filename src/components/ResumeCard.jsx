export default function ResumeCard({ name, match }) {
    return (
      <div className="bg-white p-4 rounded-xl shadow-md flex justify-between items-center">
        <p className="font-semibold">{name}</p>
        <span className="text-sm px-3 py-1 bg-green-100 text-green-700 rounded-lg">
          Match: {match}%
        </span>
      </div>
    );
  }
  