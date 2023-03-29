import React, { useContext, useEffect, useState } from "react";
import { GrClose, GrMenu } from "react-icons/gr";
import { ReactComponent as SmLogo } from "../assets/sm-logo.svg";
import NavigationContext from "../contexts/NavigationContext";
import TransitionContext from "../contexts/TransitionContext";
import Blog from "../pages/Blog";
import Inspiration from "../pages/Inspiration";
import Landing from "../pages/Landing";
import Projects from "../pages/Projects";
import "../styles/styles.css";
import HtmlTags from "./HtmlTags";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const { setActivePage } = useContext(NavigationContext);
  const { setIsTransitioning } = useContext(TransitionContext);

  const [navbarOpen, setNavbarOpen] = useState<Boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [navbarBackground, setNavbarBackground] = useState<Boolean>(false);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth > 1200) {
      setNavbarOpen(false);
      console.log("closed");
    }
  }, [windowWidth]);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  useEffect(() => {
    if (navbarOpen) {
      setNavbarBackground(false);
      console.log("foreground");
    } else {
      setTimeout(() => {
        setNavbarBackground(true);
        console.log("background");
      }, 300);
    }
  }, [navbarOpen]);

  const handleNavigation = (activeLink: string | null, page: JSX.Element) => {
    setActiveLink(activeLink);
    setIsTransitioning(true);

    setTimeout(() => {
      setNavbarOpen(false);
    }, 100);

    setTimeout(() => {
      setIsTransitioning(false);
      setActivePage(page);
    }, 500);
  };

  return (
    <>
      <button className="nav__button" onClick={toggleNavbar}>
        {!navbarOpen && <GrMenu />}
        {navbarOpen && <GrClose />}
      </button>
      <nav
        className={`nav ${
          navbarOpen ? "fade-in" : windowWidth <= 1200 ? "fade-out" : ""
        } ${navbarBackground ? (windowWidth <= 1200 ? "background" : "") : ""}`}
      >
        <span
          className="nav__logo-container"
          onClick={() => handleNavigation(null, <Landing />)}
        >
          <SmLogo className="nav__logo" />
        </span>
        <HtmlTags
          tagType="ul"
          children={
            <ul className="nav__links">
              <li
                className={
                  activeLink === "projects"
                    ? "nav__link--active"
                    : "nav__link--inactive"
                }
                onClick={(e) => handleNavigation("projects", <Projects />)}
              >
                PROJECTS
              </li>

              <li
                className={
                  activeLink === "inspiration"
                    ? "nav__link--active"
                    : "nav__link--inactive"
                }
                onClick={(e) =>
                  handleNavigation("inspiration", <Inspiration />)
                }
              >
                INSPIRATION
              </li>
              <li
                className={
                  activeLink === "blog"
                    ? "nav__link--active"
                    : "nav__link--inactive"
                }
                onClick={(e) => handleNavigation("blog", <Blog />)}
              >
                BLOG
              </li>
            </ul>
          }
        />
      </nav>
    </>
  );
};

export default Navbar;
