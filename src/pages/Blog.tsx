import React from "react";
import S from "../styles/Blog.module.scss";
import { Helmet } from "react-helmet";

const Blog: React.FC = () => {
  return (
    <div className={S.section}>
      <Helmet>
        <title>Coming soon</title>
      </Helmet>
      <h1>Blogs coming soon...</h1>
    </div>
  );
};

export default Blog;
