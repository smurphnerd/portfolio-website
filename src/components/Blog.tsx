import { useEffect, useState } from "react";
import { HiArrowUp } from "react-icons/hi";

interface Props {
  thumbnail: string;
  title: string;
  content: JSX.Element;
  date: string;
}

export const Blog: React.FC<Props> = ({
  thumbnail,
  title,
  content,
  date,
}: Props) => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col">
      <div className="article-header">
        <img
          className="article-thumbnail"
          src={thumbnail}
          alt={`${title} thumbnail`}
        />
        <div>
          <h1>{title}</h1>
          <h6>{date}</h6>
        </div>
      </div>
      <div className="flex flex-col">{content}</div>
      <button
        onClick={scrollToTop}
        style={{ opacity: showButton ? 1 : 0 }}
        className="fixed bottom-10 right-10 z-50 p-2 transition-opacity duration-300"
      >
        <HiArrowUp />
      </button>
    </div>
  );
};
