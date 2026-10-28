import React, { useState, useEffect, useRef } from 'react';
import { Calculator, ArrowRight, Clock } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ProjectEstimatorProps {
  onApplyEstimate: (data: { service: string; details: string }) => void;
}

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({ onApplyEstimate }) => {
  const [projectType, setProjectType] = useState<'stairs' | 'railing' | 'gate' | 'commercial' | 'shutters'>('railing');
  const [quantity, setQuantity] = useState<number>(35);
  const [finishType, setFinishType] = useState<string>('powder-coat');
  const [includeInstallation, setIncludeInstallation] = useState<boolean>(true);

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const calcRowRef = useRef<HTMLDivElement>(null);

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

      if (calcRowRef.current) {
        gsap.fromTo(
          calcRowRef.current.children,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.14,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: calcRowRef.current,
              start: 'top 82%',
              toggleActions: 'play none none none'
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const calculateEstimate = () => {
    let baseRate = 0;
    let unitLabel = 'linear feet';
    let leadTime = '2 to 3 Weeks';

    switch (projectType) {
      case 'railing':
        baseRate = 185;
        unitLabel = 'linear feet';
        leadTime = '2.5 Weeks';
        break;
      case 'stairs':
        baseRate = 950;
        unitLabel = 'risers / steps';
        leadTime = '3.5 Weeks';
        break;
      case 'gate':
        baseRate = 2800;
        unitLabel = 'single / double gates';
        leadTime = '3 to 4 Weeks';
        break;
      case 'commercial':
        baseRate = 420;
        unitLabel = 'linear feet';
        leadTime = '3 Weeks';
        break;
      case 'shutters':
        baseRate = 650;
        unitLabel = 'window openings';
        leadTime = '2.5 Weeks';
        break;
    }

    let multiplier = 1.0;
    if (finishType === 'galv-powder') multiplier = 1.25;
    if (finishType === 'marine-grade') multiplier = 1.35;

    const subtotal = baseRate * quantity * multiplier;
    const installCost = includeInstallation ? subtotal * 0.22 : 0;
    const totalLow = Math.round((subtotal + installCost) * 0.9);
    const totalHigh = Math.round((subtotal + installCost) * 1.15);

    return {
      totalLow,
      totalHigh,
      unitLabel,
      leadTime
    };
  };

  const est = calculateEstimate();

  const handleApply = () => {
    const serviceNameMap: Record<string, string> = {
      railing: 'Residential Interior/Exterior Railings',
      stairs: 'Residential Floating Mono-Stringer Stair',
      gate: 'Ornamental Driveway & Courtyard Gates',
      commercial: 'Commercial Structural Steel & Erection',
      shutters: 'Bahama Shutters & Custom Accents'
    };

    const details = `Estimated Project: ${quantity} ${est.unitLabel} of ${serviceNameMap[projectType]}. Finish: ${finishType}. Professional Installation: ${includeInstallation ? 'Yes' : 'Fabrication only'}. Ballpark budget range: $${est.totalLow.toLocaleString()} - $${est.totalHigh.toLocaleString()}.`;
    
    onApplyEstimate({
      service: serviceNameMap[projectType],
      details
    });

    const el = document.getElementById('estimate-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={sectionRef} className="bg-[#0D0D0D] py-24 text-white border-b border-[#27272A]" id="calculator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-14">
          <p className="font-heading font-extrabold text-xs text-[#D91D24] tracking-[0.2em] uppercase mb-2">
            INSTANT PLANNING CALCULATOR
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase leading-none">
            ESTIMATE YOUR PROJECT
          </h2>
          <div ref={dividerRef} className="w-16 h-1 bg-[#D91D24] mx-auto mt-4 mb-4 will-change-transform"></div>
          <p className="text-zinc-400 text-sm font-body">
            Configure your project dimensions and specifications to review typical shop fabrication and installation ranges.
          </p>
        </div>

        <div ref={calcRowRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Left Form Controls */}
          <div className="lg:col-span-7 bg-[#141416] rounded-2xl p-6 sm:p-8 border border-[#27272A] shadow-xl space-y-6">
            
            {/* Step 1: Project Type */}
            <div>
              <label className="block text-xs font-heading font-bold uppercase tracking-wider text-zinc-300 mb-2">
                1. Fabrication Category
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {[
                  { id: 'railing', label: 'Architectural Railing' },
                  { id: 'stairs', label: 'Floating Stair' },
                  { id: 'gate', label: 'Automated Gate' },
                  { id: 'commercial', label: 'Commercial Package' },
                  { id: 'shutters', label: 'Bahama Shutters' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setProjectType(item.id as any);
                      if (item.id === 'stairs') setQuantity(16);
                      else if (item.id === 'gate') setQuantity(1);
                      else if (item.id === 'shutters') setQuantity(8);
                      else setQuantity(35);
                    }}
                    className={`btn-interactive p-3 text-left rounded-xl text-xs font-heading font-extrabold uppercase tracking-wider border transition-all cursor-pointer ${
                      projectType === item.id
                        ? 'bg-[#D91D24]/15 border-[#D91D24] text-[#D91D24]'
                        : 'bg-[#1E1E22] border-[#27272A] text-zinc-300 hover:border-zinc-500'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Quantity / Dimensions */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-heading font-bold uppercase tracking-wider text-zinc-300">
                  2. Approximate Size ({est.unitLabel})
                </label>
                <span className="text-sm font-bold text-[#D91D24] font-mono">
                  {quantity} {est.unitLabel}
                </span>
              </div>
              <input
                type="range"
                min={projectType === 'gate' ? 1 : projectType === 'stairs' ? 8 : 10}
                max={projectType === 'gate' ? 4 : projectType === 'stairs' ? 32 : 150}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-full h-2 bg-[#0D0D0D] rounded-lg appearance-none cursor-pointer accent-[#D91D24]"
              />
              <div className="flex justify-between text-[11px] text-zinc-500 mt-1 font-mono">
                <span>Min: {projectType === 'gate' ? 1 : projectType === 'stairs' ? 8 : 10}</span>
                <span>Max: {projectType === 'gate' ? 4 : projectType === 'stairs' ? 32 : 150}</span>
              </div>
            </div>

            {/* Step 3: Coating Spec */}
            <div>
              <label className="block text-xs font-heading font-bold uppercase tracking-wider text-zinc-300 mb-2">
                3. Metal Finishing & Corrosion Defense
              </label>
              <select
                value={finishType}
                onChange={(e) => setFinishType(e.target.value)}
                className="w-full bg-[#1E1E22] border border-[#27272A] rounded-xl px-4 py-3 text-xs text-zinc-200 focus:border-[#D91D24] focus:outline-none transition-colors"
              >
                <option value="powder-coat">Architectural Super-Durable Powder Coat (Standard)</option>
                <option value="galv-powder">Hot-Dip Galvanized Core + Electrostatic Powder Coat (Exterior & Lakefront)</option>
                <option value="marine-grade">6063-T6 Marine Aluminum or 316 Stainless Steel (Coastal Hurricane Spec)</option>
              </select>
            </div>

            {/* Step 4: Installation Check */}
            <div className="pt-2">
              <label className="flex items-center gap-3 cursor-pointer select-none group">
                <input
                  type="checkbox"
                  checked={includeInstallation}
                  onChange={(e) => setIncludeInstallation(e.target.checked)}
                  className="w-4 h-4 rounded border-zinc-700 text-[#D91D24] focus:ring-[#D91D24] bg-[#1E1E22] transition-colors"
                />
                <span className="text-xs text-zinc-300 font-body group-hover:text-white transition-colors">
                  Include On-Site Turnkey Installation by James Iron & Steel Crew (NC & SC)
                </span>
              </label>
            </div>

          </div>

          {/* Right Live Estimate Breakdown Card */}
          <div className="card-interactive lg:col-span-5 bg-[#141416] rounded-2xl p-6 sm:p-8 border border-[#27272A] shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#27272A]">
                <span className="font-heading text-xs font-extrabold text-[#D91D24] uppercase tracking-wider flex items-center gap-1.5">
                  <Calculator className="w-4 h-4" />
                  Estimated Ballpark
                </span>
                <span className="text-[10px] text-zinc-400 uppercase font-mono">
                  70-Yr Craftsmanship Guarantee
                </span>
              </div>

              {/* Price Range */}
              <div className="my-6">
                <span className="text-xs text-zinc-400 block font-body">Estimated Investment Range:</span>
                <div className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight mt-1 transition-all duration-300">
                  ${est.totalLow.toLocaleString()} – ${est.totalHigh.toLocaleString()}
                </div>
                <p className="text-[11px] text-zinc-400 mt-2 font-body">
                  *Range reflects material alloy, laser measurements, shop TIG welds, and hardware.
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-2.5 text-xs text-zinc-300 font-body border-t border-[#27272A] pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400">Shop Lead Time:</span>
                  <span className="font-semibold text-white flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#D91D24]" />
                    {est.leadTime}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400">On-Site Field Measurement:</span>
                  <span className="font-semibold text-[#D91D24]">Included (Free)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400">Workmanship Warranty:</span>
                  <span className="font-semibold text-white">1-Year Standard Written</span>
                </div>
              </div>
            </div>

            {/* Apply Button */}
            <div className="mt-8 pt-4 border-t border-[#27272A]">
              <button
                type="button"
                onClick={handleApply}
                className="btn-interactive shimmer-btn w-full py-4 px-6 rounded-full bg-[#D91D24] hover:bg-[#B91C1C] text-white font-heading font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg transition-transform cursor-pointer"
              >
                <span>Transfer Estimate To Consultation Form</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
