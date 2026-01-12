import React, { useRef, useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiHome } from "react-icons/fi";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    Swal.fire({
      title: "Sending...",
      text: "Please wait a moment",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          Swal.close();
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Thank you for contacting me. I will reply soon 😊",
            confirmButtonColor: "#00b7db",
          });
          form.current.reset();
          setLoading(false);
        },
        () => {
          Swal.close();
          Swal.fire({
            icon: "error",
            title: "Oops!",
            text: "Failed to send message. Please try again 😥",
            confirmButtonColor: "#ef4444",
          });
          setLoading(false);
        }
      );
  };

  return (
    <div
      id="contact"
      className="py-16 px-4 sm:px-6 lg:px-8"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center gradient-text">
        Contact Me
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* ================= Contact Info ================= */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">Get in Touch</h3>

          <p className="card-Paragraph leading-relaxed">
            I’m open to work opportunities, collaborations, or just a friendly
            chat! You can reach me via email or through the form.
          </p>

          <div className="space-y-4 card-Paragraph">
            <p className="flex items-center gap-3 flex-wrap">
              <FiMail className="text-[#00b7db] text-lg" />
              <span className="font-semibold">Email:</span>{" "}
              mdjunaidjewell@gmail.com
            </p>

            <p className="flex items-center gap-3 flex-wrap">
              <FiPhone className="text-[#00b7db] text-lg" />
              <span className="font-semibold">Phone:</span> +880 1755-715459
            </p>

            <p className="flex items-center gap-3 flex-wrap">
              <FiMapPin className="text-[#00b7db] text-lg" />
              <span className="font-semibold">Based in:</span> Dhaka, Bangladesh
            </p>

            <p className="flex items-center gap-3 flex-wrap">
              <FiHome className="text-[#00b7db] text-lg" />
              <span className="font-semibold">Home Town:</span> Bhola Barisal,
              Bangladesh
            </p>

            <p className="text-sm text-gray-400">
              🌍 Open to Remote & Onsite Opportunities
            </p>
          </div>
        </div>

        {/* ================= Contact Form ================= */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className=" form-bg rounded-xl p-6 sm:p-8 space-y-4 shadow-md shadow-amber-200 thin-yellow-glow"
        >
          <div>
            <label className="block card-Paragraph mb-1">Name</label>
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg input-bg text-white focus:outline-none focus:ring-2 focus:ring-[#00b7db] transition"
            />
          </div>

          <div>
            <label className="block card-Paragraph mb-1">Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-lg input-bg text-white focus:outline-none focus:ring-2 focus:ring-[#00b7db] transition"
            />
          </div>

          <div>
            <label className="block card-Paragraph mb-1">Message</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className=" card-Paragraph w-full p-3 rounded-lg input-bg text-white focus:outline-none focus:ring-2 focus:ring-[#00b7db] transition"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className=" cursor-pointer w-full bg-[#00b7db] hover:bg-[#009ec1] transition-colors text-white font-semibold py-3 rounded-lg disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
