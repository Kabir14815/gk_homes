import { Link } from "react-router-dom";
import { CtaBand, CtaLink } from "../components/PageHero";
import { ADDRESS, BRAND, EXPERIENCE, PHONE, TEL_URL, WHATSAPP_URL } from "../constants";

export function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-media" aria-hidden="true">
          <img
            src="/assets/projects/villa-sunset.png"
            alt=""
            className="hero-media-img"
          />
          <div className="hero-media-shade" />
        </div>

        <div className="container hero-grid">
          <div className="hero-content reveal">
            <p className="hero-brand">{BRAND}</p>
            <h1>
              Homes designed with <span className="text-gradient">clarity and craft</span>
            </h1>
            <p className="hero-desc">
              Architecture, Vastu-aligned planning, 3D visualization and complete construction across Billawar and the Jammu region.
            </p>
            <div className="hero-actions">
              <a href={TEL_URL} className="btn btn-primary">Call {PHONE}</a>
              <a href={WHATSAPP_URL} className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">WhatsApp</a>
              <Link to="/projects" className="btn btn-outline hero-btn-ghost">View Projects</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-bar">
        <div className="container trust-bar-inner reveal">
          <a href={TEL_URL} className="trust-item">
            <span className="trust-label">Call</span>
            <strong>{PHONE}</strong>
          </a>
          <a href={WHATSAPP_URL} className="trust-item" target="_blank" rel="noopener noreferrer">
            <span className="trust-label">WhatsApp</span>
            <strong>Chat with us</strong>
          </a>
          <div className="trust-item">
            <span className="trust-label">Based in</span>
            <strong>Dewal, Billawar</strong>
          </div>
          <div className="trust-item">
            <span className="trust-label">Experience</span>
            <strong>{EXPERIENCE} years</strong>
          </div>
        </div>
      </section>

      <section className="section home-links">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Explore</span>
            <h2>Everything in one place</h2>
            <p className="section-sub">Modules, services, project galleries and transparent visit charges.</p>
          </div>
          <div className="home-links-grid">
            <Link to="/modules" className="home-link-card reveal"><span>01</span><h3>Key Modules</h3><p>12 platform features for design, build and client access</p></Link>
            <Link to="/services" className="home-link-card reveal"><span>02</span><h3>Our Services</h3><p>Vastu, drawings, 3D, construction and site treatment</p></Link>
            <Link to="/projects" className="home-link-card reveal"><span>03</span><h3>Projects</h3><p>2D plans, 3D renders, live sites and completed homes</p></Link>
            <Link to="/charges" className="home-link-card reveal"><span>04</span><h3>Visit Charges</h3><p>Local and outstation rates across 9+ areas</p></Link>
          </div>
        </div>
      </section>

      <section className="section about">
        <div className="container content-split reveal">
          <div className="content-split-text">
            <span className="section-label">About Us</span>
            <h2>Trusted home design &amp; construction in Billawar</h2>
            <p>
              {BRAND} is a Billawar-based architecture and construction firm with <strong>8+ years of hands-on experience</strong> building homes across the Jammu region. We combine practical site knowledge with modern design tools — from Vastu-aligned floor plans and 3D visualizations to complete construction, waterproofing and terrain treatment.
            </p>
            <p>
              Whether you are planning a new villa on hillside land in Basohli, renovating in Nagrota, or need accurate drawings before breaking ground in Kathua, we guide you through every stage with transparent pricing and direct communication.
            </p>
            <p className="about-address">{ADDRESS}</p>
          </div>
          <div className="info-cards">
            <div className="info-card"><strong>8+</strong><span>Years of experience</span></div>
            <div className="info-card"><strong>100+</strong><span>Projects delivered</span></div>
            <div className="info-card"><strong>9+</strong><span>Towns &amp; cities served</span></div>
            <div className="info-card"><strong>12</strong><span>Platform modules</span></div>
          </div>
        </div>
      </section>

      <section className="section features">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Why Choose Us</span>
            <h2>Built on quality, clarity and local expertise</h2>
          </div>
          <ul className="features-list">
            <li className="feature-item reveal"><span className="feature-check" aria-hidden="true">✓</span><div><strong>Vastu-aware design</strong><p>Layouts planned with Vastu principles so your home feels balanced and purposeful.</p></div></li>
            <li className="feature-item reveal"><span className="feature-check" aria-hidden="true">✓</span><div><strong>See before you build</strong><p>2D drawings and interactive 3D previews help you approve designs with confidence.</p></div></li>
            <li className="feature-item reveal"><span className="feature-check" aria-hidden="true">✓</span><div><strong>End-to-end construction</strong><p>From foundation and structure to finishing — one team managing the full build.</p></div></li>
            <li className="feature-item reveal"><span className="feature-check" aria-hidden="true">✓</span><div><strong>Site-specific solutions</strong><p>Terrain treatment and waterproofing tailored to hillside and monsoon conditions.</p></div></li>
            <li className="feature-item reveal"><span className="feature-check" aria-hidden="true">✓</span><div><strong>Transparent visit charges</strong><p>Clear local and outstation rates — no surprises when we come to your plot.</p></div></li>
            <li className="feature-item reveal"><span className="feature-check" aria-hidden="true">✓</span><div><strong>Always reachable</strong><p>Direct call, WhatsApp chat and auto-reply so you are never left waiting.</p></div></li>
          </ul>
        </div>
      </section>

      <section className="section process">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">How It Works</span>
            <h2>Your project, step by step</h2>
            <p className="section-sub">A simple, proven workflow from first conversation to handover keys.</p>
          </div>
          <ol className="process-steps">
            <li className="process-step reveal"><span className="process-num">1</span><div><h3>Consult &amp; site visit</h3><p>Share your plot details, budget and vision. We visit the site, assess terrain and discuss Vastu preferences.</p></div></li>
            <li className="process-step reveal"><span className="process-num">2</span><div><h3>Design &amp; approval</h3><p>Receive 2D floor plans and 3D visualizations. Review, revise and approve before any construction begins.</p></div></li>
            <li className="process-step reveal"><span className="process-num">3</span><div><h3>Build &amp; track progress</h3><p>Construction begins with terrain treatment, structure work and waterproofing. Follow live updates on ongoing projects.</p></div></li>
            <li className="process-step reveal"><span className="process-num">4</span><div><h3>Handover &amp; support</h3><p>Final inspection, finishing touches and project completion. Your home joins our completed portfolio gallery.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="section areas">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Service Areas</span>
            <h2>Serving Billawar and beyond</h2>
            <p className="section-sub">We regularly visit and build across these locations. Other areas may be covered based on distance.</p>
          </div>
          <div className="area-tags reveal">
            {["Billawar", "Basohli", "Bani", "Guru / Gujroo", "Nagrota", "Manwal", "Dewal", "Kathua", "Jammu", "Udhampur"].map((area) => (
              <span key={area} className="area-tag">{area}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section testimonials">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Client Feedback</span>
            <h2>What homeowners say</h2>
          </div>
          <div className="testimonials-grid">
            <blockquote className="testimonial-card reveal"><p>&quot;The 3D visualization helped us finalise the layout before spending on construction. Very professional team.&quot;</p><footer>— Homeowner, Billawar</footer></blockquote>
            <blockquote className="testimonial-card reveal"><p>&quot;Site visit was thorough — they understood our hillside plot and suggested terrain treatment we hadn&apos;t considered.&quot;</p><footer>— Client, Basohli</footer></blockquote>
            <blockquote className="testimonial-card reveal"><p>&quot;Clear communication on WhatsApp and regular updates during construction. Would recommend {BRAND}.&quot;</p><footer>— Family, Nagrota</footer></blockquote>
          </div>
        </div>
      </section>

      <CtaBand title="Ready to plan your dream home?" description="Call us, send a WhatsApp message, or check visit charges for your area.">
        <CtaLink to={TEL_URL}>Call {PHONE}</CtaLink>
        <CtaLink to="/contact" outline>Contact Us</CtaLink>
      </CtaBand>
    </>
  );
}
