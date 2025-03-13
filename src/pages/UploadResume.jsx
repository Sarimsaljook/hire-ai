import { useState } from "react";
import UploadBox from "../components/UploadBox";
import { uploadResume } from "../services/uploadService";
import { analyzeResume } from "../services/deepSeekAPI";

export default function UploadResume({ onUpload }) {
  const [loading, setLoading] = useState(false);

  const handleFileUpload = async (event) => {
    setLoading(true);
    const file = event.target.files[0];
    if (file) {
      const url = await uploadResume(file);
      const analysis = await analyzeResume(url);
      onUpload(analysis);
    }
    setLoading(false);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Upload Resume</h1>
      <UploadBox onFileSelect={handleFileUpload} />
      {loading && <p className="mt-4 text-blue-600">Uploading...</p>}
    </div>
  );
}
