"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { SLIDES, img } from "@/lib/site";

const AUTOPLAY_MS = 6500;

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const timer = useRef(null);

  const go = useCallback((n) => setIndex((n + SLIDES.length) % SLIDES.length), []);
  const next = useCallback(() => go(index + 1), [go, index]);
  const prev = useCallback(() => go(index - 1), [go, index]);

  // Autoplay, paused whenever the tab is hidden
  useEffect(() => {
    if (document.hidden) return;
    timer.current = setTimeout(() => setIndex((i) => (i + 1) % SLIDES.length), AUTOPLAY_MS);
    return () => clearTimeout(timer.current);
  }, [index]);

  return (
    <section className="hero" aria-roledescription="carousel" aria-label="Highlights">
      <div className="hero-track">
        {SLIDES.map((s, i) => (
          <div
            key={s.title}
            className={`hero-slide ${i === index ? "active" : ""}`}
            style={{ backgroundImage: `url(${img(s.image)})` }}
            aria-hidden={i !== index}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${SLIDES.length}`}
          >
            <div className="container">
              <div className="hero-box">
                <h1>{s.title}</h1>
                <p>{s.body}</p>
                <a className="btn btn-solid" href={s.cta.href}>
                  {s.cta.label}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="hero-arrow prev" aria-label="Previous slide" onClick={prev}>
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button className="hero-arrow next" aria-label="Next slide" onClick={next}>
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className="hero-dots" role="tablist" aria-label="Choose slide">
        {SLIDES.map((s, i) => (
          <button
            key={s.title}
            className={i === index ? "active" : ""}
            aria-label={`Go to slide ${i + 1}`}
            aria-selected={i === index}
            role="tab"
            onClick={() => go(i)}
          />
        ))}
      </div>
    </section>
  );
}
