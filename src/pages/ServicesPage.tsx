import { PageHero, CtaBand, CtaLink } from "../components/PageHero";

const SERVICES = [
  {
    icon: "🕉️",
    title: "Vastu Consultation",
    desc: "Harmonize your home design with expert Vastu principles — entrance placement, room orientation, kitchen and bedroom positioning for positive living spaces.",
    points: ["Plot & direction analysis", "Room layout recommendations", "Design corrections before build"],
  },
  {
    icon: "📐",
    title: "2D Drawing Gallery",
    desc: "Detailed floor plans, elevations and working drawings tailored to your plot size, budget and family needs — ready for approval and municipal submission.",
    points: ["Floor plans & elevations", "Room-wise dimensions", "Revision rounds included"],
  },
  {
    icon: "🏠",
    title: "3D Visualization",
    desc: "See your future home before construction with realistic interactive 3D renderings — exterior facades, interiors, materials and lighting previews.",
    points: ["Exterior & interior renders", "Material & colour options", "Interactive 3D walkthrough"],
  },
  {
    icon: "📍",
    title: "Site Visit",
    desc: "On-site assessment and consultation to understand your land, soil conditions, slope, access and project scope — the foundation of every good build.",
    points: ["Plot measurement & survey", "Soil & terrain assessment", "Scope & budget discussion"],
  },
  {
    icon: "💧",
    title: "Waterproofing",
    desc: "Protect your structure from moisture damage with professional waterproofing for roofs, bathrooms, terraces and external walls — critical for long-term durability.",
    points: ["Roof & terrace treatment", "Bathroom & basement sealing", "External wall protection"],
  },
  {
    icon: "⛰️",
    title: "Terrain Treatment",
    desc: "Land leveling, soil treatment, retaining walls and drainage planning for hillside plots — ensuring stable foundations on challenging terrain.",
    points: ["Cut & fill leveling", "Retaining wall design", "Drainage & runoff planning"],
  },
] as const;

export function ServicesPage() {
  return (
    <>
      <PageHero
        label="What We Do"
        title="Our Services"
        description="From Vastu-aligned floor plans and photorealistic 3D renders to full construction and site treatment — we handle every phase of your home project across Billawar and the wider Jammu region."
      />

      <section className="section services">
        <div className="container">
          <div className="services-grid">
            {SERVICES.map((s) => (
              <article key={s.title} className="service-card reveal">
                <div className="service-icon-wrap">
                  <span className="service-icon" aria-hidden="true">{s.icon}</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul className="service-points">
                  {s.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </article>
            ))}
            <article className="service-card service-card-wide reveal">
              <div className="service-icon-wrap">
                <span className="service-icon" aria-hidden="true">🔨</span>
              </div>
              <h3>Complete Construction Services</h3>
              <p>
                End-to-end construction — from foundation and RCC structure to plumbing, electrical, plastering, flooring and final finishing. Managed with quality checks, transparent updates and 8+ years of regional building experience.
              </p>
              <ul className="service-points service-points-inline">
                <li>Foundation &amp; structure</li>
                <li>Plumbing &amp; electrical</li>
                <li>Plastering &amp; flooring</li>
                <li>Painting &amp; finishing</li>
                <li>Site supervision</li>
                <li>Handover inspection</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section process">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Our Approach</span>
            <h2>How we deliver every service</h2>
          </div>
          <ol className="process-steps">
            <li className="process-step reveal"><span className="process-num">1</span><div><h3>Understand your needs</h3><p>We listen to your family size, budget, plot details and Vastu preferences before recommending a service package.</p></div></li>
            <li className="process-step reveal"><span className="process-num">2</span><div><h3>Site assessment</h3><p>A thorough visit to measure, inspect terrain and identify any waterproofing or soil treatment requirements.</p></div></li>
            <li className="process-step reveal"><span className="process-num">3</span><div><h3>Design &amp; documentation</h3><p>2D drawings and 3D visualizations prepared for your review. Revisions until you are fully satisfied.</p></div></li>
            <li className="process-step reveal"><span className="process-num">4</span><div><h3>Execute &amp; handover</h3><p>Construction or treatment work begins with regular updates. Final walkthrough before keys are handed over.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Common Questions</span>
            <h2>Service FAQs</h2>
          </div>
          <dl className="faq-list">
            <div className="faq-item reveal"><dt>Do you handle both design and construction?</dt><dd>Yes. We offer design-only services (2D/3D), construction-only for approved plans, or a complete design-to-build package.</dd></div>
            <div className="faq-item reveal"><dt>Can you work on hillside or sloped plots?</dt><dd>Absolutely. Terrain treatment is one of our specialties — common in Basohli, Billawar and surrounding hill areas.</dd></div>
            <div className="faq-item reveal"><dt>How long does a typical project take?</dt><dd>Timelines vary by size and scope. A 3BHK may take 8–14 months depending on design complexity and site conditions. We provide estimates after the site visit.</dd></div>
            <div className="faq-item reveal"><dt>Do you provide cost estimates?</dt><dd>Yes. After reviewing your plot and requirements, we share a detailed estimate covering design, materials and construction phases.</dd></div>
          </dl>
        </div>
      </section>

      <CtaBand title="Need a site visit or quote?" description="Check visit charges for your area or contact us directly.">
        <CtaLink to="/charges">View Visit Charges</CtaLink>
        <CtaLink to="/contact" outline>Contact Us</CtaLink>
      </CtaBand>
    </>
  );
}
