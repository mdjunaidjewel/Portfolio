import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const education = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institute: "Prime University",
    year: "2025-Running",
    gpa: "--/4.00",
  },
  {
    degree: "Diploma in Computer Technology",
    institute: "Bhola Polytechnic Institute",
    year: "2019-2023",
    gpa: "4.44/4.00",
  },
  {
    degree: "Secondary School Certificate",
    institute: "Moulovir Hat Fazil Madrasah",
    year: "2017-2019",
    gpa: "4.63/5.00",
  },
];

const Education = () => {
  return (
    <div className="bg-gray-900 text-white flex flex-col items-center px-4 min-h-screen py-8">
      <div className="relative border-l-2 border-yellow-500 pl-8 space-y-10 w-full max-w-3xl">
        {education.map((edu, index) => (
          <div key={index} className="relative">
            {/* Icon */}
            <div className="absolute -left-5 top-0 w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-gray-900 shadow-lg">
              <FaGraduationCap />
            </div>

            {/* Education Details */}
            <div className="bg-gray-800 hover:bg-indigo-600 transition-colors duration-300 rounded-lg shadow-lg p-6">
              <h3 className="font-bold text-xl mb-1">{edu.degree}</h3>
              <p className="text-gray-300 mb-1">{edu.institute}</p>
              <span className="text-yellow-400 font-semibold">{edu.year}</span>
              <p className="mt-1 text-gray-400">GPA/CGPA: {edu.gpa}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
