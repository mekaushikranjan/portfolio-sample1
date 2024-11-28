import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer({ theme }) {
  return (
    <footer
      className={`w-full flex flex-col items-center justify-center py-5 mt-10 transition-colors duration-300 ${
        theme === "light" ? "bg-white text-black" : "bg-black text-white"
      }`}
      style={{
        height:"10%",
        borderTop: `3px solid ${theme === "light" ? "rgba(0, 0, 0, 0.1)" : "rgba(255, 255, 255, 0.2)"}`,
        position: "relative",
        zIndex: 10, // Ensures it appears above other elements if necessary
      }}
    >
      {/* Social Media Links */}
      <div className="flex justify-center items-center space-x-4 mb-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className={`text-xl ${theme === "light" ? "text-black" : "text-white"} hover:opacity-80`} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className={`text-xl ${theme === "light" ? "text-black" : "text-white"} hover:opacity-80`} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className={`text-xl ${theme === "light" ? "text-black" : "text-white"} hover:opacity-80`} />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className={`text-xl ${theme === "light" ? "text-black" : "text-white"} hover:opacity-80`} />
        </a>
      </div>

      {/* Copyright Text */}
      <p className="text-sm text-center">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
