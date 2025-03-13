import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import UploadResume from "../pages/UploadResume";
import ResumeList from "../pages/ResumeList";
import CandidateProfile from "../pages/CandidateProfile";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/upload" element={<UploadResume />} />
        <Route path="/resumes" element={<ResumeList />} />
        <Route path="/candidate/:id" element={<CandidateProfile />} />
      </Routes>
    </Router>
  );
}
