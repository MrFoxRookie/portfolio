// import styles from "./Main.module.css";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import ProjectDetail from "../ProjectDetail/ProjectDetail";

function Main() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />

      <Route path="/contact" element={<Contact />} />

      <Route path="/projects" element={<Projects />} />

      <Route path="/projects/:projectId" element={<ProjectDetail />} />
    </Routes>
  );
}

export default Main;
