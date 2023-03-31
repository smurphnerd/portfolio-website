import React from "react";
import Navbar from "../components/Navbar";
import { useLocation, useOutlet } from "react-router-dom";
import { SwitchTransition, CSSTransition } from "react-transition-group";

const MainTemplate: React.FC = () => {
  const location = useLocation();
  const currentOutlet = useOutlet();

  return (
    <>
      <Navbar />
      <SwitchTransition mode="out-in">
        <CSSTransition key={location.pathname} timeout={600} classNames="swipe">
          {currentOutlet}
        </CSSTransition>
      </SwitchTransition>
    </>
  );
};

export default MainTemplate;
