import React, { useEffect, useState } from "react";
import {
  DjangoIcon,
  FlaskIcon,
  FlutterIcon,
  PostgresqlIcon,
  SqliteIcon,
} from "../assets/icons";
import {
  ButterflyEffectThumbnail,
  IlearnThumbnail,
  VaultThumbnail,
} from "../assets/thumbnails/";
import HtmlTags from "../components/HtmlTags";
import ProjectCard from "../components/ProjectCard";
import S from "../styles/Projects.module.scss";

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
    <div className={S.section}>
      <HtmlTags
        tagType="div"
        inheritSize={true}
        hideTags={hideTags}
        children={
          <div className={S.container}>
            <div className={S.content}>
              <h1 className={S.title}>Projects</h1>
              <ProjectCard
                thumbnail={ButterflyEffectThumbnail}
                projectName="The butterfly effect"
                clientName="Harvard CS50x"
                languages={[
                  { icon: FlaskIcon, alt: "Flask icon" },
                  { icon: SqliteIcon, alt: "Sqlite icon" },
                ]}
                date="June - July 2022"
                route="butterfly-effect"
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
                route="ilearn-website"
              />
              <ProjectCard
                thumbnail={VaultThumbnail}
                projectName="Vault app"
                clientName="Vault Payment Solutions"
                languages={[{ icon: FlutterIcon, alt: "Flutter icon" }]}
                date="March 2022 - current"
                route="vault-app"
              />
            </div>
          </div>
        }
      />
    </div>
  );
};

export default Projects;
