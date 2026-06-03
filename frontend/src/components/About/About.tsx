import styles from "../About/About.module.css";
import personalImage from "../../assets/Images/about/personal-image.jpeg";
import curriculumIcon from "../../assets/Images/icons/curriculum.svg";

import { LanguageContext } from "../context/LanguageContext";
import { useContext } from "react";

function About() {
  const { texts, language } = useContext(LanguageContext);

  const curriculum =
    language === "es" ? "/curriculum-es.pdf" : "/curriculum-en.pdf";

  return (
    <>
      <h1>{texts.about.title}</h1>
      <p>{texts.about.firstParagraph}</p>
      <p>{texts.about.secondParagraph}</p>

      <img src={personalImage} alt="" />

      <a href={curriculum} download>
        <img src={curriculumIcon} alt="Icono de documento" />
      </a>
    </>
  );
}

export default About;
