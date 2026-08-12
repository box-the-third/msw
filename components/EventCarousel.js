"use client";

import { useEffect, useState } from "react";
import { img } from "@/lib/site";
import { CATEGORY_LABELS } from "@/lib/events";

const PER_SLIDE = 12; // keeps every slide a tidy, uniform-height grid
const AUTOPLAY_MS = 7000;

/**
 * EventCarousel — one slide per event: the event title + a grid of its photos.
 * Slides share the tallest slide's height (flex row) so the frame never jumps.
 * Autoplays, pauses on hover; arrows + dots for manual control.
 */
export default function EventCarousel({ events }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = events.length;

  const go = (i) => setIndex(((i % n) + n) % n);

  useEffect(() => {
    if (paused || n <= 1) return;
    const t = setTimeout(() => setIndex((i) => (i + 1) % n), AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [index, paused, n]);

  return (
    <div
      className="ev-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Community wellness events"
    >
      <div className="ev-viewport">
        <div className="ev-track" style={{ transform: `translateX(-${index * 100}%)` }}>
          {events.map((ev, i) => (
            <section
              className="ev-slide"
              key={ev.slug}
              aria-hidden={i !== index}
              aria-roledescription="slide"
              aria-label={`${ev.title} (${i + 1} of ${n})`}
            >
              <div className="ev-slide-head">
                <h3>{ev.title}</h3>
                <span className={`chip chip-${ev.category}`}>{CATEGORY_LABELS[ev.category]}</span>
              </div>
              <div className="ev-grid">
                {ev.images.slice(0, PER_SLIDE).map((image) => (
                  <div className="thumb" key={image.src}>
                    <img src={img(image.src)} alt="" loading="lazy" />
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      <button className="ev-arrow prev" aria-label="Previous event" onClick={() => go(index - 1)}>
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button className="ev-arrow next" aria-label="Next event" onClick={() => go(index + 1)}>
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className="ev-dots" role="tablist" aria-label="Choose event">
        {events.map((ev, i) => (
          <button
            key={ev.slug}
            className={i === index ? "active" : ""}
            role="tab"
            aria-selected={i === index}
            aria-label={ev.title}
            onClick={() => go(i)}
          />
        ))}
      </div>
    </div>
  );
}
