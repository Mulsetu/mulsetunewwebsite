"use client";

import { useEffect, useState } from "react";
import { homeHero } from "@/data/home";

export default function HomeHeroTypewriter() {
  const phrases = homeHero.phrases;
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) {
      setText(phrases[0]);
      return;
    }

    const phrase = phrases[index];
    let timeout: number;

    if (!deleting && text === phrase) {
      timeout = window.setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && text === "") {
      timeout = window.setTimeout(() => {
        setDeleting(false);
        setIndex((current) => (current + 1) % phrases.length);
      }, 400);
    } else if (deleting) {
      timeout = window.setTimeout(() => setText(phrase.slice(0, text.length - 1)), 32);
    } else {
      timeout = window.setTimeout(() => setText(phrase.slice(0, text.length + 1)), 70);
    }

    return () => window.clearTimeout(timeout);
  }, [deleting, index, phrases, text]);

  return (
    <span className="home-hero__type" aria-hidden="true">
      {text}
      <span className="home-hero__caret" />
    </span>
  );
}
