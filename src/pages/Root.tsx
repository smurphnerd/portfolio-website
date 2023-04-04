import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

const Root = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  console.log("root");
  return (
    <CSSTransition
      in={!isLoading}
      classNames="long-fade"
      timeout={500}
      unmountOnExit
    >
      <div style={{ height: "inherit" }}>
        <Outlet />
      </div>
    </CSSTransition>
  );
};

export default Root;
