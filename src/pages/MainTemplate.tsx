import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import S from "../styles/MainTemplate.module.scss";
import { useLocation, useOutlet } from "react-router-dom";
import { SwitchTransition, CSSTransition } from "react-transition-group";

const MainTemplate: React.FC = () => {
  const location = useLocation();
  const currentOutlet = useOutlet();
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
      <div className={S.content}>
        <Navbar />
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={location.pathname}
            timeout={600}
            classNames="swipe"
          >
            {currentOutlet}
          </CSSTransition>
        </SwitchTransition>
      </div>
    </CSSTransition>
  );
};

export default MainTemplate;
