import { useState, useEffect } from "react";
import { getAllResumes } from "../services/resumeService";

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
    <div className="flex flex-wrap gap-4 p-6">
    {resumes
    .sort((a, b) => b.match - a.match)
    .map((resume, index) => {
let matchColor = "text-red-600"; // Default: Red (60 and below)
if (resume.match > 80) matchColor = "text-green-600"; // Green (above 80)
else if (resume.match > 60) matchColor = "text-yellow-600"; // Yellow (above 60)
      return (
      <div key={index} className="bg-white shadow-md rounded-lg p-4 w-80 border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">{resume.name}</h2>
        <p className="text-gray-600 mt-1">Match: <span className={`font-bold ${matchColor}`}>{resume.match}%</span></p>
        
        <div className="mt-3">
          <h3 className="text-md font-medium text-gray-700">Skills</h3>
          <ul className="mt-1 flex flex-wrap gap-2">
            {resume.skills.map((skill, i) => (
              <li key={i} className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-md">
                {skill}
              </li>
            ))}
          </ul>
        </div>
  
        <a 
          href={resume.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="mt-4 block text-center bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          View Resume
        </a>
      </div>
    );
    })}
  </div>
  
  );
}
