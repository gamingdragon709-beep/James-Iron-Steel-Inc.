import React, { useState, useEffect, useRef } from 'react';
import { FINISHES, FinishOption } from '../data/mockData';
import { Sparkles, ShieldCheck, Sun, Check, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface FinishStudioProps {
  onSelectFinish: (finishName: string) => void;
}

export const FinishStudio: React.FC<FinishStudioProps> = ({ onSelectFinish }) => {
  const [selectedFinish, setSelectedFinish] = useState<FinishOption>(FINISHES[0]);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const swatchesRef = useRef<HTMLDivElement>(null);
  const specCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        );
      }

      if (dividerRef.current) {
        gsap.fromTo(
          dividerRef.current,
          { scaleX: 0, opacity: 0 },
          {
            scaleX: 1,
            opacity: 1,
            duration: 0.75,
            ease: 'power3.out',
            transformOrigin: 'center',
            scrollTrigger: {
              trigger: dividerRef.current,
              start: 'top 88%',
              toggleActions: 'play none none none'
            }
          }
        );
      }

      if (swatchesRef.current) {
        gsap.fromTo(
          swatchesRef.current.children,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.65,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: swatchesRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        );
      }

      if (specCardRef.current) {
        gsap.fromTo(
          specCardRef.current,
          { opacity: 0, scale: 0.96, y: 25 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: specCardRef.current,
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
    <section ref={sectionRef} className="bg-[#0D0D0D] py-24 text-white border-y border-[#27272A]" id="finishes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-14">
          <p className="font-heading font-extrabold text-xs text-[#D91D24] tracking-[0.2em] uppercase mb-2">
            IN-HOUSE COATINGS FACILITY
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase text-white leading-none">
            ARCHITECTURAL FINISH STUDIO
          </h2>
          <div ref={dividerRef} className="w-16 h-1 bg-[#D91D24] mx-auto mt-4 mb-4 will-change-transform"></div>
          <p className="text-zinc-400 text-sm font-body">
            Our 24ft batch powder-coat oven and multi-stage zinc pretreatment line deliver multi-decade protection against Carolina humidity and UV radiation.
          </p>
        </div>

        {/* Studio Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Swatches Selector */}
          <div ref={swatchesRef} className="lg:col-span-5 space-y-3">
            <h3 className="font-heading font-extrabold text-xs text-[#D91D24] uppercase tracking-wider mb-2">
              SELECT ARCHITECTURAL PATINA / POWDER SPEC:
            </h3>

            {FINISHES.map((finish) => {
              const isSelected = selectedFinish.id === finish.id;
              return (
                <div
                  key={finish.id}
                  onClick={() => setSelectedFinish(finish)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all duration-300 flex items-center justify-between group ${
                    isSelected
                      ? 'bg-[#18181C] border-[#D91D24] shadow-lg translate-x-1.5'
                      : 'bg-[#141416] border-[#27272A] hover:border-zinc-500 hover:translate-x-1'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    {/* Color Swatch Circle */}
                    <div
                      className="w-10 h-10 rounded-full border-2 border-zinc-700 shadow-inner flex-shrink-0 relative overflow-hidden transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: finish.hex }}
                    >
                      {isSelected && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                          <Check className="w-4 h-4 text-white drop-shadow" />
                        </div>
                      )}
                    </div>
                    <div>
                      <h4 className="font-heading text-base font-extrabold text-white uppercase tracking-wider group-hover:text-[#D91D24] transition-colors">
                        {finish.name}
                      </h4>
                      <p className="text-[11px] text-zinc-400 font-mono">
                        {finish.code} • {finish.glossLevel}
                      </p>
                    </div>
                  </div>

                  <span className={`text-xs font-heading font-bold uppercase tracking-wider transition-colors ${isSelected ? 'text-[#D91D24]' : 'text-zinc-500'}`}>
                    {isSelected ? 'Active Spec' : 'Inspect'}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Right Active Spec & Simulation Display */}
          <div 
            ref={specCardRef}
            className="lg:col-span-7 bg-[#141416] rounded-2xl border border-[#27272A] p-6 sm:p-8 shadow-2xl relative overflow-hidden card-interactive"
          >
            {/* Ambient glow */}
            <div 
              className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-[80px] pointer-events-none opacity-25 transition-colors duration-500"
              style={{ backgroundColor: selectedFinish.hex === '#F4F5F7' ? '#ffffff' : selectedFinish.hex }}
            ></div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#27272A]">
              <div>
                <span className="text-[11px] font-heading font-extrabold text-[#D91D24] uppercase tracking-widest block mb-1">
                  CURRENT SPECIFICATION
                </span>
                <h3 className="font-heading text-3xl font-extrabold uppercase text-white">
                  {selectedFinish.name}
                </h3>
              </div>
              <div 
                className="px-4 py-2 rounded-lg border border-zinc-700 text-xs font-mono font-semibold shadow-inner transition-colors duration-300"
                style={{ backgroundColor: selectedFinish.hex, color: selectedFinish.hex === '#F4F5F7' ? '#0D0D0D' : '#FFFFFF' }}
              >
                HEX {selectedFinish.hex}
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-zinc-300 font-body leading-relaxed my-6">
              {selectedFinish.description}
            </p>

            {/* Technical Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-[#0D0D0D] p-4 rounded-xl border border-[#27272A] hover:border-[#D91D24] transition-colors">
                <div className="flex items-center gap-1.5 text-[#D91D24] mb-1 font-heading text-xs uppercase font-bold tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Corrosion Defense
                </div>
                <div className="text-white font-extrabold text-lg font-heading">
                  {selectedFinish.corrosionHours}
                </div>
                <div className="text-[11px] text-zinc-400 mt-0.5 font-body">Salt Fog Resistance</div>
              </div>

              <div className="bg-[#0D0D0D] p-4 rounded-xl border border-[#27272A] hover:border-[#D91D24] transition-colors">
                <div className="flex items-center gap-1.5 text-[#D91D24] mb-1 font-heading text-xs uppercase font-bold tracking-wider">
                  <Sun className="w-3.5 h-3.5" />
                  Gloss Level
                </div>
                <div className="text-white font-extrabold text-lg font-heading">
                  {selectedFinish.glossLevel}
                </div>
                <div className="text-[11px] text-zinc-400 mt-0.5 font-body">Specular Reflection</div>
              </div>

              <div className="bg-[#0D0D0D] p-4 rounded-xl border border-[#27272A] hover:border-[#D91D24] transition-colors">
                <div className="flex items-center gap-1.5 text-[#D91D24] mb-1 font-heading text-xs uppercase font-bold tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  Tactile Surface
                </div>
                <div className="text-white font-extrabold text-lg font-heading">
                  {selectedFinish.surfaceTexture}
                </div>
                <div className="text-[11px] text-zinc-400 mt-0.5 font-body">Fingerprint Inhibiting</div>
              </div>
            </div>

            {/* Best For Tag */}
            <div className="bg-[#0D0D0D] p-4 rounded-xl border border-[#27272A] mb-6 flex items-center justify-between text-xs">
              <div>
                <span className="font-heading font-extrabold text-zinc-400 uppercase tracking-wider block mb-0.5">
                  RECOMMENDED ARCHITECTURAL APPLICATION:
                </span>
                <span className="text-[#D91D24] font-medium font-body">{selectedFinish.bestFor}</span>
              </div>
            </div>

            {/* Action */}
            <div className="flex items-center justify-between pt-4 border-t border-[#27272A]">
              <span className="text-xs text-zinc-400 font-body">
                Custom sample swatches available upon on-site measurement.
              </span>
              <a
                href="#estimate-form"
                onClick={() => onSelectFinish(selectedFinish.name)}
                className="btn-interactive shimmer-btn px-6 py-3 rounded-full bg-[#D91D24] hover:bg-[#B91C1C] text-white font-heading font-extrabold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow cursor-pointer"
              >
                <span>Select for Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
