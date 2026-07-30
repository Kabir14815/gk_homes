import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FabGroup } from "./FabGroup";
import { useReveal } from "../hooks/useReveal";
import { useHeaderScroll } from "../hooks/useHeaderScroll";

export function Layout() {
  const location = useLocation();
  useReveal(location.pathname);
  useHeaderScroll();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Header />
      <main className="site-main">
        <Outlet />
      </main>
      <Footer />
      <FabGroup />
    </>
  );
}
