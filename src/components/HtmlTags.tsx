import React, { ReactNode } from "react";
import S from "./HtmlTags.module.scss";

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
      className={S.container}
      style={{
        height: inheritSize ? "inherit" : "auto",
        width: inheritSize ? "inherit" : "auto",
      }}
    >
      <span className={`${S.tag} ${S.openTag} ${hideTags && "hidden"}`}>
        &lt;{tagType}&gt;
      </span>
      {children}
      <span className={`${S.tag} ${S.closeTag} ${hideTags && "hidden"}`}>
        &lt;/{tagType}&gt;
      </span>
    </div>
  );
};

export default HtmlTags;
