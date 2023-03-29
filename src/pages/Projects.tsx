import React, { useEffect, useState } from "react";
import HtmlTags from "../components/HtmlTags";
import {
  ButterflyEffectThumbnail,
  IlearnThumbnail,
  VaultThumbnail,
} from "../assets/thumbnails/";
import {
  DjangoIcon,
  FlaskIcon,
  FlutterIcon,
  PostgresqlIcon,
  SqliteIcon,
} from "../assets/icons";

const Projects: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [hideTags, setHideTags] = useState<Boolean>(false);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    windowWidth <= 1200 ? setHideTags(true) : setHideTags(false);
  }, [windowWidth]);

  return (
    <div className="main-content">
      <div className="projects__section">
        <HtmlTags
          tagType="div"
          inheritSize={true}
          hideTags={hideTags}
          children={
            <div className="projects__container">
              <div className="projects__content">
                <h1 className="projects__title">Projects</h1>
                <ProjectCard
                  thumbnail={ButterflyEffectThumbnail}
                  projectName="The butterfly effect"
                  clientName="Harvard CS50x"
                  languages={[
                    { icon: FlaskIcon, alt: "Flask icon" },
                    { icon: SqliteIcon, alt: "Sqlite icon" },
                  ]}
                  date="June - July 2022"
                />
                <ProjectCard
                  thumbnail={IlearnThumbnail}
                  projectName="iLearn website"
                  clientName="iLearn education"
                  languages={[
                    { icon: DjangoIcon, alt: "Django icon" },
                    { icon: PostgresqlIcon, alt: PostgresqlIcon },
                  ]}
                  date="November 2022 - current"
                />
                <ProjectCard
                  thumbnail={VaultThumbnail}
                  projectName="Vault app"
                  clientName="Vault Payment Solutions"
                  languages={[{ icon: FlutterIcon, alt: "Flutter icon" }]}
                  date="March 2022 - current"
                />
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
};

interface LanguageIcon {
  icon: string;
  alt?: string;
}

interface ProjectCardProps {
  thumbnail: string;
  projectName: string;
  clientName: string;
  languages?: LanguageIcon[];
  date: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  thumbnail,
  projectName,
  clientName,
  languages = [],
  date,
}) => {
  return (
    <div className="project-card__container">
      <div className="project-card__main-content">
        <img
          className="project-card__thumbnail"
          src={thumbnail}
          alt={`${projectName} thumbnail`}
        />
        <div className="project-card__details">
          <div>
            <h2 className="project-card__name">{projectName}</h2>
            <h3 className="project-card__client">{clientName}</h3>
          </div>
          <div className="project-card__language-icons">
            {languages.map((icon, index) => (
              <img
                className="project-card__language-icon"
                key={index}
                src={icon.icon}
                alt={icon.alt}
              />
            ))}
          </div>
        </div>
      </div>
      <h3 className="project-card__date">{date}</h3>
    </div>
  );
};

export default Projects;
