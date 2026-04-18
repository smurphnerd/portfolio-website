import React from "react";
import { Helmet } from "react-helmet";
import { Navigate, useParams } from "react-router-dom";
import { Blog } from "../components/Blog";
import { BlogPosts } from "./blogs";

const BlogRoute: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = BlogPosts.find((p) => p.route === slug);
  if (!post) return <Navigate to="/blog" replace />;

  return (
    <>
      <Helmet>
        <title>{post.title}</title>
      </Helmet>
      <Blog
        title={post.title}
        date={post.date}
        thumbnail={post.thumbnail}
        content={post.content}
        route={post.route}
        markdownPath={post.markdownPath}
      />
    </>
  );
};

export default BlogRoute;
