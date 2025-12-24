import React from 'react'

export const Services = () => {
  return (
    <div>
      <section id="services" className="text-white w-11/12 mx-auto pt-10 pb-6 ">
        <h2 className="text-3xl font-bold text-center">
          My{" "}
          <span className="text-yellow-400 underline underline-offset-5">
            Services
          </span>
        </h2>
        <div className="p-8 grid sm:grid-cols-3 gap-5">
          <div className="group borde-2 border-[#323946] flex justify-center items-center flex-col p-5 rounded-md bg-[#323946] hover:scale-101 duration-200 hover:border-amber-300 border-1 hover:text-blue-700 cursor-pointer shadow-md hover:shadow-amber-500 shadow-blue-400">
            <i className="bx bx-code-alt text-5xl text-blue-300 group-hover:text-yellow-300"></i>
            <h3 className="text-blue-300 font-semibold group-hover:text-yellow-300 text-2xl">
              Web Development
            </h3>
            <p className="text-gray-300 pt-2">
              As a Web Developer, I build modern, responsive, and highly
              interactive websites with a strong focus on performance,
              accessibility, and seamless user experience.
            </p>
          </div>
          <div className="group borde-2 border-[#323946] flex justify-center items-center flex-col p-5 rounded-md bg-[#323946] hover:scale-101 duration-200 hover:border-amber-300 border-1 hover:text-blue-700 cursor-pointer shadow-md hover:shadow-amber-500 shadow-blue-400">
            <i className="fa-solid fa-laptop-code text-4xl text-blue-300 group-hover:text-yellow-300"></i>
            <h3 className="text-blue-300 font-semibold group-hover:text-yellow-300 text-2xl">
              Front End
            </h3>
            <p className="text-gray-300 py-2">
              I’m a Frontend Developer creating modern, responsive websites
              using React, Tailwind CSS, and JavaScript, with a focus on
              performance and user experience.
            </p>
          </div>
          <div className="group borde-2 border-[#323946] flex justify-center items-center flex-col p-5 rounded-md bg-[#323946] hover:scale-101 duration-200 hover:border-amber-300 border-1 hover:text-blue-700 cursor-pointer shadow-md hover:shadow-amber-500 shadow-blue-400">
            <i className="bx bx-trending-up text-5xl text-blue-300 group-hover:text-yellow-300"></i>
            <h3 className="text-blue-300 font-semibold group-hover:text-yellow-300 text-2xl">
              SEO
            </h3>
            <p className="text-gray-300 py-2">
              I’m an SEO Specialist helping websites rank higher on search
              engines by optimizing content, improving site performance, and
              enhancing user experience.
            </p>
          </div>
          <div className="group borde-2 border-[#323946] flex justify-center items-center flex-col p-5 rounded-md bg-[#323946] hover:scale-101 duration-200 hover:border-amber-300 border-1 hover:text-blue-700 cursor-pointer shadow-md hover:shadow-amber-500 shadow-blue-400">
            <i className="fa-solid fa-palette text-4xl text-blue-300 group-hover:text-yellow-300"></i>
            <h3 className="text-blue-300 font-semibold group-hover:text-yellow-300 text-2xl">
              UI/UX & Design
            </h3>
            <p className="text-gray-300 pt-2">
              I’m a UI/UX Designer crafting modern, user-friendly interfaces
              with a focus on usability, accessibility, and seamless experiences
              across all devices.
            </p>
          </div>
          <div className="group borde-2 border-[#323946] flex justify-center items-center flex-col p-5 rounded-md bg-[#323946] hover:scale-101 duration-200 hover:border-amber-300 border-1 hover:text-blue-700 cursor-pointer shadow-md hover:shadow-amber-500 shadow-blue-400">
            <i className="fa-brands fa-figma fa-palette text-4xl text-blue-300 group-hover:text-yellow-300"></i>
            <h3 className="text-blue-300 font-semibold group-hover:text-yellow-300 text-2xl">
              Figma Expert
            </h3>
            <p className="text-gray-300 pt-2">
              I create visually appealing, user-friendly UI designs in Figma,
              focusing on clean layouts, interactive prototypes, and seamless
              experiences for web and mobile applications.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
