import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

const Root = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <CSSTransition
      in={!isLoading}
      classNames="long-fade"
      timeout={1000}
      unmountOnExit
    >
      <div style={{ height: "inherit" }}>
        <Outlet />
      </div>
    </CSSTransition>
  );
};

export default Root;
