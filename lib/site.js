// ============================================================================
//  Central site data + asset helper for My Saudi Wellness (MSW)
//  Keeping copy/config here keeps the components lean and easy to edit.
// ============================================================================

// Prefix for static assets. Empty in dev, "/msw" in the GitHub Pages build.
// Plain <img src> and CSS background-image are not auto-prefixed by Next, so
// every image URL in the app is built through img() below.
const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** Build a public asset URL, e.g. img("1_sw1.jpg") -> "/msw/assets/images/1_sw1.jpg" */
export const img = (name) => `${BASE}/assets/images/${name}`;

export const SITE = {
  name: "My Saudi Wellness",
  short: "MSW",
  email: "admin@mysaudiwellness.co",
  phone: "0504156292",
  phoneHref: "+966504156292",
  address: "3610 Al Rafia, Riyadh 12751, Saudi Arabia.",
};

// ---------------------------------------------------------------------------
//  Top navigation (with dropdowns)
// ---------------------------------------------------------------------------
export const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Associates", href: "#associates" },
  {
    label: "Services",
    href: "#services",
    children: [
      { label: "Corporate Wellness", href: "#services" },
      { label: "Research Articles", href: "#services" },
    ],
  },
  {
    label: "Health Workshops",
    href: "#events",
    children: [
      { label: "Prof. Adrian Kennedy — Portfolio", href: "#events" },
      { label: "Dr. Hisham Al Omran — Portfolio", href: "#events" },
    ],
  },
  { label: "Awards", href: "#services" },
  { label: "Contact Us", href: "#contact" },
];

// ---------------------------------------------------------------------------
//  Hero carousel — 6 banners
// ---------------------------------------------------------------------------
export const SLIDES = [
  {
    title: "Welcome to My Saudi Wellness.",
    body:
      "Our objective is to improve the Health of School children, Corporate employees & the Community, by advocating and implementing Healthy lifestyles of a Balanced Diet, Moderate Exercise, Sufficient Sleep, & Avoiding Tobacco & Smoking, as a means of achieving well being.",
    image: "1_sw1.jpg",
    cta: { label: "Read More", href: "#about" },
  },
  {
    title: "Health Risk Assessment",
    body:
      "Our MSW HRA is programmed to make out a lifestyle correction program tailor made for the individual, to reduce/wipe out the risk factors & other ailments with a positive and Total Health Lifestyle Prescription.",
    image: "2_sw2.jpg",
    cta: { label: "Read More", href: "#services" },
  },
  {
    title: "School Health Risk Assessment",
    body:
      "The SHRA is programmed to make out a lifestyle correction program tailor made for the school children, to reduce/wipe out the risk factors of Fast Foods, & Excessive Screen time, & to increase Physical Activity with a positive and Total Health Lifestyle Prescription.",
    image: "3_sw3.jpg",
    cta: { label: "Read More", href: "#services" },
  },
  {
    title: "School Dental Assessment",
    body:
      "The Dental Assessment is programmed to make out a Dental correction program tailor made for the school children.",
    image: "3_screening.jpg",
    cta: { label: "Read More", href: "#services" },
  },
  {
    title: "Health Analysis",
    body:
      "The Lifestyle Assessment and Health Risk Assessment scan integrates existing ailments & co relates this with daily lifestyle habits by asking few simple lifestyle related questions. The Health scan then identifies the lifestyle risk factors that cause these maladies. It then goes one step further, by making available to the client an individual personalised lifestyle change prescription.",
    image: "2_wellness-img.jpg",
    cta: { label: "Read More", href: "#services" },
  },
  {
    title: "Biggest Weight Loser Challenge.",
    body:
      "Obesity and overweight are major global health challenges caused largely by sedentary lifestyles and overeating, leading to conditions such as diabetes, high blood pressure, heart disease, cancer, and other lifestyle disorders. To address this growing concern in Saudi Arabia, My Saudi Wellness will launch a scientifically guided weight loss challenge focused on safe and sustainable results.",
    image: "4_fitness-img.jpg",
    cta: { label: "Read More", href: "#contact" },
  },
];

// ---------------------------------------------------------------------------
//  Services overview — 6 cards
// ---------------------------------------------------------------------------
export const SERVICES = [
  {
    icon: "monitor",
    title: "Health Scan",
    body:
      "Our computerised Health scan co-relates your medical diagnostics (Blood pressure, Blood sugar, etc.) with your lifestyle causes, including diet, inactivity, & personality.",
  },
  {
    icon: "chart",
    title: "Health Analysis",
    body:
      "The major illnesses globally including cardiac aliments & cancer are caused by lifestyle factors. Our Health scan does an analysis of your risk for such major Lifestyle ailments.",
  },
  {
    icon: "globe",
    title: "Health Talks",
    body:
      "Our Medical & Health experts conduct workshops & webinars on Chronic Diseases, Stress, Quit Smoking, Weight Loss, Corporate Health & many more.",
  },
  {
    icon: "bulletin",
    title: "Health Bulletin",
    body:
      "Our weekly Newsletters and Health Tips cover Nutrition, Weight loss, Vitamins & Supplements, Home Exercises, Meditation, Quit Smoking, Sleep, & Safety Rules.",
  },
  {
    icon: "award",
    title: "Health Awards",
    body:
      "Our Business Partners have received several awards, including corporate wellness company of the year, & Top 25 most impactful Global Healthcare Leaders, etc.",
  },
  {
    icon: "research",
    title: "Research",
    body:
      "Along with our Healthcare Partners, we have completed several research projects, including the 10 year 2014-24, 100,000 employees UAE Workers Health Survey, the 10 year 2000-10 Urban India Health Survey, The School Child Health Survey & Many more.",
  },
];

// ---------------------------------------------------------------------------
//  Footer quick links (Our Services)
// ---------------------------------------------------------------------------
export const QUICK_LINKS = [
  "Health Scan",
  "Health Talk",
  "Corporate Wellness",
  "School Health",
  "Community Health Challenges",
  "Health Awards",
  "Research",
];
