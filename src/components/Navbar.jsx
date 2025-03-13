import { UserCircle } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-700">AI Resume Screener</h1>
      <UserCircle size={32} className="text-gray-600 cursor-pointer" />
    </nav>
  );
}
