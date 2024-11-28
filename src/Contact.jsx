import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

function About({ theme }) {
  return (
    <section
      id="contact"
      className={`w-full h-screen flex justify-center items-center`}
      style={{
        position: "relative",
        zIndex: 10,
        backgroundColor: theme === "light" ? "transparent" : "transparent",
      }}
    >
      {/* Main Background Box */}
      <div
        className={`flex flex-col md:flex-row justify-center items-center p-6 rounded-xl transition-all duration-300`}
        style={{
          width: "90%",
          height: "95%",
          backgroundColor: theme === "light" ? "white" : "black",
          boxShadow:
            theme === "light"
              ? "0 4px 8px rgba(0, 0, 0, 0.3)"
              : "0 4px 8px rgba(255, 255, 255, 0.2)",
          border: theme === "light" ? "3px solid rgba(0, 0, 0, 0.4)" : "3px solid rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(10px)",
          transition: "background-color 0.4s ease, box-shadow 0.4s ease",
        }}
      >
        {/* Left Section: Contact Info Box */}
        <div
          className={`flex flex-col justify-center items-center p-8 rounded-xl transition-all duration-300`}
          style={{
            width: "100%",
            maxWidth: "500px",
            margin: "10px",
            backgroundColor: theme === "light" ? "white" : "black",
            boxShadow:
              theme === "light"
                ? "0 4px 8px rgba(0, 0, 0, 0.3)"
                : "0 4px 8px rgba(255, 255, 255, 0.2)",
            border: theme === "light" ? "3px solid rgba(0, 0, 0, 0.4)" : "3px solid rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(10px)",
            transition: "background-color 0.4s ease, box-shadow 0.4s ease",
          }}
        >
          <h2
            className={`text-xl font-semibold mb-4 ${theme === "light" ? "text-black" : "text-white"}`}
          >
            Contact Information
          </h2>
          <p className={`text-xl font-semibold mb-4 ${theme === "light" ? "text-black" : "text-white"}`}>
            <strong>Address:</strong> 123 Street, City, Country
          </p>
          <p className={`text-xl font-semibold mb-4 ${theme === "light" ? "text-black" : "text-white"}`}>
            <strong>Email:</strong> example@email.com
          </p>
          <p className={`text-xl font-semibold mb-4 ${theme === "light" ? "text-black" : "text-white"}`}>
            <strong>Phone:</strong> +123 456 789
          </p>
          <div className="flex justify-center items-center space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className={`text-3xl ${theme === "light" ? "text-black" : "text-white"}`} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className={`text-3xl ${theme === "light" ? "text-black" : "text-white"}`} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className={`text-3xl ${theme === "light" ? "text-black" : "text-white"}`} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub className={`text-3xl ${theme === "light" ? "text-black" : "text-white"}`} />
            </a>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <div
          className={`flex flex-col justify-center items-center p-8 rounded-xl transition-all duration-300`}
          style={{
            width: "100%",
            maxWidth: "500px",
            margin: "10px",
            backgroundColor: theme === "light" ? "white" : "black",
            boxShadow:
              theme === "light"
                ? "0 4px 8px rgba(0, 0, 0, 0.3)"
                : "0 4px 8px rgba(255, 255, 255, 0.2)",
            border: theme === "light" ? "3px solid rgba(0, 0, 0, 0.4)" : "3px solid rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(10px)",
            transition: "background-color 0.4s ease, box-shadow 0.4s ease",
          }}
        >
          <form className="w-full">
            <div className="flex flex-col">
              <label
                className={`${theme === "light" ? "text-black" : "text-white"} mb-2`}
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                className="p-3 rounded-lg border focus:outline-none"
                style={{
                  backgroundColor: theme === "light" ? "white" : "black",
                  color: theme === "light" ? "black" : "white",
                  borderColor: theme === "light" ? "gray" : "darkgray",
                }}
              />
              <label
                className={`${theme === "light" ? "text-black" : "text-white"} mt-4`}
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                className="p-3 rounded-lg border focus:outline-none"
                style={{
                  backgroundColor: theme === "light" ? "white" : "black",
                  color: theme === "light" ? "black" : "white",
                  borderColor: theme === "light" ? "gray" : "darkgray",
                }}
              />
              <label
                className={`${theme === "light" ? "text-black" : "text-white"} mt-4`}
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message"
                className="p-3 rounded-lg border focus:outline-none"
                style={{
                  backgroundColor: theme === "light" ? "white" : "black",
                  color: theme === "light" ? "black" : "white",
                  borderColor: theme === "light" ? "gray" : "darkgray",
                }}
              />
              <button
                type="submit"
                className="p-3 rounded-lg text-white mt-4"
                style={{
                  backgroundColor: theme === "light" ? "#007BFF" : "#0056b3",
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default About;
