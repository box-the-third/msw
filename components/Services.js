import { SERVICES } from "@/lib/site";

// Inline icon set (stroke = currentColor) keyed by the service's `icon` field.
const ICONS = {
  monitor: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2.5" y="4" width="19" height="13" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M9 21h6M12 17v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  chart: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 20V10M9.5 20V4M15 20v-7M20.5 20V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  bulletin: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3.5" y="4" width="17" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M7 9h10M7 13h10M7 17h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  award: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="9" r="5.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8.5 13.5L7 22l5-2.6L17 22l-1.5-8.5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  ),
  research: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M16 16l4.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
};

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-head">
          <h2>
            Check out <span className="hl">our services</span>
          </h2>
          <p>
            A complete lifestyle-medicine toolkit — from computerised health scans to workshops,
            awards and research.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((svc) => (
            <article key={svc.title} className="service-card">
              <span className="service-icon">{ICONS[svc.icon]}</span>
              <h3>{svc.title}</h3>
              <p>{svc.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
