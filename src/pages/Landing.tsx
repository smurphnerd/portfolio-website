import React from "react";
import HtmlTags from "../components/HtmlTags";
import S from "../styles/Landing.module.scss";
import { Helmet } from "react-helmet";

const Landing: React.FC = () => {
  return (
    <>
      <div className={S.section}>
        <Helmet>
          <title>Welcome</title>
        </Helmet>
        <div className={S.messageSection}>
          <HtmlTags
            tagType="h1"
            children={
              <h1 className={S.title}>Welcome, my name is Sean Murphy...</h1>
            }
          />
        </div>
      </div>
    </>
  );
};

export default Landing;
