import React, { useEffect, useState } from "react";
import S from "../styles/Blog.module.scss";
import { Helmet } from "react-helmet";
import HtmlTags from "../components/HtmlTags";
import { BlogCard } from "../components/BlogCard";
import BlogPosts from "./blogs";

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
              {BlogPosts.map((post) => (
                <BlogCard
                  key={post.route}
                  date={post.date}
                  blurb={post.blurb}
                  title={post.title}
                  thumbnail={post.thumbnail}
                  route={post.route}
                />
              ))}
            </div>
          </div>
        }
      />
    </div>
  );
};

export default BlogHome;
