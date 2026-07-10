// import { useEffect } from "react";
import "./App.css";
import CustomCursor from "./components/CustomCursor";
import { GoTop } from "./components/button/buttons";

import {
  Navbar,
  Hero,
  Skills,
  Projects,
  Contact,
} from "./components/layout/_index";

function App() {
  CustomCursor();

  return (
    <div className="App">
      <GoTop />
      <div id="cursor"></div>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
