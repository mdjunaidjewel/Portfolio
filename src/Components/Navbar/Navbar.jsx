import React, { useEffect, useState } from "react";
import github from "../../assets/github.png";

export const Navbar = () => {
  const sectionIds = ["home", "about", "services", "projects", "contact"];

  const [active, setActive] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  // 🔹 Theme State
  const [theme, setTheme] = useState(
    document.documentElement.getAttribute("data-theme") || "dark"
  );

  // 🔹 Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  // 🔹 Toggle theme
  const handleToggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  // 🔹 Nav click handler
  const handleNavClick = (e, id) => {
    e.preventDefault();
    setActive(id); // ✅ Mobile underline fix

    const yOffset = -64;
    const element = document.getElementById(id);
    if (!element) return;

    const y =
      element.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
    window.history.replaceState(null, "", window.location.pathname);
    setMobileOpen(false);
  };

  // 🔹 IntersectionObserver (active section detect)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.3 } // ✅ mobile friendly
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full bg-base-100 text-base-content shadow-lg">
      <div className="w-11/12 mx-auto flex justify-between items-center h-16">

        {/* 🔹 Mobile Hamburger */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="btn btn-ghost"
          >
            <box-icon className="bx bx-menu text-2xl"></box-icon>
          </button>

          {mobileOpen && (
            <div className="absolute left-4 top-16 w-48 bg-base-200 shadow-lg rounded-lg p-4 flex flex-col gap-2 z-50">
              {sectionIds.map((id) => (
                <a
                  key={id}
                  onClick={(e) => handleNavClick(e, id)}
                  className={`cursor-pointer px-2 py-1 rounded transition ${
                    active === id
                      ? "bg-primary text-white"
                      : "hover:bg-base-300"
                  }`}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              ))}

              {/* Theme Toggle */}
              <button
                onClick={handleToggle}
                className="btn btn-outline btn-sm mt-2"
              >
                {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
              </button>
            </div>
          )}
        </div>

        {/* 🔹 Logo / Github */}
        <a
          href="https://github.com/mdjunaidjewel"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 font-bold hover:text-primary"
        >
          <img src={github} alt="Github" className="w-7" />
          GitHub
        </a>

        {/* 🔹 Desktop Menu */}
        <div className="hidden lg:flex gap-6 items-center">
          {sectionIds.map((id) => (
            <a
              key={id}
              onClick={(e) => handleNavClick(e, id)}
              className={`cursor-pointer transition ${
                active === id
                  ? "text-primary underline underline-offset-4"
                  : "hover:text-primary"
              }`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}

          {/* Theme Toggle */}
          <button onClick={handleToggle} className="btn btn-outline btn-sm">
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
};
