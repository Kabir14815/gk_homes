import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { PHONE, TEL_URL } from "../constants";

type AuthTab = "login" | "signup";

const NOTICE = "Client portal is coming soon. Please call or WhatsApp us for now.";

export function LoginPage() {
  const [tab, setTab] = useState<AuthTab>("login");
  const [notice, setNotice] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setNotice(true);
  };

  return (
    <section className="section auth-page">
      <div className="container auth-layout reveal">
        <aside className="auth-sidebar">
          <span className="section-label">Client Portal</span>
          <h2>Your project dashboard</h2>
          <p>
            The GK Home Designer portal gives you 24/7 access to everything related to your home project — from approved drawings to live construction photos.
          </p>
          <ul className="auth-benefits">
            <li>View and download 2D floor plans</li>
            <li>Explore 3D visualizations interactively</li>
            <li>Track live construction milestones</li>
            <li>Browse completed project references</li>
            <li>Receive updates and notifications</li>
            <li>Direct message our team</li>
          </ul>
          <p className="auth-sidebar-note">
            Portal access is provided to active clients. New users can sign up — full features launching soon.
          </p>
        </aside>
        <div className="auth-card">
          <h1 className="auth-title">Welcome back</h1>
          <p className="auth-sub">Sign in or create an account to access your project dashboard.</p>

          <div className="auth-tabs">
            <button
              type="button"
              className={`auth-tab${tab === "login" ? " active" : ""}`}
              onClick={() => { setTab("login"); setNotice(false); }}
            >
              Login
            </button>
            <button
              type="button"
              className={`auth-tab${tab === "signup" ? " active" : ""}`}
              onClick={() => { setTab("signup"); setNotice(false); }}
            >
              Sign Up
            </button>
          </div>

          {tab === "login" ? (
            <div className="auth-panel active">
              <form className="auth-form" onSubmit={onSubmit}>
                <label>
                  Email
                  <input type="email" name="email" placeholder="you@example.com" required autoComplete="email" />
                </label>
                <label>
                  Password
                  <input type="password" name="password" placeholder="••••••••" required autoComplete="current-password" />
                </label>
                <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                {notice ? <p className="auth-notice">{NOTICE}</p> : null}
              </form>
            </div>
          ) : (
            <div className="auth-panel active">
              <form className="auth-form" onSubmit={onSubmit}>
                <label>
                  Full Name
                  <input type="text" name="name" placeholder="Your name" required autoComplete="name" />
                </label>
                <label>
                  Phone
                  <input type="tel" name="phone" placeholder={PHONE} required autoComplete="tel" />
                </label>
                <label>
                  Email
                  <input type="email" name="email" placeholder="you@example.com" required autoComplete="email" />
                </label>
                <label>
                  Password
                  <input type="password" name="password" placeholder="••••••••" required autoComplete="new-password" />
                </label>
                <button type="submit" className="btn btn-primary btn-block">Create Account</button>
                {notice ? <p className="auth-notice">{NOTICE}</p> : null}
              </form>
            </div>
          )}

          <p className="auth-help">
            Need help? <Link to="/contact">Contact us</Link> or call <a href={TEL_URL}>{PHONE}</a>
          </p>
        </div>
      </div>
    </section>
  );
}
