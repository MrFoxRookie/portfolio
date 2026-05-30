import styles from "./Header.module.css"
import image from "../../../public/favicon.svg"
import { Link } from "react-router-dom";

type Props = {
 
  handleLanguage: () => void;

  texts: {
language: string,
    navbar: {
      home: string,
      about: string, 
      contact: string, 
      projects: string
    }
  }
};

function Header({
  handleLanguage, texts
}: Props) {
  return (
    <header className={styles.header}>
  <div className={styles.header__container}>

    <Link to="/" className={styles.header__logoLink}>
      <img src={image} alt="Logo" className={styles.header__image} />
    </Link>

    <nav className={styles.header__nav}>
      <ul className={styles.header__list}>
        <li>
          <Link to="/" className={styles.header__link}>{texts.navbar.home}</Link>
        </li>
        <li>
          <Link to="/about" className={styles.header__link}>{texts.navbar.about}</Link>
        </li>
        <li>
          <Link to="/contacto" className={styles.header__link}>{texts.navbar.contact}</Link>
        </li>
        <li>
          <Link to="/proyectos"  className={styles.header__link}>{texts.navbar.projects}</Link>
        </li>
      </ul>
    </nav>

    <button  onClick={handleLanguage}>{texts.language}</button>

  </div>
</header>
  )
}

export default Header
