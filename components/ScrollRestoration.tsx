"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * Takes over scroll restoration from the browser so we fully control
 * where the page lands on every navigation.
 *
 * Rules:
 * - Always scroll to top on any route change.
 * - Exception: switching between esports tabs (/work/codm-esports/*) keeps
 *   the current scroll position because those pages share a persistent layout.
 */
export default function ScrollRestoration() {
  const pathname = usePathname();
  const prevPathname = useRef<string | null>(null);

  // On mount: disable the browser's built-in scroll restoration so it can't
  // override our scrollTo calls on back/forward navigations.
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    const prev = prevPathname.current;
    prevPathname.current = pathname;

    // Skip scroll-to-top when switching between esports tabs (shared layout)
    if (prev && prev.startsWith("/work/codm-esports") && pathname.startsWith("/work/codm-esports")) {
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return null;
}
