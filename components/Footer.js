import { SITE, QUICK_LINKS, img } from "@/lib/site";

const Pin = () => (
  <svg className="ic" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.7" />
  </svg>
);
const Phone = () => (
  <svg className="ic" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M6.5 3h3l1.5 4-2 1.5a11 11 0 005 5l1.5-2 4 1.5v3a2 2 0 01-2.2 2A16 16 0 014.5 5.2 2 2 0 016.5 3z"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinejoin="round"
    />
  </svg>
);
const Mail = () => (
  <svg className="ic" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.7" />
    <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
  </svg>
);

export default function Footer() {
  return (
    <footer id="contact" className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand + intro */}
          <div className="footer-brand">
            <img src={img("1_logo.png")} alt={`${SITE.name} logo`} />
            <p>
              Improving the health of school children, corporate employees &amp; the community
              across Saudi Arabia through balanced diet, moderate exercise, sufficient sleep and a
              tobacco-free lifestyle.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4>Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <Pin />
                <span>{SITE.address}</span>
              </li>
              <li>
                <Phone />
                <a href={`tel:${SITE.phoneHref}`}>{SITE.phone}</a>
              </li>
              <li>
                <Mail />
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4>Our Services</h4>
            <ul className="footer-links">
              {QUICK_LINKS.map((link) => (
                <li key={link}>
                  <a href="#services">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          &copy; {new Date().getFullYear()} {SITE.name}. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
