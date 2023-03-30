import React from "react";
import Navbar from "../components/Navbar";
import { useLocation, useOutlet } from "react-router-dom";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { mainSectionRoutes } from "../App";

const MainSection: React.FC = () => {
  const location = useLocation();
  const currentOutlet = useOutlet();
  const route = mainSectionRoutes.find(
    (route) => route.path === location.pathname ?? {}
  );

  return (
    <>
      <Navbar />
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={location.pathname}
          nodeRef={route?.nodeRef}
          timeout={600}
          classNames="swipe"
          addEndListener={(done: any) => {
            route?.nodeRef.current?.addEventListener(
              "transitionend",
              done,
              false
            );
          }}
        >
          {currentOutlet}
        </CSSTransition>
      </SwitchTransition>
    </>
  );
};

export default MainSection;
