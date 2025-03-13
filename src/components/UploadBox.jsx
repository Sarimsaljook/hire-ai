import { Upload } from "lucide-react";

export default function UploadBox({ onFileSelect }) {
  return (
    <div className="border-2 border-dashed p-6 rounded-lg flex flex-col items-center justify-center bg-white shadow-md cursor-pointer">
      <Upload size={40} className="text-gray-500" />
      <p className="mt-2 text-gray-700">Drag & drop your resume or</p>
      <label className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-xl cursor-pointer">
        Upload File
        <input type="file" className="hidden" onChange={onFileSelect} />
      </label>
    </div>
  );
}
