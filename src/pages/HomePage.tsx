import { Link } from "react-router-dom";
import { HouseCanvas } from "../components/HouseCanvas";
import { CtaBand, CtaLink } from "../components/PageHero";
import { ADDRESS, BRAND, EXPERIENCE, PHONE, TEL_URL, WHATSAPP_URL } from "../constants";

export function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-orb hero-orb-1" />
          <div className="hero-orb hero-orb-2" />
          <div className="hero-orb hero-orb-3" />
        </div>
        <div className="container hero-grid">
          <div className="hero-content reveal">
            <p className="hero-tag">Architecture · Home Design · Construction</p>
            <h1>
              Crafting exceptional homes with <span className="text-gradient">timeless design</span>
            </h1>
            <p className="hero-desc">
              Website for architecture, home design and construction services — from Vastu consultation and 2D drawings to complete construction, waterproofing and terrain treatment.
            </p>
            <div className="hero-stats">
              <div className="hero-stat"><strong>8+</strong><span>Years Experience</span></div>
              <div className="hero-stat"><strong>12</strong><span>Key Modules</span></div>
              <div className="hero-stat"><strong>9+</strong><span>Areas Served</span></div>
            </div>
            <div className="hero-actions">
              <a href={TEL_URL} className="btn btn-primary">Direct Call</a>
              <a href={WHATSAPP_URL} className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">WhatsApp Chat</a>
              <Link to="/charges" className="btn btn-outline">View Visit Charges</Link>
            </div>
          </div>
          <div className="hero-visual reveal reveal-delay">
            <HouseCanvas id="hero-canvas" label="Interactive 3D house preview" />
            <p className="canvas-hint">Drag to rotate · 3D Visualization</p>
            <aside className="business-info">
              <div className="business-info-header">
                <svg className="business-info-logo" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                  <path d="M6 18L20 6L34 18V34H26V24H14V34H6V18Z" fill="currentColor" />
                  <path d="M12 8C16 4 24 4 28 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                </svg>
                <div>
                  <span className="business-info-name">{BRAND}</span>
                  <span className="business-info-exp">{EXPERIENCE} Years Experience</span>
                </div>
              </div>
              <div className="business-info-services">
                <span className="business-info-badge">Core Services</span>
                <ul>
                  <li>Complete Construction</li>
                  <li>Vastu Consultation</li>
                  <li>2D Drawing Gallery</li>
                  <li>3D Visualization</li>
                  <li>Waterproofing</li>
                  <li>Terrain Treatment</li>
                </ul>
              </div>
              <div className="business-info-contact">
                <a href={TEL_URL} className="business-info-row business-info-phone">
                  <span className="business-info-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                  <span className="business-info-text"><small>Direct Call</small><strong>{PHONE}</strong></span>
                </a>
                <a href={WHATSAPP_URL} className="business-info-row business-info-whatsapp" target="_blank" rel="noopener noreferrer">
                  <span className="business-info-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  </span>
                  <span className="business-info-text"><small>WhatsApp</small><strong>Chat / Call</strong></span>
                </a>
                <div className="business-info-row">
                  <span className="business-info-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" /></svg>
                  </span>
                  <address className="business-info-address">{ADDRESS}</address>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section home-links">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Explore</span>
            <h2>Everything in one place</h2>
            <p className="section-sub">Browse modules, services, project galleries and transparent visit charges — all designed to keep your home project clear from day one.</p>
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
