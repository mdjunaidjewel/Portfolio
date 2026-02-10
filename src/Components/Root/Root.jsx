import React, { useEffect } from "react";
import { Navbar } from "../Navbar/Navbar";
import Home from "../../Pages/Home";
import { Services } from "../../Pages/Services";
import MyAbout from "../../Pages/MyAbout";
import Projects from "../../Pages/Projects";
import Contact from "../../Pages/Contact";
import Footer from "../Footer/Footer";

import AOS from "aos";
import "aos/dist/aos.css";

export const Root = () => {
useEffect(() => {
  AOS.init({
    duration: 400,        // animation একটু ধীর = smooth
    once: false,
    mirror: true,
    easing: "ease-in-out",
    offset: 120,          // section screen এ ঢুকলেই animation শুরু
    delay: 40,
  });
}, []);

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <section data-aos="fade-left" data-aos-delay="1000">
          <Home />
        </section>
        <section data-aos="fade-right" data-aos-delay="50">
          <MyAbout />
        </section>
        <section data-aos="fade-down" data-aos-delay="50">
          <Services />
        </section>
        <section>
          <Projects />
        </section>
        <section data-aos="slide-right" data-aos-delay="50">
          <Contact />
        </section>
      </main>
      <footer data-aos="fade-down" data-aos-delay="50">
        <Footer />
      </footer>
    </div>
  );
};
