"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const projectHost = "SHAZIL ALI";

const teamMembers = [
  "ARHAM SAQIB",
  "RUBASHA AFZAAL",
  "HASSAN ALI",
  "AYESHA",
  "BURHAN ASLAM",
];

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const supervisorRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Initial state
      gsap.set([titleRef.current, supervisorRef.current, teamRef.current], {
        opacity: 0,
      });

      // Title animation with glow
      tl.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 50,
          scale: 0.9,
          filter: "blur(10px)",
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.5,
          ease: "power3.out",
        }
      )
        // Title glow pulse
        .to(
          titleRef.current,
          {
            textShadow:
              "0 0 20px #00f0ff, 0 0 40px #00f0ff, 0 0 80px #0080ff",
            duration: 0.5,
            ease: "power2.inOut",
            yoyo: true,
            repeat: 1,
          },
          "-=0.5"
        )
        // Supervisor fade in
        .fromTo(
          supervisorRef.current,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.3"
        )
        // Team members stagger
        .fromTo(
          ".team-member",
          {
            opacity: 0,
            y: 20,
            x: -20,
          },
          {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
          },
          "-=0.5"
        )
        // Hold for viewing
        .to({}, { duration: 1.5 })
        // Exit animation
        .to(containerRef.current, {
          opacity: 0,
          scale: 1.1,
          filter: "blur(20px)",
          duration: 1,
          ease: "power2.inOut",
          onComplete: onComplete,
        });
    }, containerRef);

    return () => ctx.revert();
  }, [mounted, onComplete]);

  if (!mounted) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,240,255,0.1)_0%,transparent_70%)]" />
      
      {/* Scan line effect */}
      <div className="absolute inset-0 scan-effect overflow-hidden" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="particle float-animation"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Main title */}
        <h1
          ref={titleRef}
          className="font-[var(--font-orbitron)] text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider mb-12 glow-text text-[#00f0ff]"
        >
          <span className="block">NextGen</span>
          <span className="block text-6xl md:text-8xl lg:text-9xl">Infrastructure</span>
          <span className="block">System</span>
        </h1>
        
        {/* Decorative line */}
        <div className="w-48 h-[2px] mx-auto mb-10 bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent pulse-glow" />
        
        {/* Supervisor section */}
        <div ref={supervisorRef} className="mb-12">
          <p className="font-[var(--font-rajdhani)] text-sm md:text-base tracking-[0.3em] text-[#7dd3fc] uppercase mb-3">
            DLD Supervisor
          </p>
          <h2 className="font-[var(--font-orbitron)] text-2xl md:text-3xl font-semibold text-white glow-text-subtle">
            SIR KHURAM SHAHZAD
          </h2>
        </div>
        
        {/* Project Host */}
        <div ref={teamRef}>
          <p className="font-[var(--font-rajdhani)] text-sm tracking-[0.3em] text-[#7dd3fc] uppercase mb-4">
            Hosted By
          </p>
          <div className="team-member glass-panel px-8 py-4 rounded-lg glow-border mb-8 inline-block">
            <span className="font-[var(--font-orbitron)] text-xl md:text-2xl font-bold tracking-wider text-[#00f0ff] glow-text">
              {projectHost}
            </span>
          </div>
          
          <p className="font-[var(--font-rajdhani)] text-sm tracking-[0.3em] text-[#7dd3fc] uppercase mb-6">
            Team Members
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {teamMembers.map((member) => (
              <div
                key={member}
                className="team-member glass-panel px-4 py-3 rounded-lg glow-border-subtle"
              >
                <span className="font-[var(--font-rajdhani)] text-sm md:text-base font-medium tracking-wider text-white">
                  {member}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Loading indicator */}
        <div className="mt-16 flex items-center justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse" />
          <span className="font-[var(--font-rajdhani)] text-xs tracking-widest text-[#7dd3fc] uppercase">
            Initializing System
          </span>
          <div className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse" style={{ animationDelay: '0.3s' }} />
        </div>
      </div>
    </div>
  );
}
