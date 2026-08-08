// 6 placeholder logo slots — swap for real client logos when supplied.
const SLOTS = Array.from({ length: 6 });

export default function Clients() {
  return (
    <section id="clients" className="section">
      <div className="container">
        <div className="section-head">
          <h2>
            Our <span className="hl">Clients</span>
          </h2>
          <p>Trusted by leading organisations across the region.</p>
        </div>

        <div className="clients-track">
          <div className="clients-row">
            {SLOTS.map((_, i) => (
              <div className="client-box" key={i}>
                MSW Client Logos to come here
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
