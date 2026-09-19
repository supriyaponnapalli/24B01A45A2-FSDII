import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import App1 from "./App1";

function App() {
  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <nav style={{ background: "#f5f5f5", padding: "10px", marginBottom: "20px" }}>
          <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
          <Link to="/about" style={{ marginRight: "10px" }}>About</Link>
          <Link to="/contact" style={{ marginRight: "10px" }}>Contact</Link>
          <Link to="/App1">App1 (Clock)</Link>
        </nav>

        {/* Route Definitions */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/App1" element={<App1 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;