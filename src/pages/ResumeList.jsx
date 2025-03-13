import { useState, useEffect } from "react";
import { getAllResumes } from "../services/resumeService";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function ResumeList() {
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    async function fetchResumes() {
      const data = await getAllResumes();
      setResumes(data);
    }
    fetchResumes();
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="p-6">
          <h1 className="text-2xl font-bold">Resume List</h1>
          <ul className="mt-4">
            {resumes.map((resume, index) => (
              <li key={index} className="mb-2 p-2 border-b">
                <a href={resume.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  {resume.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
