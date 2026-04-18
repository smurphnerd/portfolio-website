import { useCallback, useEffect, useRef, useState } from "react";
import { HiArrowUp } from "react-icons/hi";
import { timeAgo } from "../utils/format";
import { supabase } from "../utils/supabase";
import { loadTurnstile, TURNSTILE_SITE_KEY } from "../utils/turnstile";
import { useMarkdown } from "../utils/useMarkdown";
import S from "./Blog.module.scss";
import { MarkdownRenderer } from "./MarkdownRenderer";

const COMMENTS_ENABLED = process.env.REACT_APP_COMMENTS_ENABLED === "true";

interface Props {
  thumbnail: string;
  title: string;
  content: string | JSX.Element;
  date: string;
  route: string;
  markdownPath?: string;
}

export const Blog: React.FC<Props> = ({
  thumbnail,
  title,
  content,
  date,
  route,
  markdownPath,
}: Props) => {
  const [showButton, setShowButton] = useState(false);
  const markdownContent = useMarkdown(markdownPath);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => setShowButton(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
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
      <div className="flex flex-col">
        {markdownPath ? (
          <MarkdownRenderer content={markdownContent} />
        ) : typeof content === 'string' ? (
          <MarkdownRenderer content={content} />
        ) : (
          content
        )}
      </div>
      <button
        onClick={scrollToTop}
        style={{ opacity: showButton ? 1 : 0 }}
        className="fixed bottom-10 right-10 z-50 p-2 transition-opacity duration-300"
      >
        <HiArrowUp />
      </button>
      {COMMENTS_ENABLED && <CommentSection route={route} />}
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
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const turnstileContainerRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<string | null>(null);
  const tokenRef = useRef<string | null>(null);

  const getComments = useCallback(async () => {
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
  }, [route]);

  useEffect(() => {
    getComments();
  }, [getComments]);

  useEffect(() => {
    if (!TURNSTILE_SITE_KEY || !turnstileContainerRef.current) return;
    let cancelled = false;
    loadTurnstile()
      .then(() => {
        if (cancelled || !window.turnstile || !turnstileContainerRef.current)
          return;
        widgetIdRef.current = window.turnstile.render(
          turnstileContainerRef.current,
          {
            sitekey: TURNSTILE_SITE_KEY,
            callback: (token) => {
              tokenRef.current = token;
            },
            "expired-callback": () => {
              tokenRef.current = null;
            },
            "error-callback": () => {
              tokenRef.current = null;
            },
          },
        );
      })
      .catch((err) => console.error("Turnstile failed to load:", err));
    return () => {
      cancelled = true;
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, []);

  async function addComment(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const author_name = (formData.get("author_name") as string)?.trim() ?? "";
    const author_organization =
      (formData.get("author_organization") as string)?.trim() ?? "";
    const comment = (formData.get("comment") as string)?.trim() ?? "";
    const website = (formData.get("website") as string) ?? "";

    const token =
      tokenRef.current ?? window.turnstile?.getResponse(widgetIdRef.current ?? undefined) ?? "";
    if (!token) {
      setErrorMsg("Please complete the verification before submitting.");
      return;
    }

    setSubmitting(true);
    setErrorMsg(null);

    const { error } = await supabase.functions.invoke("post-comment", {
      body: {
        author_name,
        author_organization,
        comment,
        blog_route: route,
        turnstile_token: token,
        website,
      },
    });

    tokenRef.current = null;
    if (widgetIdRef.current && window.turnstile) {
      window.turnstile.reset(widgetIdRef.current);
    }

    if (error) {
      console.error("Error adding comment:", error.message);
      setErrorMsg("Could not post your comment. Please try again.");
    } else {
      form.reset();
      getComments();
    }
    setSubmitting(false);
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
          {/* Honeypot: must remain empty. Hidden from humans and AT, visible to naive bots. */}
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            style={{
              position: "absolute",
              left: "-10000px",
              width: "1px",
              height: "1px",
              opacity: 0,
            }}
          />
        </div>
        <div ref={turnstileContainerRef} className="mt-4" />
        {errorMsg && (
          <p className="mt-2 text-sm text-red-500" role="alert">
            {errorMsg}
          </p>
        )}
        <button
          type="submit"
          className="align-self-end mt-4"
          disabled={submitting}
        >
          {submitting ? "Submitting…" : "Submit"}
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
