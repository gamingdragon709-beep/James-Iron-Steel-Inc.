import React, { useEffect, useRef } from 'react';
import { Check, ShieldCheck, HardHat } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const WhyChooseUs: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const certCardRef = useRef<HTMLDivElement>(null);
  const bulletsRef = useRef<HTMLDivElement>(null);
  const rightCardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (leftColRef.current) {
        gsap.fromTo(
          leftColRef.current.children[0],
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: leftColRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        );
      }

      if (certCardRef.current) {
        gsap.fromTo(
          certCardRef.current,
          { opacity: 0, scale: 0.95, y: 20 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.75,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: certCardRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        );
      }

      if (bulletsRef.current) {
        gsap.fromTo(
          bulletsRef.current.children,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: bulletsRef.current,
              start: 'top 88%',
              toggleActions: 'play none none none'
            }
          }
        );
      }

      if (rightCardsRef.current) {
        gsap.fromTo(
          rightCardsRef.current.children,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.14,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: rightCardsRef.current,
              start: 'top 82%',
              toggleActions: 'play none none none'
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#0D0D0D] py-24 border-b border-[#27272A]" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column */}
          <div ref={leftColRef} className="lg:col-span-5">
            <div>
              <p className="font-heading font-extrabold text-xs text-[#D91D24] tracking-[0.2em] uppercase mb-2">
                WHY HUGO / JAMES IRON
              </p>
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white uppercase leading-[0.95] tracking-tight mb-8">
                WHY BUILDERS & HOMEOWNERS CHOOSE JAMES IRON & STEEL
              </h2>
            </div>

            {/* Dark AISC Card */}
            <div 
              ref={certCardRef}
              className="bg-[#141416] rounded-2xl p-6 border border-[#27272A] shadow-xl max-w-sm transform hover:scale-[1.02] hover:border-[#D91D24] transition-all duration-300 group"
            >
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-xl bg-[#1E1E22] flex-shrink-0 flex items-center justify-center border border-[#27272A] shadow-inner group-hover:border-[#D91D24] transition-colors duration-300">
                  <span className="font-heading text-2xl font-extrabold text-[#D91D24]">1952</span>
                </div>
                <div>
                  <h4 className="font-heading text-lg font-extrabold text-white tracking-wide uppercase">
                    CERTIFIED FABRICATORS
                  </h4>
                  <p className="text-xs text-zinc-400 font-body">
                    4th Gen Craftsmanship • NC & SC Licensed • Full Liability & Workers' Comp
                  </p>
                </div>
              </div>
            </div>

            {/* Bullets with crimson checkmarks */}
            <div ref={bulletsRef} className="mt-8 space-y-3.5 text-xs text-zinc-300 font-body">
              <div className="flex items-start gap-2.5 group">
                <div className="w-5 h-5 rounded-full bg-[#D91D24]/10 border border-[#D91D24]/30 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:border-[#D91D24] transition-colors">
                  <Check className="w-3.5 h-3.5 text-[#D91D24]" />
                </div>
                <span>Direct shop access — communicate directly with your master fabricator.</span>
              </div>
              <div className="flex items-start gap-2.5 group">
                <div className="w-5 h-5 rounded-full bg-[#D91D24]/10 border border-[#D91D24]/30 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:border-[#D91D24] transition-colors">
                  <Check className="w-3.5 h-3.5 text-[#D91D24]" />
                </div>
                <span>Comprehensive on-site field measurements to guarantee exact tolerances.</span>
              </div>
              <div className="flex items-start gap-2.5 group">
                <div className="w-5 h-5 rounded-full bg-[#D91D24]/10 border border-[#D91D24]/30 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:border-[#D91D24] transition-colors">
                  <Check className="w-3.5 h-3.5 text-[#D91D24]" />
                </div>
                <span>Standard written 1-Year Workmanship Warranty on all fabrications.</span>
              </div>
            </div>

            {/* Credentials chips */}
            <div className="mt-8 pt-6 border-t border-[#27272A] flex items-center gap-4 text-zinc-400 text-xs">
              <span className="flex items-center gap-1.5 font-heading font-bold uppercase tracking-wider text-zinc-300">
                <ShieldCheck className="w-4 h-4 text-[#D91D24]" />
                Bonded & Insured
              </span>
              <span className="text-zinc-600">•</span>
              <span className="flex items-center gap-1.5 font-heading font-bold uppercase tracking-wider text-zinc-300">
                <HardHat className="w-4 h-4 text-[#D91D24]" />
                OSHA Compliant
              </span>
            </div>
          </div>

          {/* Right Column: 01, 02, 03 Cards with Crimson tabular numbers */}
          <div ref={rightCardsRef} className="lg:col-span-7 space-y-5">
            {/* 01 Card */}
            <div className="bg-[#141416] border border-[#27272A] rounded-2xl p-6 sm:p-8 flex items-start gap-6 hover:border-[#D91D24] hover:bg-[#18181C] hover:translate-x-2 transition-all duration-300 shadow-md group cursor-default">
              <span className="font-heading text-4xl sm:text-5xl font-extrabold text-[#D91D24] tracking-tight flex-shrink-0 select-none group-hover:scale-105 transition-transform duration-300 leading-none">
                01
              </span>
              <div>
                <h3 className="font-heading text-2xl font-extrabold text-white uppercase mb-2 group-hover:text-[#D91D24] transition-colors duration-200">
                  QUALITY CRAFTSMANSHIP
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed font-body">
                  Every structural rail, beam, and gate is created with precision, using only certified commercial-grade steel, clean TIG/MIG welding techniques, and architectural finishing that stands the test of time.
                </p>
              </div>
            </div>

            {/* 02 Card */}
            <div className="bg-[#141416] border border-[#27272A] rounded-2xl p-6 sm:p-8 flex items-start gap-6 hover:border-[#D91D24] hover:bg-[#18181C] hover:translate-x-2 transition-all duration-300 shadow-md group cursor-default">
              <span className="font-heading text-4xl sm:text-5xl font-extrabold text-[#D91D24] tracking-tight flex-shrink-0 select-none group-hover:scale-105 transition-transform duration-300 leading-none">
                02
              </span>
              <div>
                <h3 className="font-heading text-2xl font-extrabold text-white uppercase mb-2 group-hover:text-[#D91D24] transition-colors duration-200">
                  FREE ESTIMATES
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed font-body">
                  Complimentary project consultations and on-site measurements to accurately assess plans, elevations, and site requirements before fabrication begins. No hidden line-items, no pressure.
                </p>
              </div>
            </div>

            {/* 03 Card */}
            <div className="bg-[#141416] border border-[#27272A] rounded-2xl p-6 sm:p-8 flex items-start gap-6 hover:border-[#D91D24] hover:bg-[#18181C] hover:translate-x-2 transition-all duration-300 shadow-md group cursor-default">
              <span className="font-heading text-4xl sm:text-5xl font-extrabold text-[#D91D24] tracking-tight flex-shrink-0 select-none group-hover:scale-105 transition-transform duration-300 leading-none">
                03
              </span>
              <div>
                <h3 className="font-heading text-2xl font-extrabold text-white uppercase mb-2 group-hover:text-[#D91D24] transition-colors duration-200">
                  LOCAL EXPERTISE
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed font-body">
                  Born and built in Monroe, North Carolina. We understand regional building codes, wind loads for coastal properties in Oak Island and Wilmington, and architectural review requirements across Lake Norman and Charlotte.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
