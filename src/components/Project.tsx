import React from "react";
import S from "../styles/Project.module.scss";

interface Props {
  thumbnail: string;
  title: string;
  client: string;
  blurb: string;
  demo?: string;
  about?: JSX.Element;
  techSheet?: string[];
  resources?: JSX.Element[];
}

const Project: React.FC<Props> = ({
  thumbnail,
  title,
  client,
  blurb,
  demo,
  about,
  techSheet,
  resources,
}) => {
  return (
    <div className={S.content}>
      <div className={S.header}>
        <img
          className={S.thumbnail}
          src={thumbnail}
          alt={`${title} thumbnail`}
        />
        <div>
          <h1>{title}</h1>
          <h2>{client}</h2>
          <p className={S.blurb}>{blurb}</p>
        </div>
      </div>
      {demo && <img className={S.demo} src={demo} alt={`${title} demo`} />}
      {about && (
        <div className={S.sectionBody}>
          <ProjectHeader header="About this project" />
          {about}
        </div>
      )}
      {techSheet && (
        <>
          <ProjectHeader
            header="Technology Sheet"
            description="Code technologies I used while working on this project"
          />
          <ul>
            {techSheet.map((technology, key) => {
              return <li key={key}>{technology}</li>;
            })}
          </ul>
        </>
      )}
      {resources && (
        <>
          <ProjectHeader header="Resources" />
          <ul>
            {resources.map((resource, key) => {
              return <li key={key}>{resource}</li>;
            })}
          </ul>
        </>
      )}
    </div>
  );
};

interface ProjectHeaderProps {
  header: string;
  description?: string;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({
  header,
  description,
}) => {
  return (
    <div className={S.sectionHeader}>
      <h2>{header}</h2>
      {description && <p>{description}</p>}
    </div>
  );
};

export default Project;
