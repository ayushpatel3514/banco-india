// src/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls window to the very top on every route change.
 * Works for ALL navigation (navbar, links, programmatic navigate, etc.).
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // main browser scroll
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }

    // extra safety – some browsers use these
    if (document.documentElement) {
      document.documentElement.scrollTop = 0;
    }
    if (document.body) {
      document.body.scrollTop = 0;
    }

    // if you ever make .page-shell scrollable, reset that too
    const shell = document.querySelector(".page-shell");
    if (shell) {
      if (typeof shell.scrollTo === "function") {
        shell.scrollTo(0, 0);
      } else {
        shell.scrollTop = 0;
      }
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
