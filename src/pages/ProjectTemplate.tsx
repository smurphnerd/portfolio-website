import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import S from "../styles/ProjectTemplate.module.scss";
import { HiArrowLeft } from "react-icons/hi";
import { CSSTransition } from "react-transition-group";

const ProjectTemplate = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  }, []);

  return (
    <CSSTransition
      unmountOnExit
      in={!isLoading}
      timeout={500}
      classNames="long-fade"
    >
      <div className={S.section}>
        <div className={S.content}>
          <Link to="/projects">
            <button className={S.backButton}>
              <HiArrowLeft />
            </button>
          </Link>
          <Outlet />
        </div>
        <div className={S.banner}></div>
      </div>
    </CSSTransition>
  );
};

export default ProjectTemplate;
