import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BRAND } from "../constants";

const NAV = [
  { to: "/modules", label: "Modules" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/charges", label: "Visit Charges" },
  { to: "/login", label: "Login" },
  { to: "/contact", label: "Contact", cta: true },
] as const;

function LogoIcon() {
  return (
    <svg className="logo-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M6 18L20 6L34 18V34H26V24H14V34H6V18Z" fill="currentColor" />
      <path d="M12 8C16 4 24 4 28 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <Link to="/" className="logo" onClick={() => setOpen(false)}>
          <LogoIcon />
          <span>{BRAND}</span>
        </Link>
        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
        <ul className={`nav-links${open ? " open" : ""}`}>
          {NAV.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `${"cta" in item && item.cta ? "nav-cta" : "nav-link"}${isActive ? " active" : ""}`
                }
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
