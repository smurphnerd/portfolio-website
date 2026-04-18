import React from "react";
import { Helmet } from "react-helmet";
import { Navigate, useParams } from "react-router-dom";
import Project from "../components/Project";
import { Projects } from "./projects";

const ProjectRoute: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const index = Projects.findIndex((p) => p.route === slug);
  if (index === -1) return <Navigate to="/projects" replace />;

  const project = Projects[index];
  const hasPrevious = index < Projects.length - 1;
  const hasNext = index > 0;

  return (
    <>
      <Helmet>
        <title>{project.title}</title>
      </Helmet>
      <Project
        thumbnail={project.thumbnail}
        title={project.title}
        client={project.client}
        blurb={project.blurb}
        demo={project.demo}
        about={project.about}
        techSheet={project.techSheet}
        resources={project.resources}
        markdownPath={project.markdownPath}
        otherProjects={{
          previous: hasPrevious ? Projects[index + 1].route : undefined,
          next: hasNext ? Projects[index - 1].route : undefined,
        }}
      />
    </>
  );
};

export default ProjectRoute;
