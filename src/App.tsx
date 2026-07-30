import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { ModulesPage } from "./pages/ModulesPage";
import { ServicesPage } from "./pages/ServicesPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ChargesPage } from "./pages/ChargesPage";
import { LoginPage } from "./pages/LoginPage";
import { ContactPage } from "./pages/ContactPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="modules" element={<ModulesPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="charges" element={<ChargesPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="contact" element={<ContactPage />} />

        {/* Old multi-page HTML URLs */}
        <Route path="index.html" element={<Navigate to="/" replace />} />
        <Route path="modules.html" element={<Navigate to="/modules" replace />} />
        <Route path="services.html" element={<Navigate to="/services" replace />} />
        <Route path="projects.html" element={<Navigate to="/projects" replace />} />
        <Route path="charges.html" element={<Navigate to="/charges" replace />} />
        <Route path="login.html" element={<Navigate to="/login" replace />} />
        <Route path="contact.html" element={<Navigate to="/contact" replace />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
