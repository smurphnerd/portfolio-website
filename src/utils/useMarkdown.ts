import { useEffect, useState } from "react";

export function useMarkdown(path?: string): string {
  const [content, setContent] = useState("");

  useEffect(() => {
    if (!path) {
      setContent("");
      return;
    }
    let cancelled = false;
    fetch(path)
      .then((response) => response.text())
      .then((text) => {
        if (!cancelled) setContent(text);
      })
      .catch((error) => console.error("Error loading markdown:", error));
    return () => {
      cancelled = true;
    };
  }, [path]);

  return content;
}
