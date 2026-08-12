// Event photo galleries — generated manifest lives in events.json.
// Each event: { slug, title, category, description, cover, count, images:[{src,w,h}] }
// `src` is relative to assets/images, so pass it through img() from site.js.
import EVENTS from "./events.json";

export { EVENTS };

// Categories map to the three programs described on the About page.
export const CATEGORY_LABELS = {
  school: "School Health",
  corporate: "Corporate Health",
  community: "Community Health",
  workshop: "Workshops",
};

export const eventBySlug = (slug) => EVENTS.find((e) => e.slug === slug);
export const eventsByCategory = (cat) => EVENTS.filter((e) => e.category === cat);
