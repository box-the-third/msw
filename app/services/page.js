import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import Services from "@/components/Services";

export const metadata = {
  title: "Services | My Saudi Wellness",
  description:
    "My Saudi Wellness services — health scans, health analysis, health talks, bulletins, awards and research, plus expert-led Health Talks and Workshops.",
};

const FEATURES = [
  {
    title: "Health Talks",
    body:
      "Our Medical & Health experts deliver interactive Health Talks and webinars on Chronic Disease Management, Stress, Quit Smoking, Weight Loss, Nutrition & Corporate Health — bringing evidence-based lifestyle guidance directly to your people.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 5h16a1 1 0 011 1v10a1 1 0 01-1 1H9l-4 4v-4H4a1 1 0 01-1-1V6a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M8 10h8M8 13h5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Workshops",
    body:
      "Hands-on wellness workshops covering weight management, fitness, stress management, sleep and healthy lifestyle habits — delivered on-site for schools, corporates and communities.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="17" cy="9" r="2.3" stroke="currentColor" strokeWidth="1.7" />
        <path d="M3 19c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5M15.5 19c0-2.2.9-3.9 2.4-4.7 1.9.3 4.1 1.9 4.1 4.7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      <span id="top" />
      <Header />

      <main>
        {/* Same services grid as the home page */}
        <Services />

        {/* Highlighted features */}
        <section id="features" className="section soft">
          <div className="container">
            <div className="section-head">
              <h2>
                Some <span className="hl">Features We Provide</span>
              </h2>
              <p>Expert-led sessions that bring wellness to your schools, workplaces and community.</p>
            </div>

            <div className="feature-cards">
              {FEATURES.map((f) => (
                <article className="feature-card" key={f.title}>
                  <span className="feature-icon" aria-hidden="true">
                    {f.icon}
                  </span>
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
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
