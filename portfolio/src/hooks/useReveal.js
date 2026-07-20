import { useEffect, useRef, useState } from "react";

// Reveals an element with a fade/slide-up transition the first time it
// scrolls into view. Respects prefers-reduced-motion (see global.css,
// which zeroes out the transition duration for that media query).
export function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}
