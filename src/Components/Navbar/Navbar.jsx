import React, { useEffect, useState } from "react";
import github from "../../assets/github.png";

export const Navbar = () => {
  const sectionIds = ["home", "about", "services", "projects", "contact"];
  const [active, setActive] = useState(sectionIds[0]);
  const [mobileOpen, setMobileOpen] = useState(false);

  // 🔹 handle anchor click (smooth scroll + no # in URL + close mobile menu)
  const handleNavClick = (e, id) => {
    e.preventDefault();

    const yOffset = -64; // navbar height
    const element = document.getElementById(id);
    if (!element) return;

    const y =
      element.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });

    // 🔹 Remove # from URL
    window.history.replaceState(null, "", window.location.pathname);

    // 🔹 Close mobile menu after click
    setMobileOpen(false);
  };

  // 🔹 IntersectionObserver for active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="shadow-lg fixed top-0 left-0 w-full z-50 h-16 bg-[#1f242d]">
      <div className="w-11/12 mx-auto flex justify-between items-center h-full">
        {/* 🔹 Mobile Dropdown */}
        <div className="dropdown lg:hidden relative">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="btn btn-ghost text-white"
          >
            <box-icon className="bx bx-menu text-white text-2xl"></box-icon>
          </button>

          {mobileOpen && (
            <ul className="menu menu-sm dropdown-content rounded-box absolute top-12 left-0 z-10 w-52 p-2 font-semibold text-white bg-[#30336b] flex flex-col gap-2">
              {sectionIds.map((id) => (
                <li key={id}>
                  <a href={`#${id}`} onClick={(e) => handleNavClick(e, id)}>
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* 🔹 Github */}
        <a
          href="https://github.com/mdjunaidjewel"
          target="_blank"
          rel="noreferrer"
          className=" text-xl flex items-center gap-2 text-white font-bold hover:text-blue-400"
        >
          <img src={github} alt="Github" className="w-7" />
          Github
        </a>

        {/* 🔹 Desktop Menu */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold flex gap-6">
            {sectionIds.map((id) => (
              <li
                key={id}
                className={`cursor-pointer relative ${
                  active === id ? "underline text-cyan-400" : "text-white"
                }`}
              >
                <a href={`#${id}`} onClick={(e) => handleNavClick(e, id)}>
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
