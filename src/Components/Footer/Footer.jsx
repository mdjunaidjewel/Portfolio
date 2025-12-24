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
        title: "Oops...",
        text: "Please enter a valid email!",
        confirmButtonColor: "#06b6d4", // cyan-500
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Subscribed!",
      text: `You have successfully subscribed with ${email}`,
      confirmButtonColor: "#06b6d4",
    });

    setEmail("");
  };

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left">
        {/* Social Links */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-lg font-semibold mb-4">Follow Me</h2>
          <div className="flex justify-center md:justify-start space-x-4">
            {/* Social Icon Buttons */}
            {[
              {
                href: "https://www.facebook.com/mdjunaidjewell",
                icon: <FaFacebookF />,
                bgHover: "hover:bg-blue-500",
              },
              {
                href: "https://x.com/junaid_jewell",
                icon: <FaTwitter />,
                bgHover: "hover:bg-blue-400",
              },
              {
                href: "https://www.linkedin.com/in/mdjunaidjewell",
                icon: <FaLinkedinIn />,
                bgHover: "hover:bg-blue-700",
              },
              {
                href: "https://github.com/mdjunaidjewel",
                icon: <FaGithub />,
                bgHover: "hover:bg-gray-400",
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-xl text-gray-300 transition transform ${item.bgHover} hover:scale-110 p-3 rounded-full border border-gray-600`}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="flex flex-col items-center">
          <h3 className="text-md font-semibold mb-2 text-yellow-300">
            Subscribe to Newsletter
          </h3>
          <form className="flex w-full max-w-xs" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 rounded-l bg-gray-800 text-white w-full focus:outline-none"
              required
            />
            <button className=" cursor-pointer p-2 bg-cyan-500 rounded-r hover:bg-cyan-600 transition">
              Subscribe
            </button>
          </form>
        </div>

        {/* Back to Top */}
        <div className="flex justify-center md:justify-end">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className=" cursor-pointer px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 transition"
          >
            Back to Top
          </button>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-300 text-sm mt-8">
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-yellow-200">Md Junaid Jewel</span>. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
