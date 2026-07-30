import { useState } from "react";
import { PageHero, CtaBand, CtaLink } from "../components/PageHero";
import { ProjectCard } from "../components/ProjectCard";
import { HouseCanvas } from "../components/HouseCanvas";
import { useReveal } from "../hooks/useReveal";
import {
  PROJECT_STATS,
  PROJECTS_2D,
  PROJECTS_3D,
  PROJECTS_LIVE,
  PROJECTS_COMPLETED,
} from "../data/projects";

type Tab = "2d" | "3d" | "live" | "completed";

const TABS: { id: Tab; label: string }[] = [
  { id: "2d", label: "2D Drawings" },
  { id: "3d", label: "3D Visualization" },
  { id: "live", label: "Live Projects" },
  { id: "completed", label: "Completed" },
];

export function ProjectsPage() {
  const [tab, setTab] = useState<Tab>("2d");
  useReveal(tab);

  return (
    <>
      <PageHero
        label="Portfolio"
        title="Projects"
        description="Explore our 2D plans, 3D visualizations, live construction sites and completed homes across Billawar, Basohli, Kathua, Jammu and surrounding areas."
      />

      <section className="section project-stats">
        <div className="container">
          <div className="info-cards info-cards-row reveal">
            {PROJECT_STATS.map((stat) => (
              <div key={stat.label} className="info-card">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section projects">
        <div className="container">
          <div className="projects-tabs reveal">
            {TABS.map((t) => (
              <button
                key={t.id}
                type="button"
                className={`project-tab${tab === t.id ? " active" : ""}`}
                onClick={() => setTab(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>

          {tab === "2d" && (
            <div className="project-panel active">
              <p className="panel-intro reveal">
                Architectural floor plans and working drawings — Vastu-compliant layouts tailored to each plot.
              </p>
              <div className="project-grid">
                {PROJECTS_2D.map((p) => (
                  <ProjectCard key={p.id} project={p} variant="2d" />
                ))}
              </div>
            </div>
          )}

          {tab === "3d" && (
            <div className="project-panel active">
              <p className="panel-intro reveal">
                Interactive 3D models and photorealistic renders — see your home before construction starts.
              </p>
              <div className="reveal">
                <HouseCanvas id="viz-canvas" large label="Interactive 3D house visualization" />
              </div>
              <p className="canvas-hint canvas-hint-center">Drag to explore the real 3D model</p>
              <div className="project-grid project-grid-spaced">
                {PROJECTS_3D.map((p) => (
                  <ProjectCard key={p.id} project={p} variant="3d" />
                ))}
              </div>
            </div>
          )}

          {tab === "live" && (
            <div className="project-panel active">
              <p className="panel-intro reveal">
                Active construction sites with regular progress updates — follow your build in real time.
              </p>
              <div className="project-grid">
                {PROJECTS_LIVE.map((p) => (
                  <ProjectCard key={p.id} project={p} variant="live" />
                ))}
              </div>
            </div>
          )}

          {tab === "completed" && (
            <div className="project-panel active">
              <p className="panel-intro reveal">
                Finished homes delivered across the region — design, construction and handover complete.
              </p>
              <div className="project-grid">
                {PROJECTS_COMPLETED.map((p) => (
                  <ProjectCard key={p.id} project={p} variant="done" />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <CtaBand title="Want your project featured here?" description="Start with a site visit or share your plot details on WhatsApp.">
        <CtaLink to="/contact">Start a Project</CtaLink>
        <CtaLink to="/services" outline>View Services</CtaLink>
      </CtaBand>
    </>
  );
}
