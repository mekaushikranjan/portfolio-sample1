import { useState, useEffect, useRef } from "react";
import logo from "./assets/logo.png";
import toggle_light from "./assets/moon1.png";
import toggle_dark from "./assets/moon2.png";

function Navbar({ theme, toggle_mode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu
  const menuRef = useRef(null); // Ref for mobile menu
  const menuButtonRef = useRef(null); // Ref for menu button

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false); // Close menu
      }
    };

    document.addEventListener("click", handleClickOutside);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const menuItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Experience", link: "#experience" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <header
      className={`flex justify-between items-center m-2 md:px-30 transition-colors duration-300 ${
        theme === "light" ? "text-black" : "text-white"
      }`}
      style={{
        zIndex: 20,
        position: "relative",
        backgroundColor: "transparent",
        boxShadow: "none",
      }}
    >
      {/* Mobile View */}
      <div className="xl:hidden w-full flex justify-between items-center">
        {/* Toggle Button on Left (Mobile) */}
        <div className="flex items-center justify-start ml-4">
          <img
            src={theme === "light" ? toggle_light : toggle_dark}
            alt="Toggle Icon"
            className="cursor-pointer"
            style={{
              width: "50px",
              marginRight: "20px",
              borderRadius: "30px",
            }}
            onClick={toggle_mode}
          />
        </div>

        {/* Logo in Center (Mobile) */}
        <div className="flex justify-center w-full">
          <a href="#">
            <img
              src="#"
              alt="Logo"
              className="w-30 hover:scale-105 transition-all"
            />
          </a>
        </div>

        {/* Mobile Menu Button (≡) on Right */}
        <div
          className="bx bx-menu text-3xl cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu
          ref={menuButtonRef}
        >
          ≡
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden xl:flex xl:w-full xl:items-center justify-between">
        {/* Logo on Left (Desktop) */}
        <div className="xl:w-auto w-full flex justify-start">
          <a href="#">
            <img
              src={logo}
              alt="Logo"
              className="w-30 hover:scale-105 transition-all"
            />
          </a>
        </div>

        {/* Desktop Menu */}
        <ul className="flex items-center justify-center gap-6 font-semibold text-base">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className={`p-4 hover:rounded-2xl transition-all cursor-pointer 
                  ${
                    theme === "dark"
                      ? "hover:bg-white hover:text-black text-white"
                      : "hover:bg-black hover:text-white text-black"
                  } hover:shadow-xl hover:scale-105 hover:backdrop-blur-sm`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Toggle Button on Right (Desktop) */}
        <div className="xl:w-auto w-full flex justify-end">
          <img
            src={theme === "light" ? toggle_light : toggle_dark}
            alt="Toggle Icon"
            className="cursor-pointer"
            style={{
              width: "50px",
              marginLeft: "20px",
              borderRadius: "30px",
            }}
            onClick={toggle_mode}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Mobile Menu */}
<div
  ref={menuRef}
  className={`absolute top-full left-0 w-full flex flex-col items-center gap-4 py-4 font-semibold text-lg transform transition-transform duration-300 ${
    isMenuOpen
      ? "opacity-100 translate-y-0 pointer-events-auto"
      : "opacity-0 -translate-y-5 pointer-events-none"
  } ${
    theme === "light" ? "bg-white text-black" : "bg-black text-white"
  }`}
  style={{
    zIndex: 30,
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  }}
>
  <ul className="w-full flex flex-col items-center">
    {menuItems.map((item, index) => (
      <li key={index} className="w-full">
        <a
          href={item.link}
          className={`block text-center py-3 px-6 rounded-lg transition-all duration-300 ${
            theme === "dark"
              ? "hover:bg-white hover:text-black"
              : "hover:bg-black hover:text-white"
          }`}
          onClick={() => setIsMenuOpen(false)} // Close menu on click
        >
          {item.name}
        </a>
      </li>
    ))}
  </ul>
</div>

    </header>
  );
}

export default Navbar;
