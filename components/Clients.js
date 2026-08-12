import { img } from "@/lib/site";

// Client / partner logos (files live in public/assets/images).
const CLIENTS = [
  { name: "RCHP", file: "1_rchp-logo.jpg" },
  { name: "Peabodies", file: "2_peabodieslogo.jpg" },
  { name: "CS", file: "3_CS_Wort-Bildmarke.jpg" },
  { name: "DisciplineX Games", file: "5_DisciplineXgames-logo.jpg" },
  { name: "Hyjiya", file: "7_Hyjiya-logo-25.2.14.jpg" },
  { name: "AeroFit", file: "9_AeroFit_logo600.jpg" },
  { name: "European Lifestyle", file: "10_european-lifestyle-logo.jpg" },
];

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

        <div className="clients-grid">
          {CLIENTS.map((c) => (
            <div className="client-logo" key={c.file}>
              <img src={img(c.file)} alt={`${c.name} logo`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
