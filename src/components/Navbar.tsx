import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { GrClose, GrMenu } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { Link, useLocation } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { ReactComponent as SmLogo } from "../assets/sm-logo.svg";
import S from "./Navbar.module.scss";
import HtmlTags from "./HtmlTags";

const Navbar: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [navbarOpen, setNavbarOpen] = useState<boolean>(
    windowWidth <= 1200 ? true : false,
  );

  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
    return () => {
      window.removeEventListener("resize", () =>
        setWindowWidth(window.innerWidth),
      );
    };
  }, []);

  useEffect(() => {
    if (windowWidth > 1200) {
      setNavbarOpen(true);
    } else {
      setNavbarOpen(false);
    }
  }, [windowWidth]);

  // Reset condition to its original state
  const handleLinkClick = () => {
    windowWidth > 1200 ? setNavbarOpen(true) : setNavbarOpen(false);
  };

  return (
    <>
      <button
        className={S.toggleButton}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {!navbarOpen && <GrMenu />}
        {navbarOpen && <GrClose />}
      </button>

      <CSSTransition
        in={navbarOpen}
        timeout={windowWidth <= 1200 ? 200 : 0}
        classNames={windowWidth <= 1200 ? "navFade" : ""}
      >
        <nav className={S.Navbar}>
          <span className={S.logoContainer}>
            <Link to="/" onClick={handleLinkClick}>
              <SmLogo className={S.logo} />
            </Link>
          </span>
          <HtmlTags
            tagType="ul"
            children={
              <ul className={S.links}>
                <NavLink
                  linkTitle="projects"
                  routeName="/projects"
                  onClick={handleLinkClick}
                />
                <NavLink
                  linkTitle="inspiration"
                  routeName="/inspiration"
                  onClick={handleLinkClick}
                />
                <NavLink
                  linkTitle="blog"
                  routeName="/blog"
                  onClick={handleLinkClick}
                />
              </ul>
            }
          />
          <ul className={S.socials}>
            <SocialLink
              href="https://github.com/smurphnerd"
              label="GitHub"
              icon={<FaGithub />}
            />
            <SocialLink
              href="mailto:sean.murphy@monash.edu"
              label="Email"
              icon={<HiOutlineMail />}
            />
            <SocialLink
              href="/SeanMurphyResumeAI.pdf"
              label="Resume"
              icon={<HiOutlineDocumentText />}
            />
          </ul>
        </nav>
      </CSSTransition>
    </>
  );
};

interface NavLinkProps {
  linkTitle: string;
  routeName: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined;
}

const NavLink: React.FC<NavLinkProps> = ({ linkTitle, routeName, onClick }) => {
  const location = useLocation();
  return (
    <li
      className={`
        ${
          location.pathname === routeName ? S.link___active : S.link___inactive
        }`}
    >
      <Link to={routeName} onClick={onClick}>
        {linkTitle.toUpperCase()}{" "}
      </Link>
    </li>
  );
};

interface SocialLinkProps {
  href: string;
  label: string;
  icon: React.ReactNode;
  download?: boolean;
}

const SocialLink: React.FC<SocialLinkProps> = ({
  href,
  label,
  icon,
  download,
}) => (
  <li className={S.social}>
    <a
      href={href}
      aria-label={label}
      title={label}
      target={download ? undefined : "_blank"}
      rel="noopener noreferrer"
      {...(download ? { download: true } : {})}
    >
      {icon}
    </a>
  </li>
);

export default Navbar;
