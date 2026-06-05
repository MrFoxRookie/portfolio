import styles from "./Contact.module.css";
import { LanguageContext } from "../context/LanguageContext";
import { useContext } from "react";

import githubIcon from "../../assets/Images/icons/github.svg";
import linkedinIcon from "../../assets/Images/icons/linkedin.svg";
import phoneIcon from "../../assets/Images/icons/phone.svg";
import emailIcon from "../../assets/Images/icons/email.svg";

function Contact() {
  const { texts } = useContext(LanguageContext);

  return (
    <>
      <h1>{texts.contact.title}</h1>
      <p>{texts.contact.text}</p>
      <div className={styles.contactIcons}>
        <a
          href="https://github.com/MrFoxRookie"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <img src={githubIcon} alt="GitHub" className={styles.contactIcon} />
        </a>
        <a
          href="https://www.linkedin.com/in/zahid-tejeda-amaro/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <img
            src={linkedinIcon}
            alt="LinkedIn"
            className={styles.contactIcon}
          />
        </a>
        <a
          href="mailto:zahidtejedaamaro.dev@gmail.com"
          aria-label="Correo electrónico"
        >
          <img
            src={emailIcon}
            alt="Correo electrónico"
            className={styles.contactIcon}
          />
        </a>
        <a href="tel:+529994994048" aria-label="Número telefónico">
          <img src={phoneIcon} alt="Teléfono" className={styles.contactIcon} />
        </a>
      </div>
    </>
  );
}

export default Contact;
