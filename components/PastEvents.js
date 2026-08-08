// Placeholder gallery — real photos drop in later (see captions from brief).
const EVENTS = [
  {
    caption: "Photos of MSW past events to come here",
    title: "MSW Events",
    note: "Riyadh · Saudi Arabia",
  },
  {
    caption: "Photos of MSW past events to come here",
    title: "Corporate Screenings",
    note: "On-site wellness days",
  },
  {
    caption: "UAE activities pictures to populate this page (Pending Dr. Hisham's approval)",
    title: "UAE Activities",
    note: "Pending approval",
  },
];

const Camera = () => (
  <svg className="cam" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M4 8h3l1.5-2h7L17 8h3a1 1 0 011 1v9a1 1 0 01-1 1H4a1 1 0 01-1-1V9a1 1 0 011-1z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="13" r="3.4" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

export default function PastEvents() {
  return (
    <section id="events" className="section soft">
      <div className="container">
        <div className="section-head">
          <h2>
            Some of our <span className="hl">Past events</span>
          </h2>
          <p>A look at MSW &amp; partner activities across Saudi Arabia and the wider region.</p>
        </div>

        <div className="events-grid">
          {EVENTS.map((ev) => (
            <article key={ev.title} className="event-card">
              <div className="event-photo">
                <Camera />
                <span>{ev.caption}</span>
              </div>
              <div className="event-body">
                <h4>{ev.title}</h4>
                <p>{ev.note}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
