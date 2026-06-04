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
    <div className={styles.about}>
      <h1 className={styles.aboutTitle}>{texts.about.title}</h1>
      <div className={styles.aboutMainContainer}>
        <div className={styles.aboutTextContainer}>
          <p className={styles.aboutText}>{texts.about.firstParagraph}</p>
          <p>{texts.about.secondParagraph}</p>
        </div>
        <div className={styles.aboutPhotoContainer}>
          <img
            src={personalImage}
            alt="Imagen del autor"
            className={styles.aboutPhoto}
          />
        </div>
      </div>
      <a href={curriculum} download>
        <img src={curriculumIcon} alt="Icono de documento" />
      </a>
    </div>
  );
}

export default About;
