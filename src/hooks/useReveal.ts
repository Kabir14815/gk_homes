import { useEffect } from "react";

export function useReveal(dependency: string) {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal:not(.revealed)");
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [dependency]);
}

export function useHeaderScroll() {
  useEffect(() => {
    const onScroll = () => {
      document.querySelector(".header")?.classList.toggle("header-scrolled", window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}
