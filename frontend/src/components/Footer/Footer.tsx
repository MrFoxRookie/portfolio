import githubIcon from "../../assets/Images/icons/github.svg";
import linkedinIcon from "../../assets/Images/icons/linkedin.svg";
import { LanguageContext } from "../context/LanguageContext";
import { useContext } from "react";

function Footer() {
  const { texts } = useContext(LanguageContext);

  return (
    <div>
      <div>
        <a href="https://github.com/MrFoxRookie" target="_blank">
          <img src={githubIcon} alt="Icono de GitHub" />
        </a>
        <a
          href="https://www.linkedin.com/in/zahid-tejeda-amaro/"
          target="_blank"
        >
          <img src={linkedinIcon} alt="Icono de Linkedin" />
        </a>
      </div>
      <p>
        © {new Date().getFullYear()} {texts.footer.text}
      </p>
    </div>
  );
}

export default Footer;
