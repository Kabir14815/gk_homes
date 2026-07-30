import { Link } from "react-router-dom";
import {
  ADDRESS,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  PHONE,
  TEL_URL,
  WHATSAPP_GREETING,
  WHATSAPP_URL,
} from "../constants";

export function ContactPage() {
  return (
    <>
      <section className="section contact contact-page">
        <div className="contact-bg" aria-hidden="true" />
        <div className="container contact-grid reveal">
          <div className="contact-info">
            <span className="section-label">Get in Touch</span>
            <h1>Ready to start your project?</h1>
            <p>
              Reach out today to schedule a site visit or discuss your home design needs. With 8+ years of experience, we serve homeowners across Billawar, Basohli, Kathua, Jammu and surrounding areas.
            </p>
            <ul className="contact-details">
              <li>
                <span className="contact-label">Phone</span>
                <a href={TEL_URL}>{PHONE}</a>
              </li>
              <li>
                <span className="contact-label">WhatsApp</span>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Chat or Call</a>
              </li>
              <li>
                <span className="contact-label">Instagram</span>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">@{INSTAGRAM_HANDLE}</a>
              </li>
              <li>
                <span className="contact-label">Address</span>
                <address>{ADDRESS}</address>
              </li>
              <li>
                <span className="contact-label">Working Hours</span>
                <span className="contact-hours">Mon – Sat: 9:00 AM – 7:00 PM<br />Sunday: By appointment</span>
              </li>
            </ul>
            <div className="whatsapp-preview">
              <p className="whatsapp-preview-label">WhatsApp Auto-Reply</p>
              <p className="whatsapp-preview-msg">&quot;{WHATSAPP_GREETING}&quot;</p>
            </div>
          </div>
          <div className="contact-cta">
            <a href={TEL_URL} className="btn btn-primary btn-lg">Direct Call</a>
            <a href={WHATSAPP_URL} className="btn btn-whatsapp btn-lg" target="_blank" rel="noopener noreferrer">WhatsApp Chat</a>
            <a href={INSTAGRAM_URL} className="btn btn-instagram btn-lg" target="_blank" rel="noopener noreferrer">Follow on Instagram</a>
            <Link to="/charges" className="btn btn-outline btn-lg">Check Visit Charges</Link>
            <div className="contact-tip">
              <strong>Tip:</strong> When messaging on WhatsApp, share your plot location (Google Maps pin), plot size and whether you need design, construction or both — we&apos;ll respond faster.
            </div>
          </div>
        </div>
      </section>

      <section className="section areas contact-areas">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">We Serve</span>
            <h2>Areas we regularly visit</h2>
          </div>
          <div className="area-tags reveal">
            {["Billawar", "Basohli", "Bani", "Guru / Gujroo", "Nagrota", "Manwal", "Dewal", "Dher", "Kathua", "Jammu", "Udhampur"].map((area) => (
              <span key={area} className="area-tag">{area}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Before You Call</span>
            <h2>Helpful information</h2>
          </div>
          <dl className="faq-list">
            <div className="faq-item reveal"><dt>What should I prepare before contacting you?</dt><dd>Have your plot location (or address), approximate plot size in marlas/kanal, number of rooms needed and your budget range ready. Photos of the plot help too.</dd></div>
            <div className="faq-item reveal"><dt>How quickly do you respond?</dt><dd>We aim to respond to calls immediately during working hours. WhatsApp messages receive an auto-reply instantly, with a personal follow-up shortly after.</dd></div>
            <div className="faq-item reveal"><dt>Can I visit your office?</dt><dd>Yes. We are located near Edify International School, Dher, Dewal, Billawar. Calling ahead is recommended so someone is available to meet you.</dd></div>
            <div className="faq-item reveal"><dt>Do you take projects outside Jammu region?</dt><dd>Our primary service area is Billawar and surrounding towns. For locations farther away, contact us to discuss feasibility and visit charges.</dd></div>
          </dl>
        </div>
      </section>
    </>
  );
}
