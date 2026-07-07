// import { useEffect } from "react";
import "./App.css";
import CustomCursor from "./components/CustomCursor";

import { Navbar, Hero, Skills } from "./components/layout/_index";

function App() {
  CustomCursor();

  return (
    <div className="App">
      <div id="cursor"></div>
      <Navbar />
      <Hero />
      <Skills />
    </div>
  );
}

export default App;
