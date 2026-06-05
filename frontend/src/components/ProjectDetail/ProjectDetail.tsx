import styles from "./ProjectDetail.module.css";
import githubIcon from "../../assets/Images/icons/github.svg";
import liveIcon from "../../assets/Images/icons/live.svg";

import { useParams } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const projectSlugMap: any = {
  "news-explorer": "newsExplorer",
  "around-the-world": "aroundTheWorld",
  "triple-espresso": "tripleEspresso",
};

function ProjectDetail() {
  const { projectId } = useParams();
  const { texts, language } = useContext(LanguageContext);

  if (!projectId) {
    return <p>Proyecto no válido</p>;
  }

  const projectKey = projectSlugMap[projectId];

  const information = texts?.projectDetail?.[projectKey];

  return (
    <div className={styles.projectDetail}>
      <div className={styles.projectDetailContainer}>
        {/* <Link to="/projects" className={styles.projectReturn}>
        Regresar a proyectos
      </Link> */}
        <img className={styles.projectImage} src={information.image} alt="" />
        <div className={styles.projectInformationContainer}>
          <h1 className={styles.projectTitle}>{information.title}</h1>
          <p className={styles.projectText}>
            {information.firstParagraph}
          </p>{" "}
          <p className={styles.projectText}>{information.secondParagraph}</p>{" "}
          <div className={styles.projectIconsContainer}>
            <a
              className={styles.projectLink}
              href={information.githubLink}
              target="_blank"
            >
              <div className={styles.projectIconContainer}>
                <img className={styles.projectIcon} src={githubIcon} alt="" />
                <p className={styles.projectIconText}>
                  {language === "es" ? "Ver en Github" : "View on GitHub"}
                </p>
              </div>
            </a>{" "}
            <a
              className={styles.projectLink}
              href={information.liveLink}
              target="_blank"
            >
              <div className={styles.projectIconContainer}>
                <img className={styles.projectIcon} src={liveIcon} alt="" />
                <p className={styles.projectIconText}>
                  {language === "es" ? "Ver en vivo" : "Go to website"}
                </p>
              </div>
            </a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
