import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useCallback, useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackgroundEffects from "./components/BackgroundEffects";
import GuideModal from "./components/GuideModal";
import HomePage from "./pages/HomePage";
import ExchangePage from "./pages/ExchangePage";
import NotFoundPage from "./pages/NotFoundPage";

function AppShell() {
  const [isGuideModalOpen, setIsGuideModalOpen] = useState(false);
  const [guideContext, setGuideContext] = useState({});
  const location = useLocation();

  const pageKey = useMemo(() => `${location.pathname}${location.search}`, [location.pathname, location.search]);

  const openGuideModal = useCallback((context = {}) => {
    setGuideContext(context);
    setIsGuideModalOpen(true);
  }, []);

  const closeGuideModal = useCallback(() => {
    setIsGuideModalOpen(false);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      <BackgroundEffects />
      <Navbar onOpenGuide={openGuideModal} />
      <main key={pageKey} className="page-shell relative z-10">
        <Routes>
          <Route path="/" element={<HomePage onOpenGuide={openGuideModal} />} />
          <Route path="/:slug" element={<ExchangePage onOpenGuide={openGuideModal} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <GuideModal isOpen={isGuideModalOpen} onClose={closeGuideModal} context={guideContext} />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
