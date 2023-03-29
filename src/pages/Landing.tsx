import React from "react";
import HtmlTags from "../components/HtmlTags";
import Navbar from "../components/Navbar";

const Landing: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <div className="landing__section">
          <div className="landing__message">
            <HtmlTags
              tagType="h1"
              children={
                <h1 className="landing__title">
                  Welcome, my name is Sean Murphy...
                </h1>
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
