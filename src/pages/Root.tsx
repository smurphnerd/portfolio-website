import React from "react";
import { Outlet } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

const Root = () => (
  <CSSTransition appear in timeout={1000} classNames="long-fade">
    <div style={{ height: "inherit" }}>
      <Outlet />
    </div>
  </CSSTransition>
);

export default Root;
