import { useState } from "react";
import UploadBox from "../components/UploadBox";
import { useNavigate } from "react-router-dom";
import { uploadResume } from "../services/uploadService";
import { analyzeResume } from "../services/deepSeekAPI";
import { ref, set } from "firebase/database";
import { db } from "../firebase";


export default function UploadResume() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const generateID = () => Math.floor(1000000000 + Math.random() * 9000000000).toString();


  const handleFileUpload = async (event) => {
    setLoading(true);
    const file = event.target.files[0];
    if (file) {
      const resumeID = generateID();

      const url = await uploadResume(file, resumeID);
      const analysis = await analyzeResume(url);

      const resumeData = {
        name: analysis.name,
        match: analysis.match,
        skills: analysis.skills,
        resumeUrl: url,
      };

      await set(ref(db, `resumes/${resumeID}`), resumeData);

      // Redirect to home page after completion
      navigate("/");
    }
    setLoading(false);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Upload Resume</h1>
      <br/>
      <UploadBox onFileSelect={handleFileUpload} />
      <br/>
      {loading && <p className="mt-4 text-blue-600">Uploading...</p>}
    </div>
  );
}
