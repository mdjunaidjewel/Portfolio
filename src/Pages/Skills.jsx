import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiFirebase,
  SiMongodb,
  SiExpress,
  SiFigma,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <SiHtml5 className="text-orange-500 w-10 h-10" /> },
    { name: "CSS", icon: <SiCss3 className="text-blue-500 w-10 h-10" /> },
    {
      name: "JavaScript (ES6)",
      icon: <SiJavascript className="text-yellow-400 w-10 h-10" />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-teal-400 w-10 h-10" />,
    },
    { name: "React JS", icon: <SiReact className="text-cyan-400 w-10 h-10" /> },
    { name: "Next JS", icon: <SiNextdotjs className="text-white w-10 h-10" /> },
    {
      name: "Firebase",
      icon: <SiFirebase className="text-yellow-300 w-10 h-10" />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-500 w-10 h-10" />,
    },
    {
      name: "Express JS",
      icon: <SiExpress className="text-white w-10 h-10" />,
    },
    { name: "Figma", icon: <SiFigma className="text-pink-500 w-10 h-10" /> },
  ];

  return (
    <div
      id="skills"
      className="bg-gray-900 text-white min-h-screen flex flex-col items-center px-5 py-8"
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 hover:bg-indigo-600 transition-colors duration-300 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center text-center font-medium border-cyan-500 border hover:border-amber-400"
          >
            {skill.icon}
            <span className="mt-2">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
