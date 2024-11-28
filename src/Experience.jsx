import React from "react";

function Experience({ theme }) {
  return (
    <section id="experience"
      className={`w-full h-screen flex justify-center items-center`}
      style={{
        position: "relative", // Ensure positioning is correct
        zIndex: 10, // Ensure it's below the navbar (which has zIndex: 20)
        backgroundColor: theme === "light" ? "transparent" : "transparent", // Make the background transparent
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
        <div className="text-center">
          <h1
            className={`text-4xl font-semibold ${theme === "light" ? "text-black" : "text-white"}`}
          >
            My Experience
          </h1>
          <p
            className={`text-lg mt-4 ${theme === "light" ? "text-black" : "text-white"}`}
          >
            Over the course of my studies, I have worked on several web development projects, internships, and 
            collaborations that have enhanced my skills and given me practical experience.
          </p>
          <div className="mt-6">
            <h2
              className={`text-2xl font-semibold ${theme === "light" ? "text-black" : "text-white"}`}
            >
              Key Experience:
            </h2>
            <ul
              className={`mt-4 list-disc ${theme === "light" ? "text-black" : "text-white"}`}
            >
              <p>Developed web applications using React and JavaScript</p>
              <p>Worked with backend technologies like Node.js and Express</p>
              <p>Collaborated with teams in an agile development environment</p>
              <p>Interned at XYZ Company as a front-end developer</p>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
