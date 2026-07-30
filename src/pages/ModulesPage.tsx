import { PageHero, CtaBand, CtaLink } from "../components/PageHero";
import { PHONE, WHATSAPP_GREETING } from "../constants";

const MODULES = [
  { num: "01", title: "Login & Signup", desc: "Secure client portal access to your personal project dashboard. View drawings, track progress and manage documents in one place." },
  { num: "02", title: "Vastu Consultation", desc: "Expert Vastu guidance integrated into your home design — room placement, entrance direction and layout harmony built in from the start." },
  { num: "03", title: "2D Drawing Gallery", desc: "Browse, review and approve architectural floor plans online. Compare versions and share feedback before construction begins." },
  { num: "04", title: "3D Visualization Projects", desc: "Interactive 3D previews let you walk through exteriors and interiors — see materials, lighting and proportions before a single brick is laid." },
  { num: "05", title: "Live Projects", desc: "Real-time construction updates with milestone photos, stage tracking and progress notifications so you always know what's happening on site." },
  { num: "06", title: "Completed Projects", desc: "Portfolio gallery of finished homes across Billawar, Basohli, Kathua and more — browse for inspiration and reference." },
  { num: "07", title: "Complete Construction Services", desc: "End-to-end construction from foundation to finishing — structure, plumbing, electrical, plastering and final handover under one team." },
  { num: "08", title: "Terrain Treatment", desc: "Site preparation for hillside and uneven plots — leveling, retaining, soil compaction and drainage planning for stable foundations." },
  { num: "09", title: "Waterproofing", desc: "Professional waterproofing for roofs, bathrooms, basements and external walls — essential protection for Jammu's monsoon climate." },
  { num: "10", title: "WhatsApp Integration", desc: `Instant messaging with auto-reply: "${WHATSAPP_GREETING}" Never miss an inquiry.`, highlight: true },
  { num: "11", title: "Direct Call Button", desc: `One-tap calling from any page — reach us instantly at ${PHONE} for urgent site visits or design discussions.` },
  { num: "12", title: "WhatsApp Call / Chat", desc: "Redirect to WhatsApp for text chat or voice calls. Share plot photos, location pins and documents directly with our team.", highlight: true },
] as const;

export function ModulesPage() {
  return (
    <>
      <PageHero
        label="Platform"
        title="Key Modules"
        description="Twelve integrated features power the GK Home Designer experience — giving clients, architects and site teams one connected workflow from first sketch to final handover."
      />

      <section className="section modules">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">All Modules</span>
            <h2>Everything your project needs</h2>
            <p className="section-sub">Each module is designed to save time, reduce confusion and keep you informed at every stage.</p>
          </div>
          <div className="modules-grid">
            {MODULES.map((m) => (
              <article
                key={m.num}
                className={`module-card${"highlight" in m && m.highlight ? " module-card-highlight" : ""} reveal`}
              >
                <span className="module-num">{m.num}</span>
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section features">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Platform Benefits</span>
            <h2>Why these modules matter</h2>
          </div>
          <ul className="features-list">
            <li className="feature-item reveal"><span className="feature-check" aria-hidden="true">✓</span><div><strong>One dashboard for everything</strong><p>Drawings, 3D models, live updates and completed galleries — all accessible after login.</p></div></li>
            <li className="feature-item reveal"><span className="feature-check" aria-hidden="true">✓</span><div><strong>Faster decisions</strong><p>Approve designs digitally instead of waiting for printed copies or in-person meetings.</p></div></li>
            <li className="feature-item reveal"><span className="feature-check" aria-hidden="true">✓</span><div><strong>Built for local conditions</strong><p>Terrain and waterproofing modules address real challenges in hillside Jammu-region builds.</p></div></li>
            <li className="feature-item reveal"><span className="feature-check" aria-hidden="true">✓</span><div><strong>Always connected</strong><p>Call, chat or WhatsApp — three ways to reach us from every page on the site.</p></div></li>
          </ul>
        </div>
      </section>

      <CtaBand title="Want access to the client portal?" description="Sign up or log in to track your project, or contact us to get started.">
        <CtaLink to="/login">Login / Sign Up</CtaLink>
        <CtaLink to="/contact" outline>Contact Us</CtaLink>
      </CtaBand>
    </>
  );
}
