import { useEffect, useState } from "react";

export const DESKTOP_BREAKPOINT = 1200;

export function useIsDesktop(breakpoint: number = DESKTOP_BREAKPOINT): boolean {
  const query = `(min-width: ${breakpoint + 1}px)`;
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== "undefined" && window.matchMedia(query).matches,
  );

  useEffect(() => {
    const mq = window.matchMedia(query);
    const handler = (event: MediaQueryListEvent) => setIsDesktop(event.matches);
    setIsDesktop(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [query]);

  return isDesktop;
}
