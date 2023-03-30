import React, { useEffect, useState } from "react";
import { GrClose, GrMenu } from "react-icons/gr";
import { Link, useLocation } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { ReactComponent as SmLogo } from "../assets/sm-logo.svg";
import S from "../styles/Navbar.module.scss";
import HtmlTags from "./HtmlTags";

const Navbar: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState<boolean | undefined>(false);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

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

  return (
    <>
      <button
        className={S.toggleButton}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {!navbarOpen && <GrMenu />}
        {navbarOpen && <GrClose />}
      </button>
      <CSSTransition in={navbarOpen} timeout={500} classNames={"fade"}>
        <nav className={S.Navbar}>
          <span className={S.logoContainer}>
            <Link to="/">
              <SmLogo className={S.logo} />
            </Link>
          </span>
          <HtmlTags
            tagType="ul"
            children={
              <ul className={S.links}>
                <NavLink linkTitle="projects" routeName="/projects" />
                <NavLink linkTitle="inspiration" routeName="/inspiration" />
                <NavLink linkTitle="blog" routeName="/blog" />
              </ul>
            }
          />
        </nav>
      </CSSTransition>
    </>
  );
};

interface NavLinkProps {
  linkTitle: string;
  routeName: string;
}

const NavLink: React.FC<NavLinkProps> = ({ linkTitle, routeName }) => {
  const location = useLocation();
  return (
    <li
      className={`
        ${
          location.pathname === routeName ? S.link___active : S.link___inactive
        }`}
    >
      <Link to={routeName}>{linkTitle.toUpperCase()}</Link>
    </li>
  );
};

export default Navbar;
