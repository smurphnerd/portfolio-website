import { Icon } from "../assets/icons";
import S from "./ProjectCard.module.scss";

interface ProjectCardProps {
    thumbnail: string;
    projectName: string;
    clientName: string;
    languages?: Icon[];
    date: string;
    route: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    thumbnail,
    projectName,
    clientName,
    languages = [],
    date,
    route,
}) => (
    <a href={`/projects/${route}`}>
        <div className={S.container}>
            <div className={S.mainContent}>
                <img
                    className={S.thumbnail}
                    src={thumbnail}
                    alt={`${projectName} thumbnail`}
                />
                <div className={S.projectDetails}>
                    <div>
                        <h2 className={S.projectName}>{projectName}</h2>
                        <h3 className={S.projectClient}>{clientName}</h3>
                    </div>
                    <div className={S.languageIcons}>
                        {languages.map((icon, index) => (
                            <img
                                className={S.languageIcon}
                                key={index}
                                src={icon.src}
                                alt={icon.alt}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <h3 className={S.projectDate}>{date}</h3>
        </div>
    </a>
);

export default ProjectCard;
