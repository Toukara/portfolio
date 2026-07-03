import { useEffect } from "react";
import "./App.css";

import Hero from "./components/layout/Hero";
import Navbar from "./components/layout/Navbar";

function App() {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const handleMouseMove = (e: MouseEvent) => {
      if (cursor instanceof HTMLElement) {
        cursor.style.left = e.pageX + "px";
        cursor.style.top = e.pageY + "px";
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="App">
      <div className="cursor" id="cursor"></div>
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
