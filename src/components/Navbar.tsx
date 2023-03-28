import React, { useContext, useEffect, useState } from "react";
import { ReactComponent as SmLogo } from "../assets/sm-logo.svg";
import { GrMenu, GrClose } from "react-icons/gr";
import "../styles/styles.css";
import HtmlTags from "./HtmlTags";
import NavigationContext from "../contexts/NavigationContext";
import Landing from "../pages/Landing";
import Projects from "../pages/Projects";
import Inspiration from "../pages/Inspiration";
import Blog from "../pages/Blog";
import TransitionContext from "../contexts/TransitionContext";

const Navbar = () => {
  const { setActivePage } = useContext(NavigationContext);
  const { setIsTransitioning } = useContext(TransitionContext);

  const [navbarOpen, setNavbarOpen] = useState<Boolean>(false);
  const [windowWidth, setwindowWidth] = useState<number>(window.innerWidth);
  const [activeLink, setActiveLink] = useState<string | null>(null);

  useEffect(() => {
    const nav: HTMLElement | null = document.querySelector(".nav");
    console.log("test");
    if (nav) {
      navbarOpen ? (nav.style.display = "flex") : (nav.style.display = "none");
    }
  }, [navbarOpen]);

  const handleResize = () => {
    setwindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const nav: HTMLElement | null = document.querySelector(".nav");
    if (nav) {
      if (windowWidth <= 1200) {
        nav.style.display = "none";
      } else {
        nav.style.display = "flex";
        setNavbarOpen(false);
      }
    }
  }, [windowWidth]);

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
      <button
        className="nav__button"
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {!navbarOpen && <GrMenu />}
        {navbarOpen && <GrClose />}
      </button>
      <nav className="nav">
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
