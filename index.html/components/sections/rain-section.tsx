"use client";

import { useRef, useState, useEffect } from "react";
import { CloudRain, Droplets, Shield, Activity, Eye, AlertTriangle } from "lucide-react";

const advantages = [
  { icon: Activity, text: "Weather-responsive automation" },
  { icon: Shield, text: "Protection of infrastructure" },
  { icon: Eye, text: "Reduced manual monitoring" },
];

export default function RainSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isRaining, setIsRaining] = useState(false);
  const [raindrops, setRaindrops] = useState<Array<{ id: number; left: number; delay: number }>>([]);

  useEffect(() => {
    if (isRaining) {
      const drops = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 2,
      }));
      setRaindrops(drops);
    } else {
      setRaindrops([]);
    }
  }, [isRaining]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-32 overflow-hidden section-reveal"
      id="rain"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_70%,rgba(0,100,200,0.08)_0%,transparent_50%)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-panel rounded-full mb-6 glow-border-subtle">
            <span className="font-[var(--font-rajdhani)] text-sm tracking-widest text-[#7dd3fc] uppercase">
              Section 03
            </span>
          </div>
          
          <h2 className="font-[var(--font-orbitron)] text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 section-title">
            Rain <span className="text-gradient glow-text-subtle">Detection</span> System
          </h2>
          
          <div className="w-32 h-[2px] mx-auto bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent mb-8" />
          
          <p className="font-[var(--font-rajdhani)] text-lg md:text-xl text-[#7dd3fc] max-w-3xl mx-auto section-description">
            Automatic rain detection system installed in the <strong className="text-white">meadows area</strong> for 
            weather-responsive infrastructure protection.
          </p>
        </div>
        
        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Information */}
          <div className="space-y-8 rain-info order-2 lg:order-1">
            <div className="glass-panel rounded-xl p-6 glow-border-subtle cyber-card">
              <h3 className="font-[var(--font-orbitron)] text-2xl font-semibold text-white mb-4">
                How It Works
              </h3>
              <p className="font-[var(--font-rajdhani)] text-[#7dd3fc] leading-relaxed mb-4">
                The rain detection system uses a specialized <strong className="text-white">rain sensor module</strong> that 
                detects water droplets on its surface. When rain is detected, it triggers the control 
                system to initiate protective measures for the infrastructure.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-black/30 border border-[#00f0ff]/20">
                  <div className="w-2 h-2 rounded-full bg-[#00f0ff]" />
                  <span className="font-[var(--font-rajdhani)] text-sm text-[#7dd3fc]">
                    Rain sensor detects water droplets
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-black/30 border border-[#00f0ff]/20">
                  <div className="w-2 h-2 rounded-full bg-[#00f0ff]" />
                  <span className="font-[var(--font-rajdhani)] text-sm text-[#7dd3fc]">
                    Signal sent to control system
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-black/30 border border-[#00f0ff]/20">
                  <div className="w-2 h-2 rounded-full bg-[#00f0ff]" />
                  <span className="font-[var(--font-rajdhani)] text-sm text-[#7dd3fc]">
                    Protective infrastructure actions occur
                  </span>
                </div>
              </div>
            </div>
            
            {/* Advantages */}
            <div className="space-y-4">
              <h3 className="font-[var(--font-orbitron)] text-xl font-semibold text-white">
                Key Advantages
              </h3>
              {advantages.map((advantage, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 glass-panel rounded-lg p-4 glow-border-subtle cyber-card advantage-card"
                >
                  <div className="w-10 h-10 rounded-lg glass-panel glow-border flex items-center justify-center">
                    <advantage.icon className="w-5 h-5 text-[#00f0ff]" />
                  </div>
                  <span className="font-[var(--font-rajdhani)] text-white">
                    {advantage.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right - Interactive Demo */}
          <div className="relative rain-demo order-1 lg:order-2">
            <div className="glass-panel rounded-2xl p-8 glow-border">
              {/* Scene */}
              <div 
                className="relative aspect-video rounded-xl overflow-hidden transition-all duration-1000"
                style={{
                  background: isRaining 
                    ? 'linear-gradient(to bottom, #1a2a3a, #0a1520)' 
                    : 'linear-gradient(to bottom, #2a4a6a, #1a3050)'
                }}
              >
                {/* Rain drops */}
                {raindrops.map((drop) => (
                  <div
                    key={drop.id}
                    className="absolute w-0.5 h-4 bg-gradient-to-b from-transparent to-blue-400/60 animate-rain"
                    style={{
                      left: `${drop.left}%`,
                      animationDelay: `${drop.delay}s`,
                      animationDuration: '0.8s',
                    }}
                  />
                ))}
                
                {/* Cloud */}
                <div className={`absolute top-4 left-1/2 -translate-x-1/2 transition-all duration-500 ${
                  isRaining ? 'opacity-100' : 'opacity-60'
                }`}>
                  <CloudRain className={`w-20 h-20 ${isRaining ? 'text-gray-400' : 'text-gray-500'}`} />
                </div>
                
                {/* Ground/Meadow */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a1a20] to-transparent">
                  {/* Grass elements */}
                  <div className="absolute bottom-0 left-0 right-0 h-8 flex items-end justify-around px-4">
                    {[...Array(20)].map((_, i) => (
                      <div 
                        key={i}
                        className="w-1 bg-gradient-to-t from-green-900 to-green-700 rounded-t"
                        style={{ height: `${8 + Math.random() * 16}px` }}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Rain Sensor */}
                <div className="absolute bottom-24 left-1/2 -translate-x-1/2">
                  <div className={`relative w-16 h-16 rounded-xl glass-panel flex items-center justify-center transition-all duration-500 ${
                    isRaining ? 'glow-border pulse-glow' : 'border border-gray-600'
                  }`}>
                    <Droplets className={`w-8 h-8 transition-colors duration-500 ${
                      isRaining ? 'text-[#00f0ff]' : 'text-gray-500'
                    }`} />
                    
                    {/* Status indicator */}
                    <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${
                      isRaining ? 'bg-[#00f0ff] animate-pulse' : 'bg-gray-600'
                    }`} />
                  </div>
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-[#7dd3fc] whitespace-nowrap font-[var(--font-rajdhani)]">
                    Rain Sensor
                  </span>
                </div>
                
                {/* Alert indicator */}
                {isRaining && (
                  <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-yellow-500/20 border border-yellow-500/50 animate-pulse">
                    <AlertTriangle className="w-4 h-4 text-yellow-400" />
                    <span className="font-[var(--font-rajdhani)] text-xs text-yellow-400">RAIN DETECTED</span>
                  </div>
                )}
                
                {/* Control panel */}
                <div className="absolute bottom-4 right-4 glass-panel rounded-lg p-3 border border-[#00f0ff]/30">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${isRaining ? 'bg-[#00f0ff] animate-pulse' : 'bg-gray-600'}`} />
                    <span className="font-[var(--font-rajdhani)] text-xs text-[#7dd3fc]">
                      {isRaining ? 'PROTECTION ACTIVE' : 'MONITORING'}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Toggle */}
              <div className="flex items-center justify-center gap-4 mt-6">
                <span className={`font-[var(--font-rajdhani)] text-sm ${!isRaining ? 'text-white' : 'text-gray-500'}`}>
                  Clear
                </span>
                <button
                  onClick={() => setIsRaining(!isRaining)}
                  className={`relative w-16 h-8 rounded-full transition-colors ${
                    isRaining ? 'bg-[#00f0ff]' : 'bg-gray-600'
                  }`}
                >
                  <div 
                    className={`absolute top-1 w-6 h-6 rounded-full bg-white transition-all ${
                      isRaining ? 'left-9' : 'left-1'
                    }`}
                  />
                </button>
                <span className={`font-[var(--font-rajdhani)] text-sm ${isRaining ? 'text-[#00f0ff]' : 'text-gray-500'}`}>
                  Raining
                </span>
              </div>
              
              <p className="text-center font-[var(--font-rajdhani)] text-sm text-[#7dd3fc] mt-4">
                Toggle to simulate weather conditions
              </p>
            </div>
          </div>
        </div>
        
        {/* Technical specs */}
        <div className="grid md:grid-cols-3 gap-6 tech-specs">
          {[
            { label: "Response Time", value: "< 100ms", desc: "From detection to action" },
            { label: "Sensitivity", value: "98.5%", desc: "Water droplet detection" },
            { label: "Coverage", value: "360°", desc: "Full area monitoring" },
          ].map((spec, index) => (
            <div 
              key={index}
              className="glass-panel rounded-xl p-6 glow-border-subtle cyber-card text-center spec-card"
            >
              <p className="font-[var(--font-orbitron)] text-3xl font-bold text-gradient glow-text-subtle mb-2">
                {spec.value}
              </p>
              <p className="font-[var(--font-orbitron)] text-sm text-white mb-1">
                {spec.label}
              </p>
              <p className="font-[var(--font-rajdhani)] text-xs text-[#7dd3fc]">
                {spec.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Rain animation keyframes */}
      <style jsx>{`
        @keyframes rain {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(400px);
            opacity: 0;
          }
        }
        .animate-rain {
          animation: rain 0.8s linear infinite;
        }
      `}</style>
    </section>
  );
}
