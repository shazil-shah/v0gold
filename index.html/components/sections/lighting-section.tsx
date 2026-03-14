"use client";

import { useRef, useState } from "react";
import { Sun, Moon, Lightbulb, Zap, BatteryCharging, Shield } from "lucide-react";

const benefits = [
  { icon: BatteryCharging, text: "Reduce electricity consumption" },
  { icon: Moon, text: "Automatic night lighting" },
  { icon: Shield, text: "Improved safety in dark areas" },
];

export default function LightingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isDark, setIsDark] = useState(false);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-32 overflow-hidden section-reveal"
      id="lighting"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(255,200,0,0.06)_0%,transparent_50%)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-panel rounded-full mb-6 glow-border-subtle">
            <span className="font-[var(--font-rajdhani)] text-sm tracking-widest text-[#7dd3fc] uppercase">
              Section 02
            </span>
          </div>
          
          <h2 className="font-[var(--font-orbitron)] text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 section-title">
            Smart <span className="text-gradient glow-text-subtle">Lighting</span> System
          </h2>
          
          <div className="w-32 h-[2px] mx-auto bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent mb-8" />
          
          <p className="font-[var(--font-rajdhani)] text-lg md:text-xl text-[#7dd3fc] max-w-3xl mx-auto section-description">
            Intelligent street lighting that responds to ambient light conditions using <strong className="text-white">LDR sensors</strong>.
          </p>
        </div>
        
        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Interactive Demo */}
          <div className="relative lighting-demo">
            <div className="glass-panel rounded-2xl p-8 glow-border">
              {/* Scene */}
              <div 
                className="relative aspect-video rounded-xl overflow-hidden transition-all duration-1000"
                style={{
                  background: isDark 
                    ? 'linear-gradient(to bottom, #0a0a0a, #000)' 
                    : 'linear-gradient(to bottom, #1a3a5c, #0a1a2a)'
                }}
              >
                {/* Sun/Moon */}
                <div 
                  className={`absolute w-16 h-16 rounded-full transition-all duration-1000 ${
                    isDark ? 'bg-gray-300 top-8 right-8' : 'bg-yellow-400 top-4 right-12 shadow-[0_0_40px_rgba(255,200,0,0.5)]'
                  }`}
                  style={{
                    transform: isDark ? 'scale(0.7)' : 'scale(1)',
                  }}
                >
                  {isDark && (
                    <div className="absolute inset-2 rounded-full bg-gray-400/30" />
                  )}
                </div>
                
                {/* Stars (visible in dark mode) */}
                {isDark && (
                  <div className="absolute inset-0">
                    {[...Array(15)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                        style={{
                          left: `${Math.random() * 80 + 10}%`,
                          top: `${Math.random() * 40}%`,
                          animationDelay: `${Math.random() * 2}s`,
                        }}
                      />
                    ))}
                  </div>
                )}
                
                {/* Ground */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0a1a2a] to-transparent" />
                
                {/* Street lights */}
                <div className="absolute bottom-16 left-[20%] flex flex-col items-center">
                  <Lightbulb 
                    className={`w-8 h-8 transition-all duration-500 ${
                      isDark ? 'text-yellow-300 drop-shadow-[0_0_15px_rgba(255,255,0,0.8)]' : 'text-gray-500'
                    }`}
                  />
                  <div className="w-1 h-12 bg-gray-600" />
                  {isDark && (
                    <div 
                      className="absolute top-6 w-24 h-32 opacity-30"
                      style={{
                        background: 'conic-gradient(from 180deg, transparent 135deg, rgba(255,255,0,0.3) 180deg, transparent 225deg)',
                      }}
                    />
                  )}
                </div>
                
                <div className="absolute bottom-16 right-[20%] flex flex-col items-center">
                  <Lightbulb 
                    className={`w-8 h-8 transition-all duration-500 ${
                      isDark ? 'text-yellow-300 drop-shadow-[0_0_15px_rgba(255,255,0,0.8)]' : 'text-gray-500'
                    }`}
                  />
                  <div className="w-1 h-12 bg-gray-600" />
                  {isDark && (
                    <div 
                      className="absolute top-6 w-24 h-32 opacity-30"
                      style={{
                        background: 'conic-gradient(from 180deg, transparent 135deg, rgba(255,255,0,0.3) 180deg, transparent 225deg)',
                      }}
                    />
                  )}
                </div>
                
                {/* LDR Sensor */}
                <div className="absolute bottom-20 left-1/2 -translate-x-1/2">
                  <div className={`w-8 h-8 rounded-full glass-panel flex items-center justify-center ${
                    isDark ? 'glow-border pulse-glow' : 'border border-gray-600'
                  }`}>
                    <div className={`w-3 h-3 rounded-full transition-colors duration-500 ${
                      isDark ? 'bg-[#00f0ff]' : 'bg-gray-500'
                    }`} />
                  </div>
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-[#7dd3fc] whitespace-nowrap font-[var(--font-rajdhani)]">
                    LDR Sensor
                  </span>
                </div>
              </div>
              
              {/* Toggle */}
              <div className="flex items-center justify-center gap-4 mt-6">
                <Sun className={`w-5 h-5 transition-colors ${!isDark ? 'text-yellow-400' : 'text-gray-500'}`} />
                <button
                  onClick={() => setIsDark(!isDark)}
                  className={`relative w-16 h-8 rounded-full transition-colors ${
                    isDark ? 'bg-[#00f0ff]' : 'bg-gray-600'
                  }`}
                >
                  <div 
                    className={`absolute top-1 w-6 h-6 rounded-full bg-white transition-all ${
                      isDark ? 'left-9' : 'left-1'
                    }`}
                  />
                </button>
                <Moon className={`w-5 h-5 transition-colors ${isDark ? 'text-[#00f0ff]' : 'text-gray-500'}`} />
              </div>
              
              <p className="text-center font-[var(--font-rajdhani)] text-sm text-[#7dd3fc] mt-4">
                Toggle to simulate day/night conditions
              </p>
            </div>
          </div>
          
          {/* Right - Information */}
          <div className="space-y-8 lighting-info">
            <div className="glass-panel rounded-xl p-6 glow-border-subtle cyber-card">
              <h3 className="font-[var(--font-orbitron)] text-2xl font-semibold text-white mb-4">
                How It Works
              </h3>
              <p className="font-[var(--font-rajdhani)] text-[#7dd3fc] leading-relaxed mb-4">
                The smart lighting system utilizes a <strong className="text-white">Light Dependent Resistor (LDR)</strong> to 
                continuously monitor ambient light levels. When the light intensity drops below 
                a predetermined threshold, the digital logic circuit automatically activates 
                the LED street lighting.
              </p>
              <div className="flex items-center gap-4 p-4 rounded-lg bg-black/30 border border-[#00f0ff]/20">
                <Zap className="w-8 h-8 text-[#00f0ff]" />
                <div>
                  <p className="font-[var(--font-orbitron)] text-sm text-white">Logic Gate: Comparator + NOT</p>
                  <p className="font-[var(--font-rajdhani)] text-xs text-[#7dd3fc]">
                    Analog input → Digital threshold → LED activation
                  </p>
                </div>
              </div>
            </div>
            
            {/* Benefits */}
            <div className="space-y-4">
              <h3 className="font-[var(--font-orbitron)] text-xl font-semibold text-white">
                Key Benefits
              </h3>
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 glass-panel rounded-lg p-4 glow-border-subtle cyber-card benefit-card"
                >
                  <div className="w-10 h-10 rounded-lg glass-panel glow-border flex items-center justify-center">
                    <benefit.icon className="w-5 h-5 text-[#00f0ff]" />
                  </div>
                  <span className="font-[var(--font-rajdhani)] text-white">
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Flow diagram */}
        <div className="glass-panel rounded-xl p-8 glow-border-subtle flow-diagram">
          <h3 className="font-[var(--font-orbitron)] text-xl font-semibold text-white text-center mb-8">
            System Flow Diagram
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {[
              { icon: Sun, label: "Sunlight" },
              { label: "→" },
              { icon: () => <div className="w-4 h-4 rounded-full bg-[#00f0ff]" />, label: "LDR Sensor" },
              { label: "→" },
              { icon: Cpu, label: "Logic Circuit" },
              { label: "→" },
              { icon: Lightbulb, label: "LED Control" },
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                {item.icon ? (
                  <div className="flex flex-col items-center gap-2 flow-step">
                    <div className="w-12 h-12 rounded-lg glass-panel glow-border-subtle flex items-center justify-center">
                      {typeof item.icon === 'function' ? <item.icon /> : <item.icon className="w-6 h-6 text-[#00f0ff]" />}
                    </div>
                    <span className="font-[var(--font-rajdhani)] text-xs text-[#7dd3fc]">
                      {item.label}
                    </span>
                  </div>
                ) : (
                  <span className="text-[#00f0ff] text-2xl mx-2 arrow">
                    {item.label}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Cpu({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
    </svg>
  );
}
