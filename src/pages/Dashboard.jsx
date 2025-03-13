import { useState } from "react";
import UploadResume from "./UploadResume";
import ResumeList from "./ResumeList";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  const [resumes, setResumes] = useState([]);

  const handleNewResume = (resume) => {
    setResumes((prev) => [...prev, resume]);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="p-6 grid grid-cols-2 gap-6">
          <UploadResume onUpload={handleNewResume} />
          <ResumeList resumes={resumes} />
        </div>
      </div>
    </div>
  );
}
