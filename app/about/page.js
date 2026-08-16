import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { PhotoStrip } from "@/components/Gallery";
import EventCarousel from "@/components/EventCarousel";
import { EVENTS, eventBySlug } from "@/lib/events";
import { TEAM, img } from "@/lib/site";

export const metadata = {
  title: "About | My Saudi Wellness — Health & Wellness Events with Active Life",
  description:
    "My Saudi Wellness & ActiveLife deliver evidence-based Lifestyle Medicine across Saudi Arabia — School Health, Corporate Health and Community Health programs, screenings, workshops and sports events.",
};

const school = eventBySlug("pyp-school-workshop");
const corporate = eventBySlug("saudi-screening-talks");
const community = eventBySlug("volleyball");

// The three pillars the vision "embraces" — summarised from the program content.
const VISION_PILLARS = [
  {
    title: "School Children Health",
    body: "Health screening, counselling, classroom health education and school sports & fitness programs.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 7l9-4 9 4-9 4-9-4z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M7 9.5V15c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5V9.5M21 7v5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Corporate Employees Health & Wellness",
    body: "Annual medical & lifestyle checks, targeted health workshops, fitness and team sports for employees.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.7" />
        <path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M3 12h18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Community Health Programs",
    body: "Weight-loss, diabetes and fitness challenges built on evidence-based lifestyle modification.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="17" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.7" />
        <path d="M2.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5M15 19c0-2 .8-3.6 2.2-4.4 2 .3 4.3 1.9 4.3 4.4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      <span id="top" />
      <Header />

      <main>
        {/* Health & Wellness Events — one carousel slide per event */}
        <section id="events" className="section section-first">
          <div className="container">
            <div className="section-head">
              <h2>
                Our <span className="hl">Health and Wellness Events</span>
              </h2>
              <p>
                Screenings, workshops and sports delivered by My Saudi Wellness in association with
                Active Life. Browse the events below.
              </p>
            </div>
            <EventCarousel events={EVENTS} />
          </div>
        </section>

        {/* Vision */}
        <section id="vision" className="section soft">
          <div className="container">
            <div className="vision-head">
              <h2>
                Our <span className="hl">Vision</span>
              </h2>
              <p>
                Dr Hisham AlOmran of My Saudi Wellness &amp; Professor Adrian Kennedy of ActiveLife
                have tied up, to implement Health, Wellness &amp; Lifestyle Medicine under the banner
                of My Saudi Wellness in Saudi Arabia.
              </p>
              <p>
                My Saudi Wellness&rsquo; vision of Health &amp; Wellness is based on Evidence Based
                Lifestyle Medicine. It embraces School Children Health, Corporate Employees Health
                &amp; Wellness Programs &amp; also Community based health programs.
              </p>
            </div>

            <div className="vision-pillars">
              {VISION_PILLARS.map((p) => (
                <div className="pillar" key={p.title}>
                  <span className="pillar-ico" aria-hidden="true">
                    {p.icon}
                  </span>
                  <div>
                    <h4>{p.title}</h4>
                    <p>{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* School Health Programs */}
        <section id="school" className="section">
          <div className="container split">
            <div className="split-text">
              <p className="eyebrow">School Health</p>
              <h2>School Health Programs</h2>
              <p>
                Children are the future of the nation. Today&rsquo;s Children are faced with several
                health challenges including an unhealthy diet based on fast foods, and excess screen
                time leading to a sedentary life of insufficient physical activity. This has resulted
                in a generation of Children who are Obese, Physically unfit, Highly Stressed, &amp;
                exposed to all forms of inappropriate Health Behaviors.
              </p>
              <p>
                My Saudi Wellness&rsquo; School Health Programs, done in association with Active Life,
                include Health Screening, Health Counselling, Classroom Health Education Sessions,
                &amp; School Sports &amp; Fitness Programs.
              </p>
            </div>
            <div className="split-media">
              <PhotoStrip event={school} max={6} />
            </div>
          </div>
        </section>

        {/* Corporate Health Programs */}
        <section id="corporate" className="section soft">
          <div className="container split reverse">
            <div className="split-text">
              <p className="eyebrow">Corporate Health</p>
              <h2>Corporate Health Programs</h2>
              <p>
                Both My Saudi Wellness &amp; Active Life have together managed Employee Health in over
                100 corporate Organizations. Their recent 10 year retrospective study of over 100,000
                Industrial workers in the UAE GCC region has proved that comprehensive Health &amp;
                Wellness Programs — comprising Annual Medical, Health &amp; Lifestyle Checks for all
                employees, followed with targeted Health Education Workshops in Chronic Disease
                Management, Weight Loss Management, Fitness Programs, Stress Management &amp; Quit
                Smoking, concluding with Physical Activity &amp; Team Sports — have not only improved
                Employee Health, but also improved Employee Productivity.
              </p>
            </div>
            <div className="split-media">
              <PhotoStrip event={corporate} max={6} />
            </div>
          </div>
        </section>

        {/* Community Health Programs */}
        <section id="community" className="section">
          <div className="container split">
            <div className="split-text">
              <p className="eyebrow">Community Health</p>
              <h2>Community Health Programs</h2>
              <p>
                Based on the success of Active Life&rsquo;s Community based Weight Loss Challenge,
                Diabetes Challenge &amp; Fitness Challenge, My Saudi Wellness proposes to introduce
                these popular, life-changing programs into Saudi Arabia. All three programs are based
                on the principle of Lifestyle Modification &amp; utilise Social Media to spread the
                message of a frugal balanced diet, moderate daily exercise, sufficient sleep, rest
                &amp; relaxation &amp; the avoidance of Smoking &amp; tobacco, for achieving good
                health.
              </p>
              <p>
                The 3 month weight loss program has consistently recorded an average weight loss of
                10 kgs per participant, &amp; the 3 month Diabetes challenge has recorded an HbA1c
                drop from 8.5 to 5.5.
              </p>
            </div>
            <div className="split-media">
              <PhotoStrip event={community} max={6} />
            </div>
          </div>
        </section>

        {/* Team */}
        <section id="team" className="section soft">
          <div className="container">
            <div className="section-head">
              <h2>
                Our <span className="hl">Team</span>
              </h2>
              <p>
                Over 100 years cumulative national &amp; international experience in successfully
                implementing corporate health &amp; wellness.
              </p>
            </div>
            <div className="team-cards">
              {TEAM.map((m) => (
                <a
                  key={m.name}
                  className="team-card"
                  href={m.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {m.photo ? (
                    <span className="team-avatar team-avatar-photo">
                      <img src={img(m.photo)} alt={m.name} loading="lazy" />
                    </span>
                  ) : (
                    <span className="team-avatar" aria-hidden="true">
                      {m.initials}
                    </span>
                  )}
                  <h3>{m.name}</h3>
                  <p className="team-role">{m.role}</p>
                  <span className="team-link">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C20.3 8.65 21 10.9 21 14v7h-4v-6.2c0-1.48-.03-3.4-2.07-3.4-2.07 0-2.39 1.62-2.39 3.29V21H9z" />
                    </svg>
                    View LinkedIn Profile
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Why us */}
        <section id="why" className="section">
          <div className="container narrow">
            <div className="section-head">
              <h2>
                Why focus on <span className="hl">Corporate Wellness</span>
              </h2>
            </div>
            <p>
              Health is a state of complete physical, mental and social wellbeing and not merely the
              absence of disease or infirmity. Inactive lifestyle habits are the leading cause of
              medical problems today, which is putting a huge impact on corporate profits by way of
              illness, absenteeism, and lower efficiency at work.
            </p>
            <figure className="wellness-path">
              <img src={img("wellnesspath.png")} alt="Our Wellness Pathway: Health Screening to Lifestyle Programs to Healthier People and a Healthier Company." />
            </figure>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
