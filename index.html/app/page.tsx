"use client";

import { useState, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import Preloader from "@/components/preloader";
import HeroSection from "@/components/sections/hero-section";
import OverviewSection from "@/components/sections/overview-section";
import LightingSection from "@/components/sections/lighting-section";
import RainSection from "@/components/sections/rain-section";
import ParkingSection from "@/components/sections/parking-section";
import AdvantagesSection from "@/components/sections/advantages-section";
import FooterSection from "@/components/sections/footer-section";
import { useGsapAnimations } from "@/hooks/use-gsap-animations";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

// Dynamically import Three.js globe (client-side only)
const ThreeGlobe = dynamic(() => import("@/components/three-globe"), {
  ssr: false,
  loading: () => null,
});

function MainContent() {
  // Initialize smooth scroll and GSAP animations
  useSmoothScroll();
  useGsapAnimations();

  return (
    <>
      {/* Three.js Globe Background */}
      <Suspense fallback={null}>
        <ThreeGlobe />
      </Suspense>

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <OverviewSection />
        <LightingSection />
        <RainSection />
        <ParkingSection />
        <AdvantagesSection />
        <FooterSection />
      </main>

      {/* Navigation dots */}
      <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3">
        {["hero", "overview", "lighting", "rain", "parking", "advantages"].map((section, i) => (
          <a
            key={section}
            href={`#${section}`}
            className="group flex items-center gap-3"
          >
            <span className="opacity-0 group-hover:opacity-100 transition-opacity font-[var(--font-rajdhani)] text-xs text-[#7dd3fc] uppercase tracking-wider">
              {section === "hero" ? "Home" : section}
            </span>
            <div className="w-2 h-2 rounded-full bg-[#00f0ff]/30 group-hover:bg-[#00f0ff] group-hover:shadow-[0_0_10px_#00f0ff] transition-all" />
          </a>
        ))}
      </nav>
    </>
  );
}

export default function Home() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#00f0ff] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden gradient-bg">
      {/* Preloader */}
      {showPreloader && (
        <Preloader onComplete={() => setShowPreloader(false)} />
      )}

      {/* Main site content */}
      {!showPreloader && <MainContent />}
    </div>
  );
}
