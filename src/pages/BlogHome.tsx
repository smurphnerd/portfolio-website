import React from "react";
import S from "../styles/Blog.module.scss";
import { Helmet } from "react-helmet";
import HtmlTags from "../components/HtmlTags";
import { BlogCard } from "../components/BlogCard";
import { useIsDesktop } from "../utils/useIsDesktop";
import BlogPosts from "./blogs";

const BlogHome: React.FC = () => {
  const hideTags = !useIsDesktop();

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
              {BlogPosts.filter((post) => !post.isPrivate).map((post) => (
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
