import React from "react";
import HtmlTags from "../components/HtmlTags";
import ProjectCard from "../components/ProjectCard";
import S from "../styles/Projects.module.scss";
import { Helmet } from "react-helmet";
import { useIsDesktop } from "../utils/useIsDesktop";
import { Projects } from "./projects";

const ProjectsHome: React.FC = () => {
  const hideTags = !useIsDesktop();

  return (
    <div className={S.section}>
      <Helmet>
        <title>Projects</title>
      </Helmet>
      <HtmlTags
        tagType="div"
        inheritSize={true}
        hideTags={hideTags}
        children={
          <div className={S.container}>
            <div className={S.content}>
              <h1 className={S.title}>Projects</h1>
              {Projects.map((project) => (
                <ProjectCard
                  key={project.route}
                  thumbnail={project.thumbnail}
                  projectName={project.title}
                  clientName={project.client}
                  languages={project.languages}
                  date={project.date}
                  route={project.route}
                />
              ))}
            </div>
          </div>
        }
      />
    </div>
  );
};

export default ProjectsHome;
