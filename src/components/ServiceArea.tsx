import React, { useState, useEffect, useRef } from 'react';
import { SERVICE_AREAS } from '../data/mockData';
import { MapPin, Phone } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ServiceArea: React.FC = () => {
  const [activeArea, setActiveArea] = useState(SERVICE_AREAS[0]);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const pillsRef = useRef<HTMLDivElement>(null);

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

      if (pillsRef.current) {
        gsap.fromTo(
          pillsRef.current.children,
          { opacity: 0, scale: 0.9, y: 15 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: 'back.out(1.2)',
            scrollTrigger: {
              trigger: pillsRef.current,
              start: 'top 90%',
              toggleActions: 'play none none none'
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-24 text-[#18181B] border-t border-zinc-200" id="service-area">
      <div className="max-w-4xl mx-auto px-4 text-center">
        
        <div ref={headerRef}>
          <p className="font-heading font-extrabold text-xs text-[#D91D24] tracking-[0.2em] uppercase mb-2">
            WHERE WE WORK
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-[#18181B] uppercase mb-6 leading-none">
            ARCHITECTURAL IRON & STRUCTURAL STEEL AROUND CHARLOTTE & MONROE
          </h2>
        </div>
        <div ref={dividerRef} className="w-16 h-1 bg-[#D91D24] mx-auto mb-6 will-change-transform"></div>

        <p className="text-zinc-600 text-sm sm:text-base leading-relaxed mb-8 font-body">
          James Iron & Steel, Inc. is headquartered in Monroe, North Carolina, and fabricates custom metalwork for property owners and general contractors across North and South Carolina. Custom structural beams, ornamental gates, railings, and specialty finishes are delivered and installed across Charlotte, Lake Norman, Lake Wylie, Waxhaw, Matthews, Concord, Fort Mill, and coastal communities including Wilmington and Oak Island. Call{' '}
          <a
            href="tel:7043098507"
            className="font-bold text-[#D91D24] underline hover:text-[#B91C1C] transition-colors"
          >
            (704) 309-8507
          </a>{' '}
          to discuss your plans or arrange a complimentary site assessment.
        </p>

        {/* Coverage Pills */}
        <div ref={pillsRef} className="flex flex-wrap justify-center gap-2.5 text-xs font-semibold text-zinc-700">
          {SERVICE_AREAS.map((area) => {
            const isSelected = activeArea.id === area.id;
            return (
              <button
                key={area.id}
                onClick={() => setActiveArea(area)}
                className={`btn-interactive px-5 py-2.5 rounded-full font-heading font-extrabold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#0D0D0D] text-white shadow-md border-transparent scale-105'
                    : 'bg-[#F4F4F5] border border-zinc-200 text-zinc-700 hover:border-[#D91D24]'
                }`}
              >
                {area.name}
              </button>
            );
          })}
        </div>

        {/* Active Region Box */}
        <div className="card-interactive mt-8 bg-[#F4F4F5] rounded-2xl p-6 border border-zinc-200 shadow-sm text-left max-w-xl mx-auto flex items-center justify-between gap-4 transition-all duration-300">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-[#D91D24] flex-shrink-0">
              <MapPin className="w-5 h-5 text-[#D91D24]" />
            </div>
            <div>
              <span className="font-heading font-extrabold text-xs uppercase tracking-wider text-[#D91D24] block">
                {activeArea.leadRadius}
              </span>
              <p className="text-base font-extrabold text-[#18181B] font-heading uppercase">
                {activeArea.name}
              </p>
              <p className="text-xs text-zinc-500 font-body">
                {activeArea.detail}
              </p>
            </div>
          </div>
          <a
            href="tel:7043098507"
            className="btn-interactive flex-shrink-0 px-4 py-2 rounded-full bg-white hover:bg-zinc-100 border border-zinc-200 text-xs font-heading font-bold uppercase tracking-wider text-[#18181B] flex items-center gap-1.5 shadow-sm"
          >
            <Phone className="w-3.5 h-3.5 text-[#D91D24]" />
            <span>Call Shop</span>
          </a>
        </div>

      </div>
    </section>
  );
};
