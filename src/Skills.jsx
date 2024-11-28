import React, { useState } from "react";

function Skills({ theme }) {
  const [showFrontend, setShowFrontend] = useState(true); // Default to show frontend
  const frontendSkills = [
    { name: "React", image: "/path/to/react-icon.png" },
    { name: "JavaScript", image: "/path/to/js-icon.png" },
    { name: "HTML", image: "/path/to/html-icon.png" },
    { name: "CSS", image: "/path/to/css-icon.png" },
    { name: "SASS", image: "/path/to/sass-icon.png" },
    { name: "Bootstrap", image: "/path/to/bootstrap-icon.png" },
  ];

  const backendSkills = [
    { name: "Node.js", image: "/path/to/nodejs-icon.png" },
    { name: "Express", image: "/path/to/express-icon.png" },
    { name: "MongoDB", image: "/path/to/mongodb-icon.png" },
    { name: "MySQL", image: "/path/to/mysql-icon.png" },
    { name: "PHP", image: "/path/to/php-icon.png" },
    { name: "Python", image: "/path/to/python-icon.png" },
  ];

  return (
    <section id="skills"
    className={`flex justify-center items-center h-screen p-2 mb-20 rounded-xl transition-all duration-300`}
    style={{
        position: "relative", // Ensure positioning is correct
        zIndex: 10, // Ensure it's below the navbar
        backgroundColor: theme === "light" ? "transparent" : "transparent",
      }}
    >
      {/* Main Box */}
      <div
        className={`flex justify-center h-screen items-center p-2 mb-20 rounded-xl transition-all duration-300`}
        style={{
          width: "95%",
          height: "95%",
          backgroundColor: theme === "light" ? "white" : "black", // Light/Dark Mode Box Color
          boxShadow:
            theme === "light"
              ? "0 4px 8px rgba(0, 0, 0, 0.3)" // Stronger black shadow for light mode
              : "0 4px 8px rgba(255, 255, 255, 0.2)", // Shadow for dark mode
          border: theme === "light" ? "3px solid rgba(0, 0, 0, 0.4)" : "3px solid rgba(255, 255, 255, 0.2)", // Border color based on theme
          backdropFilter: "blur(10px)", // Paper Effect with subtle blur
          transition: "background-color 0.4s ease, box-shadow 0.4s ease", // Smooth transitions for background and shadow
        }}
      >
        {/* Content Inside the Box */}
        <div className="text-center w-full mb-10">
          <h1
            className={`text-4xl font-semibold ${theme === "light" ? "text-black" : "text-white"}`}
          >
            My Skills
          </h1>
          <div className="mt-6">
            {/* Buttons to switch between Frontend and Backend */}
            <button
              onClick={() => setShowFrontend(true)}
              className={`mx-4 py-2 px-4 rounded-lg text-lg font-semibold transition duration-300 ${
                showFrontend
                  ? "bg-black text-white shadow-md shadow-gray-800"
                  : "bg-white text-black shadow-md shadow-gray-300"
              }`}
            >
              Frontend
            </button>
            <button
              onClick={() => setShowFrontend(false)}
              className={`mx-4 py-2 px-4 rounded-lg text-lg font-semibold transition duration-300 ${
                !showFrontend
                  ? "bg-black text-white shadow-md shadow-gray-800"
                  : "bg-white text-black shadow-md shadow-gray-300"
              }`}
            >
              Backend
            </button>
          </div>

          {/* Skill List */}
          <div className="mt-6  justify-items-center  grid grid-cols-2 md:grid-cols-3 gap-8 ">
            {(showFrontend ? frontendSkills : backendSkills).map((skill, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center w-40 p-8 rounded-3xl transition-all duration-300 bg-gray-200 hover:bg-gray-300 transform hover:scale-95 shadow-lg hover:shadow-2xl"
                style={{
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                {/* Icon with hover effect */}
                <img
                  src={skill.image}
                  alt={skill.name}
                  className={`w-12 h-12 object-contain rounded-full transition-all duration-300 ${
                    theme === "light"
                      ? "hover:scale-125 hover:text-black"
                      : "hover:scale-125 hover:text-white"
                  }`}
                  style={{
                    transition: "transform 0.3s ease, color 0.3s ease",
                    filter: "grayscale(100%)", // Makes the image grayscale initially
                  }}
                />
                <span
                  className={`text-lg font-semibold ${
                    theme === "light" ? "text-black" : "text-white"
                  }`}
                >
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
