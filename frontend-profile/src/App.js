import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css"; 
import Navigation from "./Components/Navigation";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Awards from "./Components/Awards";
import Interests from "./Components/Interest";

export default function App() {
  return (
    <Router>
      <div id="page-top">
        <Navigation />
        <div className="container-fluid p-0">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/interests" element={<Interests />} />
        </Routes>
      </div>
      </div>
    </Router>
  );
}
