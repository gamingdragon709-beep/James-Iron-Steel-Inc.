import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface PrecisionBannerProps {
  onScheduleClick: () => void;
  onViewProjectHighlight: () => void;
}

export const PrecisionBanner: React.FC<PrecisionBannerProps> = ({ 
  onScheduleClick,
  onViewProjectHighlight 
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageCardRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const textColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (imageCardRef.current) {
        gsap.fromTo(
          imageCardRef.current,
          { opacity: 0, scale: 0.96, y: 30 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.85,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: imageCardRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        );
      }

      if (metricsRef.current) {
        gsap.fromTo(
          metricsRef.current.children,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'back.out(1.2)',
            scrollTrigger: {
              trigger: metricsRef.current,
              start: 'top 90%',
              toggleActions: 'play none none none'
            }
          }
        );
      }

      if (textColRef.current) {
        gsap.fromTo(
          textColRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: textColRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#0D0D0D] py-24 border-y border-[#27272A]" id="precision">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Image preview */}
          <div className="lg:col-span-6 relative">
            <div 
              ref={imageCardRef}
              onClick={onViewProjectHighlight}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#27272A] group cursor-pointer card-interactive"
            >
              <div className="img-zoom-container">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvuDlfg8-WML4rEuV3tIyGj3sL4TaOLI2vGod-QNlt2WNTcPsXpc60bytpE3lDl6AJ3Ie1uCHOVbnye3LbVmm1TLJ8W_s9vZvX7fRrKSU8Zs-6BxdMCpFgVElv0oZg-_vMSH4IEiIOK_zp7s4mwhXln0s12OotSdExnhnxf8z41i6E9ryvIm4mKZRkjxnulJt9PmF0LWMnved4R0Zk75DW_ENWmO2wE2CmL9fAXw"
                  alt="Precision architectural metalwork in shop"
                  className="w-full h-[420px] object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0D0D0D]/80 via-transparent to-transparent pointer-events-none"></div>
              
              {/* Badge on bottom */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#141416]/95 border border-[#27272A] rounded-xl px-4 py-2.5 text-xs font-medium text-zinc-300 backdrop-blur-md flex items-center justify-between sm:justify-start gap-3 transition-transform duration-300 group-hover:translate-x-1">
                <div>
                  <span className="text-[#D91D24] font-heading font-extrabold uppercase tracking-wider block">
                    PROJECT HIGHLIGHT:
                  </span>
                  <span className="text-white text-xs font-body font-medium">
                    Lake Norman Modern Steel Staircase
                  </span>
                </div>
                <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-[#D91D24] bg-[#D91D24]/10 px-2.5 py-1 rounded-full border border-[#D91D24]/30">
                  Inspect
                </span>
              </div>
            </div>

            {/* Quick Spec Metrics Pill */}
            <div ref={metricsRef} className="mt-4 grid grid-cols-3 gap-3 text-center">
              <div className="bg-[#141416] border border-[#27272A] p-3.5 rounded-xl hover:border-[#D91D24] transition-colors duration-200">
                <span className="font-heading font-extrabold text-2xl text-[#D91D24] block">1/16"</span>
                <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-zinc-400">Shop Tolerance</span>
              </div>
              <div className="bg-[#141416] border border-[#27272A] p-3.5 rounded-xl hover:border-[#D91D24] transition-colors duration-200">
                <span className="font-heading font-extrabold text-2xl text-[#D91D24] block">100%</span>
                <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-zinc-400">Full-Penetration</span>
              </div>
              <div className="bg-[#141416] border border-[#27272A] p-3.5 rounded-xl hover:border-[#D91D24] transition-colors duration-200">
                <span className="font-heading font-extrabold text-2xl text-[#D91D24] block">AISC</span>
                <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-zinc-400">Certified Welds</span>
              </div>
            </div>
          </div>

          {/* Right: Typography & Narrative Matching Screenshot */}
          <div ref={textColRef} className="lg:col-span-6 lg:pl-6 text-left">
            <p className="font-heading font-extrabold text-xs text-[#D91D24] tracking-[0.2em] uppercase mb-3">
              SEE THE DIFFERENCE
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase leading-[0.95] mb-6">
              PRECISION. EVERY JOINT. EVERY TIME.
            </h2>
            
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-5 font-body">
              Unlike mass distributors who ship modular components that rattle and rust, James Iron & Steel measures, welds, and finishes every assembly by hand in our Monroe shop.
            </p>
            
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-8 font-body">
              We uphold tight tolerances, weld clean seamless joints, and apply multi-stage finishes built to withstand heavy foot traffic, salt air, and Carolina weather.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#estimate-form"
                onClick={onScheduleClick}
                className="btn-interactive shimmer-btn inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#D91D24] hover:bg-[#B91C1C] text-white font-extrabold font-heading text-sm tracking-wider uppercase transition-all duration-200 shadow-xl text-center cursor-pointer"
              >
                GET YOUR FREE ESTIMATE
              </a>
              <a
                href="#why-us"
                className="btn-interactive inline-flex items-center justify-center px-6 py-4 rounded-full border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-heading font-bold text-xs uppercase tracking-wider transition-colors duration-200 text-center"
              >
                Explore Fabrication Standards →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
