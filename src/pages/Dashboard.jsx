import { useState } from "react";
import UploadResume from "./UploadResume";
import ResumeList from "./ResumeList";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function Dashboard() {

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="p-6 grid grid-cols-2 gap-6">
          <ResumeList />
        </div>
      </div>
    </div>
  );
}
