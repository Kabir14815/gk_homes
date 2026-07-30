import { PageHero, CtaBand, CtaLink } from "../components/PageHero";
import { PHONE, TEL_URL, WHATSAPP_VISIT_URL } from "../constants";

export function ChargesPage() {
  return (
    <>
      <PageHero
        label="Pricing"
        title="Site Visit Charges"
        description="Transparent pricing for every location we serve. Charges cover travel, on-site assessment and an initial consultation — contact us to confirm the exact amount before scheduling."
      />

      <section className="section charges">
        <div className="container">
          <div className="charges-grid">
            <article className="charge-card reveal">
              <div className="charge-badge">Local Area</div>
              <p className="charge-price">₹1,000 – ₹2,000</p>
              <p className="charge-desc">For nearby towns within easy reach of our Billawar office.</p>
              <ul className="charge-locations">
                <li>Bani</li>
                <li>Basohli</li>
                <li>Billawar</li>
                <li>Guru / Gujroo</li>
                <li>Nagrota</li>
                <li>Manwal</li>
              </ul>
            </article>
            <article className="charge-card charge-card-outstation reveal">
              <div className="charge-badge">Outstation</div>
              <p className="charge-price">₹2,000 – ₹3,000</p>
              <p className="charge-desc">For cities farther from Billawar requiring additional travel time.</p>
              <ul className="charge-locations">
                <li>Kathua</li>
                <li>Jammu</li>
                <li>Udhampur</li>
              </ul>
            </article>
          </div>
          <blockquote className="charge-note reveal">
            <p>
              Other locations may vary based on distance. Visit charges may also depend on project scope, plot accessibility and whether multiple visits are needed — please contact us to confirm before scheduling.
            </p>
          </blockquote>
        </div>
      </section>

      <section className="section features">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">What&apos;s Included</span>
            <h2>Every site visit covers</h2>
          </div>
          <ul className="features-list">
            <li className="feature-item reveal"><span className="feature-check" aria-hidden="true">✓</span><div><strong>Plot measurement</strong><p>On-site dimensions, boundaries and access points recorded for accurate drawings.</p></div></li>
            <li className="feature-item reveal"><span className="feature-check" aria-hidden="true">✓</span><div><strong>Terrain assessment</strong><p>Slope, soil type, drainage and retaining wall needs evaluated.</p></div></li>
            <li className="feature-item reveal"><span className="feature-check" aria-hidden="true">✓</span><div><strong>Design consultation</strong><p>Discuss layout, Vastu preferences, room count and budget expectations.</p></div></li>
            <li className="feature-item reveal"><span className="feature-check" aria-hidden="true">✓</span><div><strong>Preliminary advice</strong><p>Recommendations on construction approach, waterproofing and timeline estimates.</p></div></li>
          </ul>
        </div>
      </section>

      <section className="section process">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Book a Visit</span>
            <h2>How to schedule</h2>
          </div>
          <ol className="process-steps">
            <li className="process-step reveal"><span className="process-num">1</span><div><h3>Call or WhatsApp us</h3><p>Reach us at {PHONE}. Share your name, plot location and a brief description of your project.</p></div></li>
            <li className="process-step reveal"><span className="process-num">2</span><div><h3>Confirm charges</h3><p>We confirm the visit charge based on your location and agree on a date and time.</p></div></li>
            <li className="process-step reveal"><span className="process-num">3</span><div><h3>Site visit &amp; report</h3><p>Our team visits your plot, takes measurements and discusses next steps for design or construction.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Pricing FAQ</span>
            <h2>Common questions</h2>
          </div>
          <dl className="faq-list">
            <div className="faq-item reveal"><dt>Is the visit charge adjusted if I proceed with construction?</dt><dd>In many cases, the site visit fee is adjusted against your project contract. Ask us when confirming your visit.</dd></div>
            <div className="faq-item reveal"><dt>What if my location is not listed?</dt><dd>We serve other areas based on distance. Call us with your exact location and we&apos;ll quote a fair visit charge.</dd></div>
            <div className="faq-item reveal"><dt>Do you charge separately for 2D or 3D design?</dt><dd>Yes. Site visit charges cover the on-site assessment only. Design and construction are quoted separately after the visit.</dd></div>
            <div className="faq-item reveal"><dt>Can I get a visit on weekends?</dt><dd>Yes, subject to availability. WhatsApp us your preferred date and we&apos;ll confirm.</dd></div>
          </dl>
        </div>
      </section>

      <CtaBand title="Book your site visit today" description="Call or WhatsApp to confirm charges and schedule a visit to your plot.">
        <CtaLink to={TEL_URL}>Call {PHONE}</CtaLink>
        <a href={WHATSAPP_VISIT_URL} className="btn btn-whatsapp btn-lg" target="_blank" rel="noopener noreferrer">
          WhatsApp Us
        </a>
      </CtaBand>
    </>
  );
}
