import React from "react";

function Home({ theme }) {
  return (
    <section id="projects"
      className="w-full h-screen flex justify-center items-center"
      style={{
        position: "relative",
        zIndex: 10,
        backgroundColor: "transparent", // Transparent background
      }}
    >
      {/* Main Container */}
      <div
        className={`flex justify-center h-screen items-center p-4  mb-20 rounded-xl transition-all duration-300`}
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
        {/* "Projects" Title */}
        <div
          className="absolute mb-5 top-1 text-center"
          style={{
            zIndex: 15,
            fontSize: "2rem",
            fontWeight: "bold",
            color: theme === "light" ? "black" : "white",
          }}
        >
          Projects
        </div>

        {/* Grid Container for Images and Descriptions */}
        <div
          className={`grid mt-10 w-full h-full`}
          style={{
            gridTemplateColumns: "repeat(2, 1fr)", // Ensure 3 columns per row on desktop
            gap: "30px", // Spacing between boxes
            padding: "20px",
            overflowY: "scroll",
        
             
          }} 
        >
          <style jsx>{`
  .grid::-webkit-scrollbar {
    display: none; /* Hide the scrollbar in WebKit browsers */
  }
`}</style>

          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="box"
              style={{
               
                backgroundColor: theme === "light" ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.1)",
                borderRadius: "8px",
                boxShadow:
                  theme === "light"
                    ? "0 4px 8px rgba(0, 0, 0, 0.2)"
                    : "0 4px 8px rgba(255, 255, 255, 0.2)",
                display: "flex",
                flexDirection: "column", // Stack image and description vertically
                justifyContent: "space-between",
                height: "100%",
                padding: "10px",
              }}
            >
              {/* Image */}
              <div
                style={{
                  flex: 1,
                  height: "200px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={`https://via.placeholder.com/300x200?text=Image+${index + 1}`}
                  alt={`Project ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "90%",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              </div>
              {/* Description */}
              <div
                style={{
                  marginTop: "10px",
                  textAlign: "center",
                  color: theme === "light" ? "black" : "white",
                }}
              >
                <h3>Project {index + 1}</h3>
                <p>This is a description of project {index + 1}. </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
