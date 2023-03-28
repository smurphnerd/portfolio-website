import React, { FC, ReactNode } from "react";
import "../styles/styles.css";

interface Props {
  tagType: string;
  children: ReactNode;
}

const HtmlTags: FC<Props> = ({ tagType, children }) => {
  return (
    <div className="html-tag__container">
      <span className="html-tag__item html-tag__open">&lt;{tagType}&gt;</span>
      {children}
      <span className="html-tag__item html-tag__close">&lt;/{tagType}&gt;</span>
    </div>
  );
};

export default HtmlTags;
