import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { img } from "@/lib/site";

export const metadata = {
  title: "Our Associates | My Saudi Wellness",
  description:
    "My Saudi Wellness associates with globally recognized and local leaders — ELMO, Ahyush Inc USA, Arabian Wellness, RAK Hospital challenges and ActiveLife India.",
};

// Each associate: logo + name + optional tagline + description + one or more links.
const ASSOCIATES = [
  {
    name: "European Lifestyle Medicine Organisation (ELMO)",
    logo: "10_european-lifestyle-logo.jpg",
    body: (
      <>
        Dr Hisham Alomran is the ELMO Ambassador for Saudi Arabia. Professor Adrian Kennedy is the
        ELMO Ambassador for India &amp; UAE.
      </>
    ),
    links: [{ label: "eulm.org", href: "https://www.eulm.org/" }],
  },
  {
    name: "AHYUSH Inc USA",
    logo: "ahyushlogo.png",
    tagline: "Creating a Healthier & Happier World",
    body: <>Ahyush Inc USA is our Associate for our virtual &amp; online products.</>,
    links: [{ label: "ahyush.com", href: "https://ahyush.com/home" }],
  },
  {
    name: "Arabian Wellness (UAE)",
    logo: "arabianwellness.png",
    tagline: "Arabian Healthcare Group",
    body: (
      <>
        We have worked with Arabian Wellness UAE in the past. Their vast experience in Corporate
        Wellness, &amp; in Community events &amp; Challenges is irreplaceable.
      </>
    ),
    links: [{ label: "arabianwellness.com", href: "https://arabianwellness.com/" }],
  },
  {
    name: "RAK Weightloss & Diabetes Challenges",
    logo: "rak-logo.png",
    body: (
      <>
        Community lifestyle challenges run with RAK Hospital — the RAK Weightloss Challenge and the
        RAK Diabetes Challenge.
      </>
    ),
    links: [
      { label: "RAK Weightloss Challenge", href: "https://rwlc.rakhospital.com/" },
      { label: "RAK Diabetes Challenge", href: "https://rdc.rakhospital.com/" },
    ],
  },
  {
    name: "ActiveLife (India)",
    logo: "activelifelogo.png",
    body: (
      <>
        Active Life represents 50 years of Professor Kennedy&rsquo;s work &amp; experience in the
        Tatas, Apollo Hospitals &amp; RAK Hospital. Only recently, in August 2025, Active Life
        conducted India&rsquo;s Biggest Weight Loser challenge with over 200,000 social media hits,
        &amp; will shortly be embarking on The India Corporate Wellness Awards.
      </>
    ),
    links: [
      { label: "activelifehra.com", href: "https://www.activelifehra.com" },
      { label: "indiaweightlosschallenge.in", href: "https://indiaweightlosschallenge.in/" },
    ],
  },
];

function LinkArrow() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 17L17 7M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function AssociatesPage() {
  return (
    <>
      <span id="top" />
      <Header />

      <main>
        <section id="associates" className="section">
          <div className="container">
            <div className="section-head">
              <h2>
                Our <span className="hl">Associates</span>
              </h2>
              <p>
                The organizations we associate with are globally recognized &amp; local leaders in
                their fields of endeavour. This gives us a strong scientific base &amp; vast
                operational experience.
              </p>
            </div>

            <div className="associates-list">
              {ASSOCIATES.map((a) => (
                <article className="associate" key={a.name}>
                  <div className="associate-logo">
                    <img src={img(a.logo)} alt={`${a.name} logo`} loading="lazy" />
                  </div>
                  <div className="associate-body">
                    <h3>{a.name}</h3>
                    {a.tagline && <p className="associate-tag">{a.tagline}</p>}
                    <p>{a.body}</p>
                    <div className="associate-links">
                      {a.links.map((l) => (
                        <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
                          {l.label}
                          <LinkArrow />
                        </a>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
