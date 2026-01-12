import React, { useState } from "react";
import { FaGraduationCap, FaTools } from "react-icons/fa";
import Skills from "./Skills";
import Education from "./Education";

const MyAbout = () => {
  const [activeTab, setActiveTab] = useState("skills");

  return (
<div
  id="about"
  className="
    pt-10 sm:pt-16 pb-6 min-h-screen px-5 flex flex-col items-center
    text-base-content transition-colors duration-500
    bg-base-100
    dark-about-bg
  "
>

      <h2 className="text-3xl sm:text-4xl font-bold mb-8">
        My{" "}
        <span className="text-yellow-500">
          {activeTab === "skills" ? "Skills" : "Education"}
        </span>
      </h2>

      {/* Tabs */}
      <div className="flex gap-4 mb-8">
        <button
          onClick={() => setActiveTab("skills")}
          className={`cursor-pointer px-4 py-2 rounded font-medium transition flex items-center gap-2
            ${
              activeTab === "skills"
                ? "bg-primary text-yellow-400"
                : "bg-base-100 text-base-content hover:bg-base-300"
            }`}
        >
          <FaTools className="w-4 h-4" />
          Skills
        </button>

        <button
          onClick={() => setActiveTab("education")}
          className={`cursor-pointer px-4 py-2 rounded font-medium transition flex items-center gap-2
            ${
              activeTab === "education"
                ? "bg-primary text-yellow-400"
                : "bg-base-100 text-base-content hover:bg-base-300"
            }`}
        >
          <FaGraduationCap className="w-5 h-5" />
          Education
        </button>
      </div>

      {/* Content */}
      {activeTab === "skills" ? (
        <Skills />
      ) : (
        <div className="flex flex-col gap-4 w-full max-w-xl">
          <Education />
        </div>
      )}
    </div>
  );
};

export default MyAbout;
