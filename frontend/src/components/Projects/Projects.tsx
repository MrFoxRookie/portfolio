import styles from "../Projects/Projects.module.css";
import newsExplorer from "../../assets/Images/projects/news-explorer.jpeg";
import arountTheWorld from "../../assets/Images/projects/around-the-world.jpeg";
import { LanguageContext } from "../context/LanguageContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

function Projects() {
  const { texts } = useContext(LanguageContext);

  return (
    <div className={styles.projects}>
      <div className={styles.projectsGrid}>
        <div className={styles.projectContainer}>
          <Link to="/projects/news-explorer">
            <div className={styles.projectImageContainer}>
              <img src={newsExplorer} alt="" className={styles.projectImage} />
              <p className={styles.projectImageLink}>Conocer mas...</p>
            </div>
          </Link>
          <h3>News Explorer App</h3>
          <p>{texts.projects.grid.newsExplorer.text}</p>
          {texts.projects.grid.newsExplorer.keywords.map((keyword: any) => (
            <p key={keyword} className={styles.keyword}>
              {keyword}
            </p>
          ))}
        </div>
        <div className={styles.projectContainer}>
          <Link to="/projects/around-the-world">
            <div className={styles.projectImageContainer}>
              <img
                src={arountTheWorld}
                alt=""
                className={styles.projectImage}
              />
              <p className={styles.projectImageLink}>Conocer mas...</p>
            </div>
          </Link>
          <h3>News Explorer App</h3>
          <p>{texts.projects.grid.aroundTheWorld.text}</p>
          {texts.projects.grid.aroundTheWorld.keywords.map((keyword: any) => (
            <p key={keyword} className={styles.keyword}>
              {keyword}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
