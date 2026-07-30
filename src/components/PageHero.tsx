import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type PageHeroProps = {
  label: string;
  title: string;
  description: string;
};

export function PageHero({ label, title, description }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container">
        <span className="section-label">{label}</span>
        <h1>{title}</h1>
        <p className="page-hero-desc">{description}</p>
      </div>
    </section>
  );
}

type CtaBandProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export function CtaBand({ title, description, children }: CtaBandProps) {
  return (
    <section className="section cta-band">
      <div className="container cta-band-inner reveal">
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="cta-band-actions">{children}</div>
      </div>
    </section>
  );
}

export function CtaLink({
  to,
  children,
  outline,
}: {
  to: string;
  children: ReactNode;
  outline?: boolean;
}) {
  const className = outline
    ? "btn btn-outline btn-lg cta-band-outline"
    : "btn btn-primary btn-lg";
  if (to.startsWith("http") || to.startsWith("tel:")) {
    return (
      <a
        href={to}
        className={className}
        {...(to.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}
