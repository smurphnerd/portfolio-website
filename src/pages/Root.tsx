import React from "react";
import { Outlet } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

const Root = () => {
  console.log("root");
  return (
    <>
      <CSSTransition timeout={300} classNames="fade">
        <Outlet />
      </CSSTransition>
    </>
  );
};

export default Root;
