import githubIcon from "../../assets/Images/icons/github.svg";
import linkedinIcon from "../../assets/Images/icons/linkedin.svg";
import { LanguageContext } from "../context/LanguageContext";
import { useContext } from "react";
import styles from "./Footer.module.css";

function Footer() {
  const { texts } = useContext(LanguageContext);

  return (
    <div className={styles.footer}>
      <div className={styles.footerLogosContainer}>
        <a
          href="https://github.com/MrFoxRookie"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={githubIcon}
            alt="Icono de GitHub"
            className={styles.footerIcon}
          />
        </a>

        <a
          href="https://www.linkedin.com/in/zahid-tejeda-amaro/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={linkedinIcon}
            alt="Icono de LinkedIn"
            className={styles.footerIcon}
          />
        </a>
      </div>

      <p className={styles.footerCopyright}>
        © {new Date().getFullYear()} {texts.footer.text}
      </p>
    </div>
  );
}

export default Footer;
