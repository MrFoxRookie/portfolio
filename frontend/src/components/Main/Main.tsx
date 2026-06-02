import styles from "./Main.module.css";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Projects from "../Projects/Projects";

function Main() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}

export default Main;
