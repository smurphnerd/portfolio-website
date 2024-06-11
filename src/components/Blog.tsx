import { useEffect, useState } from "react";
import { HiArrowUp } from "react-icons/hi";
import { timeAgo } from "../utils/format";
import { supabase } from "../utils/supabase";
import S from "./Blog.module.scss";

interface Props {
  thumbnail: string;
  title: string;
  content: JSX.Element;
  date: string;
  route: string;
}

export const Blog: React.FC<Props> = ({
  thumbnail,
  title,
  content,
  date,
  route,
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
      <CommentSection route={route} />
    </div>
  );
};

interface Comment {
  author_name: string;
  author_organization: string;
  comment: string;
  created_at: string;
}

const CommentSection: React.FC<{ route: string }> = ({ route }) => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    getComments();
  });

  async function getComments() {
    const { data, error } = await supabase
      .from("blog_comments")
      .select("*")
      .eq("blog_route", route)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching comments:", error.message);
    } else {
      setComments(data as Comment[]);
    }
  }

  async function addComment(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const author_name = formData.get("author_name") as string;
    const author_organization = formData.get("author_organization") as string;
    const comment = formData.get("comment") as string;

    const { error } = await supabase.from("blog_comments").insert([
      {
        author_name,
        author_organization,
        comment,
        blog_route: route,
      },
    ]);

    if (error) {
      console.error("Error adding comment:", error.message);
    } else {
      getComments();
    }

    (e.target as HTMLFormElement).reset();
  }

  return (
    <div className="flex flex-col">
      <h2 className={S.sectionHeader}>Comments ({comments.length})</h2>
      <form className="mb-8" onSubmit={(e) => addComment(e)}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <input
            type="text"
            id="author_name"
            name="author_name"
            required
            placeholder="*Name"
          />
          <input
            type="text"
            id="author_organization"
            name="author_organization"
            placeholder="Organization"
          />
          <textarea
            id="comment"
            name="comment"
            required
            placeholder="*Comment"
            className="md:col-span-2 h-32"
          />
        </div>
        <button type="submit" className="align-self-end">
          Submit
        </button>
      </form>
      <ul className="p-6">
        {comments.map((comment) => {
          let name = comment.author_name;
          if (comment.author_organization) {
            name += ` - ${comment.author_organization}`;
          }
          return (
            <li
              key={comment.created_at}
              className="list-none mt-8 flex flex-col gap-2"
            >
              <div className="flex items-start gap-0 flex-col sm:items-center sm:gap-4 sm:flex-row">
                <h4 className="m-0">{name}</h4>
                <span className="text-base">{timeAgo(comment.created_at)}</span>
              </div>
              <p>{comment.comment}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
