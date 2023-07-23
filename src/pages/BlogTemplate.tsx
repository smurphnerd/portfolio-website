import React from "react";
import { useEffect, useState } from "react";
import { HiArrowLeft } from "react-icons/hi";
import { Link, Outlet } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

export const ArticleTemplate = () => {
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
      timeout={1000}
      classNames="long-fade"
    >
      <div className="template-section">
        <div className="template-content">
          <Link to="/blog">
            <button className="back-button">
              <HiArrowLeft />
            </button>
          </Link>
          <Outlet />
        </div>
        <div className="template-banner"></div>
      </div>
    </CSSTransition>
  );
};
