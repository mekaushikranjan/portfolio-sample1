import { useState, useEffect } from "react";
import InteractiveBackground from "./InteractiveBackground"; // Import InteractiveBackground
import Navbar from "./Navbar"; // Import Navbar component
import Home from "./Home"; // Import Home component
import About from "./About"; // Import About component
import Experience from "./Experience"; // Import Experience page component
import Skills from "./Skills"; // Import Skills component
import Projects from "./Projects"; // Import Projects component
import Contact from "./Contact"; // Import Contact component
import Footer from "./footer"; // Import Footer component

function App() {
  const [theme, setTheme] = useState("light");
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  const toggle_mode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Simulate loading delay before content appears
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Set loading to false after 2 seconds (adjust as needed)
    }, 2000); // 2000 ms = 2 seconds
  }, []);

  return (
    <div className="relative w-full h-screen scrollbar-hidden">
      {/* Interactive Background */}
      <InteractiveBackground theme={theme} />

      {/* Navbar */}
      <Navbar theme={theme} toggle_mode={toggle_mode} />

      
          {/* Home Component placed below Navbar with transparent background */}
          <Home theme={theme} />
          <About theme={theme} />
          <Experience theme={theme} />
          <Skills theme={theme} />
          <Projects theme={theme} />
          <Contact theme={theme} />
       <Footer theme={theme} />
      </div>
    
  );
}

export default App;
