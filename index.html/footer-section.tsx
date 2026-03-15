"use client";

import { useRef } from "react";

const projectHost = "SHAZIL ALI";

const teamMembers = [
  "ARHAM SAQIB",
  "RUBASHA AFZAAL",
  "HASSAN ALI",
  "AYESHA",
  "BURHAN ASLAM",
];

export default function FooterSection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <footer
      ref={sectionRef}
      className="relative py-20 overflow-hidden section-reveal"
      id="footer"
    >
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#ffd700]/50 to-transparent" />
      
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(0,240,255,0.05)_0%,transparent_50%)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Main content */}
        <div className="text-center mb-16">
          <h2 className="font-[var(--font-orbitron)] text-3xl md:text-4xl font-bold text-white mb-4 glow-text-subtle">
            NextGen Infrastructure System
          </h2>
          <p className="font-[var(--font-rajdhani)] text-lg text-[#7dd3fc]">
            A Digital Logic Design Project
          </p>
        </div>
        
        {/* Team section */}
        <div className="glass-panel rounded-2xl p-8 glow-border-subtle mb-16 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <p className="font-[var(--font-rajdhani)] text-sm tracking-widest text-[#7dd3fc] uppercase mb-2">
              DLD Supervisor
            </p>
            <h3 className="font-[var(--font-orbitron)] text-2xl font-bold text-white glow-text-subtle">
              SIR KHURAM SHAHZAD
            </h3>
          </div>
          
          <div className="h-[1px] bg-gradient-to-r from-transparent via-[#ffd700]/30 to-transparent mb-8" />
          
          <div className="text-center mb-6">
            <p className="font-[var(--font-rajdhani)] text-sm tracking-widest text-[#7dd3fc] uppercase mb-2">
              Hosted By
            </p>
            <h3 className="font-[var(--font-orbitron)] text-xl font-bold text-[#ffd700] glow-text">
              SYED {projectHost}
            </h3>
          </div>
          
          <div className="h-[1px] bg-gradient-to-r from-transparent via-[#ffd700]/30 to-transparent mb-8" />
          
          <div className="text-center mb-6">
            <p className="font-[var(--font-rajdhani)] text-sm tracking-widest text-[#7dd3fc] uppercase">
              Project Team
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {teamMembers.map((member) => (
              <div
                key={member}
                className="glass-panel rounded-lg p-4 text-center glow-border-subtle cyber-card"
              >
                <span className="font-[var(--font-rajdhani)] text-sm font-medium text-white">
                  {member}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-1 h-1 rounded-full bg-[#ffd700]"
                style={{ opacity: 0.3 + i * 0.15 }}
              />
            ))}
          </div>
          
          <p className="font-[var(--font-rajdhani)] text-sm text-[#7dd3fc]/60">
            © 2025 Syed Shazil Ali. All rights reserved.
          </p>
          
          <p className="font-[var(--font-rajdhani)] text-xs text-[#7dd3fc]/40 mt-2">
            NextGen Infrastructure System - A DLD Project
          </p>
        </div>
      </div>
    </footer>
  );
}
