import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { Features } from "./components/Features";
import { Solutions } from "./components/Solutions";
import { DataVisualization } from "./components/DataVisualization";
import { Pricing } from "./components/Pricing";
import { Blog } from "./components/Blog";
import { CTABanner } from "./components/CTABanner";
import { Footer } from "./components/Footer";
import { AuthModal } from "./components/AuthModal";
import { OverdriveToggle } from "./components/OverdriveToggle";
import { LoadingScreen } from "./components/LoadingScreen";
import { ScrollToTop } from "./components/ScrollToTop";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [overdriveMode, setOverdriveMode] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<
    "login" | "register"
  >("login");

  const handleLoginClick = () => {
    setAuthMode("login");
    setAuthModalOpen(true);
  };

  const handleRegisterClick = () => {
    setAuthMode("register");
    setAuthModalOpen(true);
  };

  if (loading) {
    return (
      <LoadingScreen onComplete={() => setLoading(false)} />
    );
  }

  return (
    <div
      className={`min-h-screen bg-[#0B0E13] text-white overflow-x-hidden ${overdriveMode ? "overdrive-mode" : ""}`}
    >
      {/* Energy Grid Background */}
      <div className="fixed inset-0 energy-grid pointer-events-none" />

      {/* Ambient Glows */}
      <div className="fixed top-0 left-0 w-[800px] h-[800px] bg-[#3FA9FF]/10 rounded-full blur-[200px] pointer-events-none" />
      <div className="fixed top-1/3 right-0 w-[600px] h-[600px] bg-[#5CE1E6]/8 rounded-full blur-[180px] pointer-events-none" />
      <div className="fixed bottom-0 left-1/3 w-[700px] h-[700px] bg-[#8B7CFF]/8 rounded-full blur-[200px] pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar
          onLoginClick={handleLoginClick}
          onRegisterClick={handleRegisterClick}
        />

        <main>
          <Hero />
          <Stats />
          <Features />
          <Solutions />
          <DataVisualization />
          <Pricing />
          <Blog />
          <CTABanner />
        </main>

        <Footer />
      </div>

      {/* Overdrive Toggle */}
      <OverdriveToggle
        isActive={overdriveMode}
        onToggle={() => setOverdriveMode(!overdriveMode)}
      />

      {/* Scroll to Top */}
      <ScrollToTop />

      {/* Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        mode={authMode}
      />
    </div>
  );
}