import { useParams } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const projectSlugMap: any = {
  "news-explorer": "newsExplorer",
  "around-the-world": "aroundTheWorld",
};

function ProjectDetail() {
  const { projectId } = useParams();
  const { texts } = useContext(LanguageContext);

  if (!projectId) {
    return <p>Proyecto no válido</p>;
  }

  const projectKey = projectSlugMap[projectId];

  const information = texts?.projectDetail?.[projectKey];

  return (
    <div>
      <h1>{information.title}</h1>
      <p>{information.text}</p>
    </div>
  );
}

export default ProjectDetail;
