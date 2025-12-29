import React, { useState } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import Project01 from "../../src/assets/project01.png";
import Project02 from "../../src/assets/project02.png";
import Project03 from "../../src/assets/project03.png";
import Project04 from "../../src/assets/project04.png";

const projectsData = [
  {
    id: 1,
    title: "BookCourier",
    description:
      "A full-stack delivery management system built with React, Express.js, MongoDB, and Firebase.",
    image: Project01,
    link: "https://bookscourier24.netlify.app/",
    github: "https://github.com/mdjunaidjewel/BookCourier24",
    tags: ["React", "Express.js", "MongoDB", "Firebase"],
  },
  {
    id: 2,
    title: "HomeServices Finder",
    description:
      "A platform to find household services, built with React, Firebase, Node.js, and CRUD operations.",
    image: Project02,
    link: "https://household-services24.netlify.app/",
    github: "https://github.com/mdjunaidjewel/Household-Services",
    tags: ["React", "Firebase", "Node.js", "CRUD"],
  },
  {
    id: 3,
    title: "Kids Toys Store",
    description:
      "An online store for kids' toys, built with React, Firebase, MongoDB, and CRUD operations.",
    image: Project03,
    link: "https://kids-toys24.web.app/",
    github: "https://github.com/mdjunaidjewel/Kid-s-Store",
    tags: ["React", "Firebase", "MongoDB", "CRUD"],
  },
  {
    id: 4,
    title: "Apps Related Website",
    description:
      "A website showcasing apps, built with React, Firebase, and responsive design.",
    image: Project04,
    link: "https://heroapps24.netlify.app/",
    github: "https://github.com/mdjunaidjewel/Hero-Apps",
    tags: ["React", "Firebase", "Responsive"],
  },
];

const Projects = () => {
  const [activeId, setActiveId] = useState(null);

  return (
    <div id="projects" className="py-14 bg-gray-900 text-white px-5">
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-yellow-400">
        My <span className="text-blue-400">Projects</span>
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <div
            key={project.id}
            onClick={() =>
              setActiveId(activeId === project.id ? null : project.id)
            }
            className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover"
            />

            {/* Overlay */}
            <div
              className={`
                absolute inset-0 bg-black bg-opacity-70
                flex flex-col justify-center items-center
                text-center p-6 transition-all duration-300

                ${
                  activeId === project.id
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-full"
                }

                sm:group-hover:opacity-100
                sm:group-hover:translate-y-0
              `}
            >
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>

              <div className="flex space-x-4 mb-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center text-blue-400 hover:text-blue-500"
                >
                  Live <FiExternalLink className="ml-1" />
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center text-gray-300 hover:text-white"
                >
                  GitHub <FiGithub className="ml-1" />
                </a>
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 rounded-full font-semibold"
                    style={{
                      background: "linear-gradient(to right, #004f6e, #00b7db)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
