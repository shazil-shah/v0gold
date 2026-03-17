"use client";

import { useRef, useState } from "react";
import { Car, ParkingCircle, Gauge, Shield, AlertCircle, CheckCircle } from "lucide-react";

const TOTAL_SLOTS = 6;

const advantages = [
  { icon: Gauge, text: "Efficient parking management" },
  { icon: Shield, text: "Prevents overcrowding" },
  { icon: Car, text: "Reduces traffic congestion" },
  { icon: ParkingCircle, text: "Improves smart city infrastructure" },
];

export default function ParkingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [occupiedSlots, setOccupiedSlots] = useState<boolean[]>([true, true, false, true, false, false]);

  const filledCount = occupiedSlots.filter(Boolean).length;
  const isFull = filledCount === TOTAL_SLOTS;

  const toggleSlot = (index: number) => {
    const newSlots = [...occupiedSlots];
    newSlots[index] = !newSlots[index];
    setOccupiedSlots(newSlots);
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-32 overflow-hidden section-reveal"
      id="parking"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(0,255,200,0.06)_0%,transparent_50%)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-panel rounded-full mb-6 glow-border-subtle">
            <span className="font-[var(--font-rajdhani)] text-sm tracking-widest text-[#7dd3fc] uppercase">
              Section 04
            </span>
          </div>
          
          <h2 className="font-[var(--font-orbitron)] text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 section-title">
            Smart <span className="text-gradient glow-text-subtle">Parking</span> System
          </h2>
          
          <div className="w-32 h-[2px] mx-auto bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent mb-8" />
          
          <p className="font-[var(--font-rajdhani)] text-lg md:text-xl text-[#7dd3fc] max-w-3xl mx-auto section-description">
            Automated parking management system that monitors slot availability and 
            controls entry when capacity is reached.
          </p>
        </div>
        
        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Interactive Parking Lot */}
          <div className="relative parking-demo">
            <div className="glass-panel rounded-2xl p-8 glow-border">
              {/* Status bar */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <ParkingCircle className="w-6 h-6 text-[#00f0ff]" />
                  <span className="font-[var(--font-orbitron)] text-white">Parking Status</span>
                </div>
                <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg ${
                  isFull 
                    ? 'bg-red-500/20 border border-red-500/50' 
                    : 'bg-green-500/20 border border-green-500/50'
                }`}>
                  {isFull ? (
                    <>
                      <AlertCircle className="w-4 h-4 text-red-400" />
                      <span className="font-[var(--font-rajdhani)] text-sm text-red-400">FULL</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="font-[var(--font-rajdhani)] text-sm text-green-400">AVAILABLE</span>
                    </>
                  )}
                </div>
              </div>
              
              {/* Parking lot visualization */}
              <div className="relative bg-[#0a1520] rounded-xl p-6 border border-[#00f0ff]/20">
                {/* Entry gate */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex flex-col items-center">
                  <div className={`w-24 h-2 rounded-full transition-all duration-500 ${
                    isFull ? 'bg-red-500' : 'bg-green-500'
                  } ${!isFull && 'pulse-glow'}`} 
                  style={{ boxShadow: isFull ? '0 0 15px rgba(255,0,0,0.5)' : '0 0 15px rgba(0,255,100,0.5)' }}
                  />
                  <span className="font-[var(--font-rajdhani)] text-xs text-[#7dd3fc] mt-1">ENTRY GATE</span>
                </div>
                
                {/* Parking slots grid */}
                <div className="grid grid-cols-3 gap-4 mt-8">
                  {occupiedSlots.map((isOccupied, index) => (
                    <button
                      key={index}
                      onClick={() => toggleSlot(index)}
                      className={`relative aspect-[4/3] rounded-lg border-2 border-dashed transition-all duration-300 ${
                        isOccupied 
                          ? 'border-red-500/50 bg-red-500/10' 
                          : 'border-green-500/50 bg-green-500/10 hover:bg-green-500/20'
                      }`}
                    >
                      {/* Slot number */}
                      <span className="absolute top-1 left-2 font-[var(--font-orbitron)] text-xs text-[#7dd3fc]">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      
                      {/* Car icon or empty indicator */}
                      {isOccupied ? (
                        <Car className="absolute inset-0 m-auto w-10 h-10 text-[#00f0ff]" />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-8 h-0.5 bg-green-500/50 rounded" />
                        </div>
                      )}
                      
                      {/* Sensor indicator */}
                      <div className={`absolute bottom-1 right-1 w-2 h-2 rounded-full ${
                        isOccupied ? 'bg-red-500' : 'bg-green-500'
                      } animate-pulse`} />
                    </button>
                  ))}
                </div>
                
                {/* Capacity meter */}
                <div className="mt-6 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-[var(--font-rajdhani)] text-sm text-[#7dd3fc]">Capacity</span>
                    <span className="font-[var(--font-orbitron)] text-sm text-white">
                      {filledCount}/{TOTAL_SLOTS}
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-black/50 overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${
                        isFull ? 'bg-red-500' : filledCount > TOTAL_SLOTS / 2 ? 'bg-yellow-500' : 'bg-green-500'
                      }`}
                      style={{ width: `${(filledCount / TOTAL_SLOTS) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
              
              <p className="text-center font-[var(--font-rajdhani)] text-sm text-[#7dd3fc] mt-4">
                Click on slots to simulate car entry/exit
              </p>
            </div>
          </div>
          
          {/* Right - Information */}
          <div className="space-y-8 parking-info">
            <div className="glass-panel rounded-xl p-6 glow-border-subtle cyber-card">
              <h3 className="font-[var(--font-orbitron)] text-2xl font-semibold text-white mb-4">
                How It Works
              </h3>
              <p className="font-[var(--font-rajdhani)] text-[#7dd3fc] leading-relaxed mb-4">
                The Smart Parking Management System uses <strong className="text-white">occupancy sensors</strong> in each 
                parking slot to detect whether a vehicle is present. The system continuously monitors 
                all slots and calculates available capacity.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-black/30 border border-[#00f0ff]/20">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <p className="font-[var(--font-rajdhani)] text-sm text-white">Slots Available</p>
                    <p className="font-[var(--font-rajdhani)] text-xs text-[#7dd3fc]">
                      Entry gate opens automatically for incoming vehicles
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-black/30 border border-[#00f0ff]/20">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center mt-0.5">
                    <AlertCircle className="w-4 h-4 text-red-400" />
                  </div>
                  <div>
                    <p className="font-[var(--font-rajdhani)] text-sm text-white">Parking Full</p>
                    <p className="font-[var(--font-rajdhani)] text-xs text-[#7dd3fc]">
                      Entry gate blocks additional vehicles until a slot becomes free
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Advantages */}
            <div className="space-y-4">
              <h3 className="font-[var(--font-orbitron)] text-xl font-semibold text-white">
                Key Advantages
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {advantages.map((advantage, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 glass-panel rounded-lg p-4 glow-border-subtle cyber-card advantage-card"
                  >
                    <advantage.icon className="w-5 h-5 text-[#00f0ff] flex-shrink-0" />
                    <span className="font-[var(--font-rajdhani)] text-sm text-white">
                      {advantage.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Logic diagram */}
        <div className="glass-panel rounded-xl p-8 glow-border-subtle logic-diagram">
          <h3 className="font-[var(--font-orbitron)] text-xl font-semibold text-white text-center mb-8">
            Digital Logic Flow
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {[
              { icon: Car, label: "Car Arrival" },
              { label: "→" },
              { icon: () => <div className="grid grid-cols-2 gap-0.5"><div className="w-2 h-2 bg-[#00f0ff]" /><div className="w-2 h-2 bg-[#00f0ff]" /><div className="w-2 h-2 bg-[#00f0ff]" /><div className="w-2 h-2 bg-gray-600" /></div>, label: "Slot Sensors" },
              { label: "→" },
              { icon: () => <span className="font-mono text-xs">AND/OR</span>, label: "Logic Gates" },
              { label: "→" },
              { icon: () => <div className={`w-6 h-2 rounded ${filledCount < TOTAL_SLOTS ? 'bg-green-500' : 'bg-red-500'}`} />, label: "Gate Control" },
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                {item.icon ? (
                  <div className="flex flex-col items-center gap-2 logic-step">
                    <div className="w-14 h-14 rounded-lg glass-panel glow-border-subtle flex items-center justify-center">
                      {typeof item.icon === 'function' ? <item.icon /> : <item.icon className="w-6 h-6 text-[#00f0ff]" />}
                    </div>
                    <span className="font-[var(--font-rajdhani)] text-xs text-[#7dd3fc] text-center">
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
