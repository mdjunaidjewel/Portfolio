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
      duration: 1000, // animation duration in ms
      once: false, // scroll up/down এ বারবার animation হবে
      mirror: true, // scroll up করলে animation reverse হবে
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <section data-aos="fade-up" data-aos-delay="100">
          <Home />
        </section>
        <section data-aos="fade-right" data-aos-delay="200">
          <MyAbout />
        </section>
        <section data-aos="fade-left" data-aos-delay="300">
          <Services />
        </section>
        <section data-aos="zoom-in" data-aos-delay="400">
          <Projects />
        </section>
        <section data-aos="flip-up" data-aos-delay="500">
          <Contact />
        </section>
      </main>
      <footer data-aos="fade-down" data-aos-delay="600">
        <Footer />
      </footer>
    </div>
  );
};
