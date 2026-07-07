export function initScrollReveal(): void {
  const elements = document.querySelectorAll<HTMLElement>(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
  );

  elements.forEach((el) => observer.observe(el));
}

export function initHeaderScroll(): void {
  const header = document.querySelector<HTMLElement>(".header");
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle("header-scrolled", window.scrollY > 24);
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}
