import React from "react";

function Home({ theme }) {
  return (
    <section id="home"
      className={`w-full h-screen flex justify-center items-center`}
      style={{
        position: "relative", // Ensure positioning is correct
        zIndex: 10, // Ensure it's below the navbar (which has zIndex: 20)
        backgroundColor: theme === "light" ? "transparent" : "transparent", // Make the background transparent
      }}
    >
      {/* Main Box */}
      <div
        className={`flex justify-center h-screen items-center p-4 mt-10 mb-20 rounded-xl transition-all duration-300`}
        style={{
            position: "absolute",
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
            Welcome to My Portfolio
          </h1>
          <p
            className={`text-lg mt-4 ${theme === "light" ? "text-black" : "text-white"}`}
          >
            This is the home page with a nice rounded box that adapts to light and dark themes.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
