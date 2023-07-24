import React, { useEffect, useState } from "react";
import S from "../styles/Blog.module.scss";
import { Helmet } from "react-helmet";
import HtmlTags from "../components/HtmlTags";
import { BlogCard } from "../components/BlogCard";
import {
  TheButterflyEffectThumbnail,
  WhyIStartedProgrammingThumbnail,
} from "../assets/thumbnails";

const BlogHome: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [hideTags, setHideTags] = useState<Boolean>(false);

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
    windowWidth <= 1200 ? setHideTags(true) : setHideTags(false);
  }, [windowWidth]);

  return (
    <div className={S.section}>
      <Helmet>
        <title>Blog</title>
      </Helmet>
      <HtmlTags
        tagType="div"
        inheritSize={true}
        hideTags={hideTags}
        children={
          <div className={S.container}>
            <div className={S.content}>
              <h1 className={S.title}>Blogs</h1>
              <BlogCard
                date="16 June 2022"
                blurb="The origin story of my programming journey. Find out where it all began..."
                title="Why I Started Programming"
                thumbnail={WhyIStartedProgrammingThumbnail}
                route="why-i-started-programming"
              />
              <BlogCard
                date="2 August 2022"
                blurb="A bit about my experience in developing my first full stack application from scratch..."
                title="The Butterfly Effect"
                thumbnail={TheButterflyEffectThumbnail}
                route="the-butterfly-effect"
              />
            </div>
          </div>
        }
      />
    </div>
  );
};

export default BlogHome;
