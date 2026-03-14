"use client";

import { useRef } from "react";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(0,128,255,0.15)_0%,transparent_60%)]" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto hero-content">
        {/* Label */}
        <div className="inline-flex items-center gap-2 px-4 py-2 glass-panel rounded-full mb-8 glow-border-subtle">
          <div className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse" />
          <span className="font-[var(--font-rajdhani)] text-sm tracking-widest text-[#7dd3fc] uppercase">
            Digital Logic Design Project
          </span>
        </div>
        
        {/* Main title */}
        <h1 className="font-[var(--font-orbitron)] text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-8 text-white">
          <span className="block hero-title-line text-[#00f0ff] glow-text">NextGen</span>
          <span className="block text-gradient glow-text hero-title-line text-7xl md:text-9xl lg:text-[10rem]">Infrastructure</span>
          <span className="block hero-title-line text-[#00f0ff] glow-text">System</span>
        </h1>
        
        {/* Subtitle */}
        <p className="font-[var(--font-rajdhani)] text-lg md:text-xl lg:text-2xl text-[#7dd3fc] max-w-3xl mx-auto mb-12 leading-relaxed hero-subtitle">
          A revolutionary smart infrastructure automation system powered by digital logic,
          featuring intelligent lighting, weather response, and automated parking management.
        </p>
        
        {/* CTA */}
        <button className="group inline-flex items-center gap-3 px-8 py-4 glass-panel rounded-xl glow-border cyber-card">
          <span className="font-[var(--font-rajdhani)] text-lg font-semibold tracking-wider text-white">
            Explore The System
          </span>
          <ChevronDown className="w-5 h-5 text-[#00f0ff] group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 scroll-indicator">
        <span className="font-[var(--font-rajdhani)] text-xs tracking-widest text-[#7dd3fc] uppercase">
          Scroll to explore
        </span>
        <div className="w-6 h-10 rounded-full border-2 border-[#00f0ff]/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-[#00f0ff] animate-bounce" />
        </div>
      </div>
      
      {/* Side decorations */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 side-decoration">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-1 h-8 bg-gradient-to-b from-[#00f0ff] to-transparent rounded-full opacity-50"
            style={{ opacity: 0.2 + i * 0.15 }}
          />
        ))}
      </div>
      
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 side-decoration">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-1 h-8 bg-gradient-to-b from-transparent to-[#00f0ff] rounded-full"
            style={{ opacity: 0.6 - i * 0.1 }}
          />
        ))}
      </div>
    </section>
  );
}
