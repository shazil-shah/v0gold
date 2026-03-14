"use client";

import { useRef } from "react";
import { Cpu, Network, Zap } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "Automation",
    description: "Fully automated systems responding to environmental triggers without manual intervention",
  },
  {
    icon: Network,
    title: "Smart Infrastructure",
    description: "Interconnected sensor networks creating an intelligent urban ecosystem",
  },
  {
    icon: Zap,
    title: "Sensor Systems",
    description: "Advanced sensors detecting light, rain, and occupancy in real-time",
  },
];

export default function OverviewSection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-32 overflow-hidden section-reveal"
      id="overview"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(0,240,255,0.08)_0%,transparent_50%)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-panel rounded-full mb-6 glow-border-subtle">
            <span className="font-[var(--font-rajdhani)] text-sm tracking-widest text-[#7dd3fc] uppercase">
              Section 01
            </span>
          </div>
          
          <h2 className="font-[var(--font-orbitron)] text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 section-title">
            Project <span className="text-gradient glow-text-subtle">Overview</span>
          </h2>
          
          <div className="w-32 h-[2px] mx-auto bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent mb-8" />
          
          <p className="font-[var(--font-rajdhani)] text-lg md:text-xl text-[#7dd3fc] max-w-3xl mx-auto section-description">
            The NextGen Infrastructure System demonstrates how <strong className="text-white">digital logic circuits</strong> can 
            automate and optimize urban infrastructure, creating smarter, more efficient cities.
          </p>
        </div>
        
        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Visual diagram */}
          <div className="relative overview-visual">
            <div className="glass-panel rounded-2xl p-8 glow-border">
              {/* Circuit visualization */}
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Central hub */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full glass-panel glow-border flex items-center justify-center pulse-glow">
                  <div className="text-center">
                    <Cpu className="w-10 h-10 text-[#00f0ff] mx-auto mb-2" />
                    <span className="font-[var(--font-orbitron)] text-xs text-white">CORE</span>
                  </div>
                </div>
                
                {/* Orbiting elements */}
                {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                  const radians = (angle * Math.PI) / 180;
                  const x = 50 + 38 * Math.cos(radians);
                  const y = 50 + 38 * Math.sin(radians);
                  return (
                    <div
                      key={i}
                      className="absolute w-12 h-12 rounded-lg glass-panel glow-border-subtle flex items-center justify-center orbit-node"
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                        transform: 'translate(-50%, -50%)',
                        animationDelay: `${i * 0.2}s`,
                      }}
                    >
                      <div className="w-2 h-2 rounded-full bg-[#00f0ff]" />
                    </div>
                  );
                })}
                
                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                  {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                    const radians = (angle * Math.PI) / 180;
                    const x = 50 + 38 * Math.cos(radians);
                    const y = 50 + 38 * Math.sin(radians);
                    return (
                      <line
                        key={i}
                        x1="50"
                        y1="50"
                        x2={x}
                        y2={y}
                        stroke="url(#lineGradient)"
                        strokeWidth="0.3"
                        strokeDasharray="2,2"
                        className="connection-line"
                      />
                    );
                  })}
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#0080ff" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              
              <div className="text-center mt-6">
                <p className="font-[var(--font-rajdhani)] text-sm text-[#7dd3fc]">
                  Interconnected Smart Systems Architecture
                </p>
              </div>
            </div>
          </div>
          
          {/* Right - Description */}
          <div className="space-y-8 overview-text">
            <div className="glass-panel rounded-xl p-6 glow-border-subtle cyber-card">
              <h3 className="font-[var(--font-orbitron)] text-2xl font-semibold text-white mb-4">
                What is NextGen Infrastructure?
              </h3>
              <p className="font-[var(--font-rajdhani)] text-[#7dd3fc] leading-relaxed">
                NextGen Infrastructure System is an innovative Digital Logic Design project that 
                showcases the practical application of logic gates, flip-flops, and combinational 
                circuits in creating automated urban systems. The project demonstrates how simple 
                digital components can work together to create intelligent, responsive infrastructure.
              </p>
            </div>
            
            <div className="glass-panel rounded-xl p-6 glow-border-subtle cyber-card">
              <h3 className="font-[var(--font-orbitron)] text-2xl font-semibold text-white mb-4">
                Digital Logic Foundation
              </h3>
              <p className="font-[var(--font-rajdhani)] text-[#7dd3fc] leading-relaxed">
                At its core, the system utilizes fundamental digital logic concepts including 
                AND, OR, NOT gates, multiplexers, and sequential circuits. These components 
                process sensor inputs and generate appropriate control signals for various 
                infrastructure systems like lighting, weather protection, and parking management.
              </p>
            </div>
          </div>
        </div>
        
        {/* System Layout Image */}
        <div className="mb-20">
          <div className="glass-panel rounded-2xl p-4 md:p-8 glow-border overflow-hidden">
            <div className="relative">
              <img
                src="/images/dld-project-layout.jpeg"
                alt="NextGen Infrastructure System Layout - showing automated rain shelter system, LDR controlled street lights, community park, and smart parking area"
                className="w-full h-auto rounded-xl"
              />
              <div className="absolute inset-0 rounded-xl pointer-events-none border border-[#00f0ff]/20" />
            </div>
            <div className="text-center mt-6">
              <h4 className="font-[var(--font-orbitron)] text-lg md:text-xl font-semibold text-white mb-2">
                System Layout Overview
              </h4>
              <p className="font-[var(--font-rajdhani)] text-sm md:text-base text-[#7dd3fc]">
                Complete infrastructure map showing Smart Lighting, Rain Detection, and Parking Systems integration
              </p>
            </div>
          </div>
        </div>
        
        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass-panel rounded-xl p-8 glow-border-subtle cyber-card feature-card"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl glass-panel glow-border flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-[#00f0ff]" />
              </div>
              <h4 className="font-[var(--font-orbitron)] text-xl font-semibold text-white mb-3">
                {feature.title}
              </h4>
              <p className="font-[var(--font-rajdhani)] text-[#7dd3fc] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
