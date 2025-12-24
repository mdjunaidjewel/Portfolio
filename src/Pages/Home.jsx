import React from "react";
import bannerOne from "../assets/banner-1.jpg";
import Typing from "../Components/Typing/Typing";

const Home = () => {
  return (
    <div>
      <div
        id="home"
        className="text-white sm:flex gap-2 justify-between items-center w-11/12 mx-auto px-4 sm:h-screen pt-23 sm:pt-0"
      >
        {/* Left Content */}
        <div className="sm:w-7/12">
          <h1 className="font-medium text-3xl sm:text-5xl">Md Junaid Jewel</h1>
          <h2 className="font-semibold text-xl sm:text-3xl my-0.5 sm:my-2">
            I'm <Typing />
          </h2>
          <p>
            I'm a Frontend Web Developer from Bangladesh, crafting interactive
            and visually appealing websites using HTML, CSS (Tailwind),
            JavaScript, React, and Next.js. I am also familiar with backend
            technologies including Node.js, Express, Firebase, and MongoDB.
          </p>

          {/* Social Links */}
          <div className="py-3 sm:py-5 flex items-center gap-3">
            <a
              href="https://github.com/mdjunaidjewel"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bx bxl-github text-2xl border-2 border-cyan-700 rounded-full p-2 hover:bg-cyan-700 transition-colors duration-300 hover:shadow-blue-500 shadow-lg block"></i>
            </a>
            <a
              href="https://www.facebook.com/mdjunaidjewell"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bx bxl-facebook text-2xl border-2 border-cyan-700 rounded-full p-2 hover:bg-cyan-700 transition-colors duration-300 hover:shadow-blue-500 shadow-lg"></i>
            </a>
            <a
              href="https://wa.me/+8801755715459"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bx bxl-whatsapp text-2xl border-2 border-cyan-700 rounded-full p-2 hover:bg-cyan-700 transition-colors duration-300 hover:shadow-blue-500 shadow-lg"></i>
            </a>
            <a
              href="https://linkedin.com/in/mdjunaidjewell"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bx bxl-linkedin text-2xl border-2 border-cyan-700 rounded-full p-2 hover:bg-cyan-700 transition-colors duration-300 hover:shadow-blue-500 shadow-lg"></i>
            </a>
          </div>

          {/* CV Button */}
          <a
            href="https://drive.google.com/file/d/1tqGqNSQE6XgDDcXOpIKIBFqGA-3lWoY2/view"
            target="_blank"
            rel="noreferrer"
            className="py-2 px-5 rounded-4xl bg-cyan-500 shadow-lg shadow-cyan-500/50 hover:bg-transparent duration-500 hover:shadow-blue-500 border-2 border-cyan-500 mr-2 block inline-block text-center"
          >
            Download CV
          </a>
        </div>

        {/* Right Image */}
        <div className="hover:scale-105 duration-400 cursor-pointer py-16 relative">
          <img
            src={bannerOne}
            alt=""
            className="overflow-hidden rounded-2xl w-[300px] thin-yellow-glow"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
