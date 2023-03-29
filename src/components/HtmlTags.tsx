import React, { ReactNode } from "react";
import "../styles/styles.css";

interface Props {
  tagType: string;
  inheritSize?: Boolean;
  hideTags?: Boolean;
  children: ReactNode;
}

const HtmlTags: React.FC<Props> = ({
  tagType,
  inheritSize = false,
  hideTags = false,
  children,
}) => {
  return (
    <div
      className="html-tag__container"
      style={{
        height: inheritSize ? "inherit" : "auto",
        width: inheritSize ? "inherit" : "auto",
      }}
    >
      <span
        className={`html-tag__item html-tag__open ${hideTags ? "hidden" : ""}`}
      >
        &lt;{tagType}&gt;
      </span>
      {children}
      <span
        className={`html-tag__item html-tag__close ${hideTags ? "hidden" : ""}`}
      >
        &lt;/{tagType}&gt;
      </span>
    </div>
  );
};

export default HtmlTags;
