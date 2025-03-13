import { Home, Upload, Settings } from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-60 h-screen bg-gray-100 p-6">
      <h2 className="text-lg font-semibold mb-6">Dashboard</h2>
      <nav className="flex flex-col gap-4">
        <Link to="/" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
          <Home size={20} />
          Home
        </Link>
        <Link to="/upload" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
          <Upload size={20} />
          Upload Resume
        </Link>
        <Link to="/settings" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
          <Settings size={20} />
          Settings
        </Link>
      </nav>
    </aside>
  );
}
