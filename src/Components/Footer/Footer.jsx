import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import Swal from "sweetalert2";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Please enter a valid email address.",
        confirmButtonColor: "#06b6d4",
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Thank you!",
      text: "Thanks for staying in touch 😊",
      confirmButtonColor: "#06b6d4",
    });

    setEmail("");
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-700 py-10">
      <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
        
        {/* Social Links */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-lg font-semibold mb-4 text-white">
            Follow Me
          </h2>
          <div className="flex space-x-4">
            {[
              {
                href: "https://www.facebook.com/mdjunaidjewell",
                icon: <FaFacebookF />,
                hover: "hover:bg-blue-500",
              },
              {
                href: "https://x.com/junaid_jewell",
                icon: <FaTwitter />,
                hover: "hover:bg-blue-400",
              },
              {
                href: "https://www.linkedin.com/in/mdjunaidjewell",
                icon: <FaLinkedinIn />,
                hover: "hover:bg-blue-700",
              },
              {
                href: "https://github.com/mdjunaidjewel",
                icon: <FaGithub />,
                hover: "hover:bg-gray-500",
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-xl text-gray-300 p-3 rounded-full border border-gray-600 
                transition-all duration-300 hover:scale-110 hover:shadow-lg ${item.hover}`}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Stay in Touch */}
        <div className="flex flex-col items-center">
          <h3 className="text-md font-semibold mb-2 text-yellow-400">
            Let’s Stay in Touch
          </h3>
          <form
            onSubmit={handleSubscribe}
            className="flex w-full max-w-xs"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 w-full rounded-l bg-gray-800 text-white focus:outline-none"
              required
            />
            <button
              type="submit"
              className="p-2 bg-cyan-500 text-white rounded-r hover:bg-cyan-600 transition cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Back to Top */}
        <div className="flex justify-center md:justify-end">
          <button
            aria-label="Back to top"
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            className="px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 transition cursor-pointer"
          >
            Back to Top
          </button>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 text-sm mt-8">
        © {new Date().getFullYear()}{" "}
        <span className="text-yellow-400 font-medium">
          Md Junaid Jewel
        </span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
