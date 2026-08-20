"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type MediaRevealProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export default function MediaReveal({ children, className, style }: MediaRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn("media-reveal", inView && "is-inview", className)}
      style={style}
    >
      {children}
    </div>
  );
}
