import styles from "../Projects/Projects.module.css";
import newsExplorer from "../../assets/Images/projects/news-explorer.jpeg";
import arountTheWorld from "../../assets/Images/projects/around-the-world.jpeg";
import tripleEspresso from "../../assets/Images/projects/triple-espresso.jpeg";
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
              <p className={styles.projectImageLink}>Click para mas...</p>
            </div>
          </Link>
          <h3 className={styles.projectTitle}>News Explorer App</h3>
          <p className={styles.projectText}>
            {texts.projects.grid.newsExplorer.text}
          </p>
          <div className={styles.projectKeywordsContainer}>
            {texts.projects.grid.newsExplorer.keywords.map((keyword: any) => (
              <p key={keyword} className={styles.projectKeyword}>
                {keyword}
              </p>
            ))}
          </div>
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

          <h3 className={styles.projectTitle}>Around the World</h3>
          <p className={styles.projectText}>
            {texts.projects.grid.aroundTheWorld.text}
          </p>
          <div className={styles.projectKeywordsContainer}>
            {texts.projects.grid.aroundTheWorld.keywords.map((keyword: any) => (
              <p key={keyword} className={styles.projectKeyword}>
                {keyword}
              </p>
            ))}
          </div>
        </div>
        <div className={styles.projectContainer}>
          <Link to="/projects/news-explorer">
            <div className={styles.projectImageContainer}>
              <img
                src={tripleEspresso}
                alt=""
                className={styles.projectImage}
              />
              <p className={styles.projectImageLink}>Conocer mas...</p>
            </div>
          </Link>
          <h3 className={styles.projectTitle}>Triple Espresso</h3>
          <p className={styles.projectText}>
            {texts.projects.grid.tripleEspresso.text}
          </p>
          <div className={styles.projectKeywordsContainer}>
            {texts.projects.grid.tripleEspresso.keywords.map((keyword: any) => (
              <p key={keyword} className={styles.projectKeyword}>
                {keyword}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
