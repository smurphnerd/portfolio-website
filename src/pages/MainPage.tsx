import React, { useEffect, useState } from "react";
import NavigationContext from "../contexts/NavigationContext";
import TransitionContext from "../contexts/TransitionContext";
import Landing from "./Landing";
import Navbar from "../components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const MainPage: React.FC = () => {
  const [activePage, setActivePage] = useState<JSX.Element | null>(null);
  const [isTransitioning, setIsTransitioning] = useState<Boolean>(false);

  useEffect(() => {
    setIsTransitioning(true);

    setTimeout(() => {
      setIsTransitioning(false);
      setActivePage(<Landing />);
    }, 600);
  }, []);

  return (
    <NavigationContext.Provider value={{ activePage, setActivePage }}>
      <TransitionContext.Provider
        value={{ isTransitioning, setIsTransitioning }}
      >
        <Navbar />
        <div
          className={`active-page ${isTransitioning ? "fade-out" : "fade-in"}`}
        >
          {activePage}
        </div>
      </TransitionContext.Provider>
    </NavigationContext.Provider>
  );
};

export default MainPage;
