import { createElement, useEffect, useRef, useState } from "react";

const variantClassMap = {
  up: "reveal-up",
  down: "reveal-down",
  left: "reveal-left",
  right: "reveal-right",
  zoom: "reveal-zoom",
};

export default function Reveal({
  as = "div",
  children,
  className = "",
  delay = 0,
  duration = 700,
  threshold = 0.12,
  rootMargin = "0px 0px -10% 0px",
  once = true,
  variant = "up",
  style = {},
  ...props
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return undefined;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [once, rootMargin, threshold]);

  return createElement(
    as,
    {
      ref,
      className: `reveal ${variantClassMap[variant] || variantClassMap.up} ${className}`.trim(),
      "data-visible": isVisible ? "true" : "false",
      style: {
        ...style,
        "--reveal-delay": `${delay}ms`,
        "--reveal-duration": `${duration}ms`,
      },
      ...props,
    },
    children
  );
}
