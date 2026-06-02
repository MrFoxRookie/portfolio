import styles from "./Header.module.css";
import image from "../../../public/favicon.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

type Props = {
  handleLanguage: () => void;
};

function Header({ handleLanguage }: Props) {
  const { language, texts } = useContext(LanguageContext);

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
          {language === "es" ? "en" : "es"}
        </button>
      </div>
    </header>
  );
}

export default Header;
