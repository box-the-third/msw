import EventGallery from "@/components/Gallery";
import { EVENTS } from "@/lib/events";

export default function PastEvents() {
  return (
    <section id="events" className="section soft">
      <div className="container">
        <div className="section-head">
          <h2>
            Some of our <span className="hl">Past events</span>
          </h2>
          <p>
            Community Wellness Events by My Saudi Wellness in association with Active Life —
            screenings, workshops and sports across Saudi Arabia &amp; the region. Click any photo
            to view the full gallery.
          </p>
        </div>

        <EventGallery events={EVENTS} preview={6} />
      </div>
    </section>
  );
}
