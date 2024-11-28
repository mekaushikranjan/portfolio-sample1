import { useEffect, useRef } from "react";

function InteractiveBackground({ theme }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas size to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Determine background and haze colors for light and dark modes
    const backgroundColor = theme === "light" ? "#ffffff" : "#000000"; // Light: white, Dark: black
    const hazeColor = theme === "light" 
      ? ["rgba(211, 211, 211, 0.2)", "rgba(255, 255, 255, 0.1)"]  // Light grey and white for light mode
      : ["rgba(169, 169, 169, 0.2)", "rgba(0, 0, 0, 0.1)"]; // Dark grey and black for dark mode

    // Create haze layers with gradient effect
    const createHazeLayer = (color, opacity, width, height) => {
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, color); // Smoky color with opacity
      gradient.addColorStop(1, `rgba(0, 0, 0, 0)`); // Fade to transparent
      return gradient;
    };

    // Draw the smoky haze effect
    const drawHaze = () => {
      const layers = 6; // Number of haze layers
      const opacityStep = 0.1; // Opacity change per layer

      // Loop to create multiple haze layers with different opacities
      for (let i = 0; i < layers; i++) {
        const opacity = opacityStep * (i + 1);
        const hazeLayer = createHazeLayer(hazeColor[0], opacity, canvas.width, canvas.height);

        ctx.fillStyle = hazeLayer;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Add the second haze layer with a different color
        const hazeLayer2 = createHazeLayer(hazeColor[1], opacity, canvas.width, canvas.height);
        ctx.fillStyle = hazeLayer2;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    };

    // Animation loop
    const animate = () => {
      // Clear the canvas and redraw background with haze effect
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw the haze effect on top
      drawHaze();

      requestAnimationFrame(animate); // Loop the animation
    };

    animate(); // Start the animation

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-10" // Full width and height with fixed position
    />
  );
}

export default InteractiveBackground;
