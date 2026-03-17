"use client";

import { useRef } from "react";
import { 
  Zap, 
  Cpu, 
  BatteryFull, 
  Shield, 
  ParkingCircle, 
  Rocket,
  Sparkles
} from "lucide-react";

const advantages = [
  {
    icon: Zap,
    title: "Energy Efficiency",
    description: "Intelligent power management reduces energy consumption by up to 60% through automated systems that activate only when needed.",
    gradient: "from-yellow-500/20 to-orange-500/20",
  },
  {
    icon: Cpu,
    title: "Automation",
    description: "Fully automated infrastructure responds instantly to environmental changes without human intervention.",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    icon: BatteryFull,
    title: "Reduced Power Waste",
    description: "Smart sensors ensure systems operate only during necessary conditions, eliminating standby waste.",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: Shield,
    title: "Improved Safety",
    description: "Automatic lighting and weather protection systems enhance public safety and infrastructure protection.",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: ParkingCircle,
    title: "Smart Parking Control",
    description: "Intelligent parking management prevents overcrowding and reduces traffic congestion in urban areas.",
    gradient: "from-blue-500/20 to-indigo-500/20",
  },
  {
    icon: Rocket,
    title: "Future Smart Infrastructure",
    description: "A foundation for next-generation smart cities with scalable, interconnected urban systems.",
    gradient: "from-rose-500/20 to-red-500/20",
  },
];

export default function AdvantagesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-32 overflow-hidden section-reveal"
      id="advantages"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(0,240,255,0.1)_0%,transparent_60%)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-panel rounded-full mb-6 glow-border-subtle">
            <Sparkles className="w-4 h-4 text-[#00f0ff]" />
            <span className="font-[var(--font-rajdhani)] text-sm tracking-widest text-[#7dd3fc] uppercase">
              Section 05
            </span>
          </div>
          
          <h2 className="font-[var(--font-orbitron)] text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 section-title">
            System <span className="text-gradient glow-text-subtle">Advantages</span>
          </h2>
          
          <div className="w-32 h-[2px] mx-auto bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent mb-8" />
          
          <p className="font-[var(--font-rajdhani)] text-lg md:text-xl text-[#7dd3fc] max-w-3xl mx-auto section-description">
            Discover the key benefits of implementing smart infrastructure systems 
            powered by digital logic design.
          </p>
        </div>
        
        {/* Advantages grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <div
              key={advantage.title}
              className="group glass-panel rounded-2xl p-8 glow-border-subtle cyber-card advantage-card"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`relative w-16 h-16 rounded-xl mb-6 bg-gradient-to-br ${advantage.gradient} flex items-center justify-center overflow-hidden`}>
                <advantage.icon className="w-8 h-8 text-[#00f0ff] relative z-10" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-[#00f0ff]/10 animate-pulse" />
                </div>
                {/* Corner decoration */}
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#00f0ff]/50" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#00f0ff]/50" />
              </div>
              
              {/* Title */}
              <h3 className="font-[var(--font-orbitron)] text-xl font-semibold text-white mb-3 group-hover:text-[#00f0ff] transition-colors">
                {advantage.title}
              </h3>
              
              {/* Description */}
              <p className="font-[var(--font-rajdhani)] text-[#7dd3fc] leading-relaxed">
                {advantage.description}
              </p>
              
              {/* Decorative line */}
              <div className="mt-6 h-[1px] bg-gradient-to-r from-[#00f0ff]/0 via-[#00f0ff]/30 to-[#00f0ff]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="glass-panel inline-block rounded-2xl p-10 glow-border cta-panel">
            <h3 className="font-[var(--font-orbitron)] text-2xl md:text-3xl font-bold text-white mb-4">
              Building the <span className="text-gradient glow-text">Future</span> Today
            </h3>
            <p className="font-[var(--font-rajdhani)] text-lg text-[#7dd3fc] max-w-2xl mx-auto mb-8">
              The NextGen Infrastructure System demonstrates how simple digital logic principles 
              can create powerful, efficient, and intelligent urban solutions.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30">
                <div className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse" />
                <span className="font-[var(--font-rajdhani)] text-sm text-[#00f0ff]">Digital Logic Design</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30">
                <div className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse" />
                <span className="font-[var(--font-rajdhani)] text-sm text-[#00f0ff]">Smart Automation</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30">
                <div className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse" />
                <span className="font-[var(--font-rajdhani)] text-sm text-[#00f0ff]">Energy Efficient</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
