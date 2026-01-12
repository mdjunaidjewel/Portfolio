import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const education = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institute: "Prime University",
    year: "2025 - Running",
    gpa: "-- / 4.00",
  },
  {
    degree: "Diploma in Computer Technology",
    institute: "Bhola Polytechnic Institute",
    year: "2019 - 2023",
    gpa: "3.44 / 4.00",
  },
  {
    degree: "Secondary School Certificate",
    institute: "Moulovir Hat Fazil Madrasah",
    year: "2017 - 2019",
    gpa: "4.63 / 5.00",
  },
];

const Education = () => {
  return (
    <div
      className="
        flex flex-col items-center px-4 min-h-screen py-8
        transition-colors duration-500 text-base-content dark-about-bg
      "
    >
      <div className="relative border-l-2 border-yellow-500 pl-8 space-y-10 w-full max-w-3xl">
        {education.map((edu, index) => (
          <div key={index} className="relative">
            {/* Icon */}
            <div
              className="
                absolute -left-5 top-0 w-10 h-10
                bg-yellow-500 text-black
                rounded-full flex items-center justify-center
                shadow-lg
              "
            >
              <FaGraduationCap />
            </div>

            {/* Education Card */}
            <div
              className="
                bg-base-100 hover:bg-primary
                hover:text-primary-content
                transition-all duration-300
                rounded-lg shadow-lg p-6
                border border-base-300
              "
            >
              <h3 className="font-bold text-xl mb-1">
                {edu.degree}
              </h3>

              <p className="opacity-80 mb-1">
                {edu.institute}
              </p>

              <span className="font-semibold text-yellow-500">
                {edu.year}
              </span>

              <p className="mt-1 opacity-70">
                GPA / CGPA: {edu.gpa}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
