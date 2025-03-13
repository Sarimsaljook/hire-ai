import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getResumeById } from "../services/resumeService";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import LoadingSpinner from "../components/LoadingSpinner";

export default function CandidateProfile() {
  const { id } = useParams();
  const [candidate, setCandidate] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await getResumeById(id);
      setCandidate(data);
      setLoading(false);
    }
    fetchData();
  }, [id]);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="p-6">
          <h1 className="text-2xl font-bold">Candidate Profile</h1>
          <div className="mt-4 bg-white p-4 rounded-lg shadow">
            <p><strong>Name:</strong> {candidate.name}</p>
            <p><strong>Email:</strong> {candidate.email}</p>
            <p><strong>Match Score:</strong> {candidate.match}%</p>
            <p><strong>Skills:</strong> {candidate.skills.join(", ")}</p>
            <p><strong>Experience:</strong> {candidate.experience}</p>
            <p><strong>Education:</strong> {candidate.education}</p>
            <a href={candidate.resumeUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline mt-2 block">
              View Full Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
