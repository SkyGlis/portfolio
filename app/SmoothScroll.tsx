"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

let lenis: Lenis | undefined;

// Same feel as the previous portfolio (Lenis defaults). Skipped when the visitor asks for reduced motion.
export default function SmoothScroll() {
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    lenis = new Lenis({ autoRaf: true, anchors: { offset: -16 } });
    return () => {
      lenis?.destroy();
      lenis = undefined;
    };
  }, []);
  return null;
}

export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  if (lenis) lenis.scrollTo(el, { offset: -16 });
  else el.scrollIntoView();
}
