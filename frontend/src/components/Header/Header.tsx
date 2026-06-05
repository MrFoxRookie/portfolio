import styles from "./Header.module.css";
import image from "../../../public/logo.svg";
import mexicanFlag from "../../assets/Images/icons/mexican-flag.svg";
import usFlag from "../../assets/Images/icons/us-flag.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

type Props = {
  handleLanguage: () => void;
  language: string;
};

function Header({ handleLanguage }: Props) {
  const { texts, language } = useContext(LanguageContext);

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link to="/" className={styles.logoLink}>
          <img src={image} alt="Logo" className={styles.headerImage} />
        </Link>

        <nav className={styles.headerNav}>
          <ul className={styles.headerList}>
            <li>
              <Link to="/" className={styles.headerLink}>
                {texts.header.navbar.home}
              </Link>
            </li>

            <li>
              <Link to="/about" className={styles.headerLink}>
                {texts.header.navbar.about}
              </Link>
            </li>

            <li>
              <Link to="/contact" className={styles.headerLink}>
                {texts.header.navbar.contact}
              </Link>
            </li>

            <li>
              <Link to="/projects" className={styles.headerLink}>
                {texts.header.navbar.projects}
              </Link>
            </li>
          </ul>
        </nav>

        <button className={styles.languageButton} onClick={handleLanguage}>
          <img
            className={styles.languageImage}
            src={language === "es" ? usFlag : mexicanFlag}
            alt={
              language === "es"
                ? "Flag of the United States"
                : "Bandera de México"
            }
          />
        </button>
      </div>
    </header>
  );
}

export default Header;
