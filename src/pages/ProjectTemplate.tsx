import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import S from "../styles/ProjectTemplate.module.scss";
import { HiArrowLeft } from "react-icons/hi";
import { CSSTransition } from "react-transition-group";

const ProjectTemplate = () => {
  return (
    <CSSTransition timeout={5000} classNames="fade">
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
