import React from "react";
import { Outlet } from "react-router-dom";
import S from "../styles/P";

const ProjectTemplate = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default ProjectTemplate;
