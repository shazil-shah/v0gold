"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useGsapAnimations() {
  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // Create a context for cleanup
    const ctx = gsap.context(() => {
      // Hero section animations
      gsap.fromTo(
        ".hero-content",
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          delay: 0.5,
        }
      );

      gsap.fromTo(
        ".hero-title-line",
        { opacity: 0, y: 50, skewY: 3 },
        {
          opacity: 1,
          y: 0,
          skewY: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          delay: 0.8,
        }
      );

      gsap.fromTo(
        ".hero-subtitle",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          delay: 1.4,
        }
      );

      gsap.fromTo(
        ".scroll-indicator",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          delay: 2,
        }
      );

      gsap.fromTo(
        ".side-decoration",
        { opacity: 0, x: (i: number) => (i === 0 ? -20 : 20) },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          delay: 1.5,
        }
      );

      // Section reveal animations
      const sections = gsap.utils.toArray<HTMLElement>(".section-reveal");
      sections.forEach((section) => {
        // Section fade in
        gsap.fromTo(
          section,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Section title animation
        const title = section.querySelector(".section-title");
        if (title) {
          gsap.fromTo(
            title,
            { opacity: 0, y: 50, scale: 0.95 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: title,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        // Section description animation
        const description = section.querySelector(".section-description");
        if (description) {
          gsap.fromTo(
            description,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: description,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });

      // Feature cards animation
      const featureCards = gsap.utils.toArray<HTMLElement>(".feature-card");
      featureCards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60, rotateX: 10 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.8,
            delay: i * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Advantage cards animation
      const advantageCards = gsap.utils.toArray<HTMLElement>(".advantage-card");
      advantageCards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            delay: i * 0.08,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Benefit cards animation
      const benefitCards = gsap.utils.toArray<HTMLElement>(".benefit-card");
      benefitCards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            delay: i * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Demo sections animation
      const demos = gsap.utils.toArray<HTMLElement>(".lighting-demo, .rain-demo, .parking-demo");
      demos.forEach((demo) => {
        gsap.fromTo(
          demo,
          { opacity: 0, scale: 0.9, rotateY: -5 },
          {
            opacity: 1,
            scale: 1,
            rotateY: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: demo,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Info sections animation
      const infos = gsap.utils.toArray<HTMLElement>(".lighting-info, .rain-info, .parking-info");
      infos.forEach((info) => {
        gsap.fromTo(
          info,
          { opacity: 0, x: 50 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: info,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Flow diagram animation
      const flowSteps = gsap.utils.toArray<HTMLElement>(".flow-step, .logic-step");
      flowSteps.forEach((step, i) => {
        gsap.fromTo(
          step,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: i * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: step,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Arrows animation
      const arrows = gsap.utils.toArray<HTMLElement>(".arrow");
      arrows.forEach((arrow, i) => {
        gsap.fromTo(
          arrow,
          { opacity: 0, scale: 0 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.3,
            delay: 0.5 + i * 0.1,
            ease: "back.out(2)",
            scrollTrigger: {
              trigger: arrow,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Spec cards animation
      const specCards = gsap.utils.toArray<HTMLElement>(".spec-card");
      specCards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 30, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            delay: i * 0.15,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Overview visual animation
      const overviewVisual = document.querySelector(".overview-visual");
      if (overviewVisual) {
        gsap.fromTo(
          overviewVisual,
          { opacity: 0, scale: 0.8, rotateY: 10 },
          {
            opacity: 1,
            scale: 1,
            rotateY: 0,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: overviewVisual,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Orbit nodes animation
      const orbitNodes = gsap.utils.toArray<HTMLElement>(".orbit-node");
      orbitNodes.forEach((node, i) => {
        gsap.fromTo(
          node,
          { opacity: 0, scale: 0 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            delay: 0.8 + i * 0.1,
            ease: "back.out(2)",
            scrollTrigger: {
              trigger: node,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // CTA panel animation
      const ctaPanel = document.querySelector(".cta-panel");
      if (ctaPanel) {
        gsap.fromTo(
          ctaPanel,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ctaPanel,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Parallax effects for background elements
      gsap.to(".grid-bg", {
        backgroundPosition: "0 100px",
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });
    });

    // Cleanup
    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
}
