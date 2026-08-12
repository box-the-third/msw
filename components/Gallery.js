import { img } from "@/lib/site";
import { CATEGORY_LABELS } from "@/lib/events";

/* A single non-interactive photo tile. The source images are small (~170px),
   so we show them at a natural size and let them grow a little on hover. */
function Thumb({ image }) {
  return (
    <div className="thumb">
      <img src={img(image.src)} alt="" loading="lazy" />
    </div>
  );
}

/* --------------------------------------------------------------------------
   EventGallery — renders a set of events as titled thumbnail grids.
   Props:
     events   : event objects to show
     preview  : max thumbnails shown per event (omit to show all)
     showMeta : show the per-event title / category header
-------------------------------------------------------------------------- */
export default function EventGallery({ events, preview, showMeta = true }) {
  return (
    <div className="event-groups">
      {events.map((ev) => {
        const shown = preview ? ev.images.slice(0, preview) : ev.images;
        return (
          <div className="event-group" key={ev.slug} id={ev.slug}>
            {showMeta && (
              <div className="event-group-head">
                <div>
                  <h3>{ev.title}</h3>
                  <p>{ev.description}</p>
                </div>
                <span className={`chip chip-${ev.category}`}>{CATEGORY_LABELS[ev.category]}</span>
              </div>
            )}
            <div className="thumb-grid">
              {shown.map((image) => (
                <Thumb key={image.src} image={image} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* --------------------------------------------------------------------------
   PhotoStrip — compact single-event thumbnail cluster for inline use
   (e.g. beside a program description).
-------------------------------------------------------------------------- */
export function PhotoStrip({ event, max = 6 }) {
  if (!event) return null;
  const shown = event.images.slice(0, max);
  return (
    <div className="thumb-grid compact">
      {shown.map((image) => (
        <Thumb key={image.src} image={image} />
      ))}
    </div>
  );
}
