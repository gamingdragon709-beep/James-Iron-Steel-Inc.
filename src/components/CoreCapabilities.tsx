import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Check, X, Shield } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface CoreCapabilitiesProps {
  onSelectService: (serviceName: string) => void;
}

export const CoreCapabilities: React.FC<CoreCapabilitiesProps> = ({ onSelectService }) => {
  const [selectedSpec, setSelectedSpec] = useState<{
    title: string;
    description: string;
    standards: string[];
    turnaround: string;
    materials: string[];
  } | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Header Reveal
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        );
      }

      // Divider Line Expansion
      if (dividerRef.current) {
        gsap.fromTo(
          dividerRef.current,
          { scaleX: 0, opacity: 0 },
          {
            scaleX: 1,
            opacity: 1,
            duration: 0.8,
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

      // Service Cards Stagger
      if (cardsContainerRef.current) {
        gsap.fromTo(
          cardsContainerRef.current.children,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsContainerRef.current,
              start: 'top 82%',
              toggleActions: 'play none none none'
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const capabilities = [
    {
      id: 'commercial',
      badge: 'Commercial',
      title: 'COMMERCIAL METALWORK',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8MFiA-nnShk7YL2MbdT6N5JXX1pBaXOW2ICzIpqsCCcIqbieklSezpDatHF3B2OP9DfYk0UKMU9Q7ezBerlSewZFUlmrLcyXKms6br1WsRKg-gF3om2Gn7k8wzT4A8LXqoWdrPwe6R58MymBTd3_UHZ3p6mtoiYbDn0w5pC3IqeA3EHwLvw9yEJUnAo5TYYSAD99vCUwmZzfFzF35K8AWEaH7I9M1CWNNgZ_R8A',
      imageAlt: 'Commercial structural steel building framework',
      description: 'Certified structural steel packages, industrial stair towers, exterior egress balconies, bollards, and custom architectural features engineered to exact blueprints.',
      bullets: [
        'Commercial Stairs & ADA Railings',
        'Structural Beams, Columns & Canopies',
        'Automated Security Gates & Access Systems'
      ],
      specData: {
        title: 'Commercial Structural Metalwork Standards',
        description: 'Engineered for full code compliance with the NC and SC Department of Insurance, OSHA egress standards, and AISC structural steel connection protocols.',
        standards: [
          'AISC Certified fabrication standards and welding procedures (AWS D1.1 & D1.3)',
          'Complete submittal packages including PE-stamped engineered shop drawings',
          'Field coordination with General Contractors for on-time crane pick milestones',
          'Heavy gauge base plates, gussets, and anchor bolt templates shipped ahead of pour'
        ],
        turnaround: '2 to 4 weeks depending on structural tonnage',
        materials: ['A36 Carbon Steel', 'A500 Grade B HSS Tubing', 'W-Flange Beams', 'Bar Grating', 'Galvanized Decking']
      }
    },
    {
      id: 'residential',
      badge: 'Residential',
      title: 'RESIDENTIAL RAILINGS & GATES',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAz3-FnJoEaQG_A2eMvCF_863ydqFi1sWtF2sEk8sNqyHMvklWAZSe5IluB23jCAZ0p93kRyl8eBJ4akhXdwYoyA7RxeiR1hqwqYmD4bi6DzHmkt9gOu09an2bkxkbQyc41jrlD1ditq5P035XiBtyh7Ql57bxqfAnp7B4EnF5Jb7wCwyoSGZyFRs8SmRwBNdNoJwfodHVWXyP3LDOjRClIMYW8886Ok2CYSINW0w',
      imageAlt: 'Luxury residential modern iron railing inside custom home',
      description: 'Artisanal interior and exterior railings, floating mono-stringer staircases, wrought-iron courtyard gates, bahama shutters, and estate entry accents tailored for luxury homes.',
      bullets: [
        'Custom Interior Handrails & Cable Systems',
        'Driveway Gates & Ornamental Fencing',
        'Custom Mailbox Posts & Exterior Iron Details'
      ],
      specData: {
        title: 'Architectural Residential Craftsmanship Standards',
        description: 'Bespoke residential architectural elements built to exceed residential building codes (IRC) with invisible weld seams and heirloom-grade finishes.',
        standards: [
          'Strict 4-inch sphere code clearance on all guardrails and balustrades',
          'High-tolerance laser cut stair brackets for level hardwood tread placement',
          'Full-penetration TIG welds ground flush for seamless organic touch points',
          'Custom estate entry gates balanced on heavy-duty ball-bearing hinges'
        ],
        turnaround: '2 to 3 weeks from site measurement sign-off',
        materials: ['Solid Wrought Iron Bar Stock', 'Architectural Steel Tube', 'Tempered Glass Panels', '316 Marine Cable', 'Oak Tread Accents']
      }
    },
    {
      id: 'finishes',
      badge: 'Finishes',
      title: 'SPECIALTY POWDER COATING',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzJhyIMpc4uaBoqYDetrZ4eIvn3-U1_wASCveCxTL0grCH_E1xNg7XRmtYjK7RUng3Fkfvc04GuaH9W1lZkgMPLz_n0ngAXtQ4G2r3DDlTHSzaHTp9b2AtnMEYLReKtTEcwfdbWSms3bSMRv9HyMWvXBog4Fk7EkCoM_c61oWDIBiCsF24MUbTuXy8sFCqSXQy64y80miBcERjmycujjnkU5iqO-uMAoHQH0kTkQ',
      imageAlt: 'Precision metal powder coating and architectural finishing',
      description: 'Industrial-grade powder coating facilities providing enduring defense against the Southern elements, alongside bespoke architectural bronze, stainless, and aluminum fabrication.',
      bullets: [
        'Super-Durable Powder Coating Finishes',
        'Marine-Grade Aluminum & Stainless Steel',
        'Custom Architectural Restoration Work'
      ],
      specData: {
        title: 'Powder Coating & Metallurgy Standards',
        description: 'Our in-house 24-foot batch powder coating oven and multi-stage chemical pretreatment line provide multi-decade defense against heat, humidity, and coastal salt.',
        standards: [
          'AAMA 2604 / 2605 super-durable thermoset powder coat formulations',
          'Blast cleaning to SSPC-SP 10 (Near-White Metal) prior to primer coating',
          'Zinc-rich epoxy primer applied to all exterior ferrous substrates',
          'Salt spray resistance tested to ASTM B117 standards up to 4,000+ hours'
        ],
        turnaround: '5 to 7 business days for coating services',
        materials: ['Tiger Drylac Series 38 & 58', '6063-T6 Marine Aluminum', '304 & 316 Stainless Steel', 'Architectural C385 Bronze', 'Hot-Dip Galvanized Core']
      }
    }
  ];

  return (
    <section ref={sectionRef} className="bg-white py-24 text-[#18181B]" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Matching High-Impact Industrial Craft */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-heading font-extrabold text-sm text-[#D91D24] tracking-[0.2em] uppercase mb-2">
            WHAT WE DO
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#18181B] uppercase leading-none">
            OUR SERVICES
          </h2>
          <div ref={dividerRef} className="w-16 h-1 bg-[#D91D24] mx-auto mt-4 mb-4 will-change-transform"></div>
          <p className="text-zinc-600 text-sm sm:text-base font-body leading-relaxed">
            From residential railings to commercial structural steel, we bring precision and durability to every project across Monroe and the Carolinas.
          </p>
        </div>

        {/* 3-Column Service Cards in #F4F4F5 with 1px border */}
        <div ref={cardsContainerRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {capabilities.map((item) => (
            <article 
              key={item.id}
              className="card-interactive bg-[#F4F4F5] rounded-2xl overflow-hidden shadow-sm flex flex-col group border border-zinc-200 hover:border-[#D91D24]"
            >
              <div className="img-zoom-container relative h-64 bg-zinc-200">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <span className="absolute top-4 right-4 bg-black/85 text-white text-[11px] font-heading font-bold tracking-wider px-3 py-1 rounded-full uppercase shadow-md">
                  {item.badge}
                </span>
              </div>

              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-2xl font-extrabold text-[#18181B] uppercase mb-3 transition-colors duration-200 group-hover:text-[#D91D24]">
                    {item.title}
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed mb-6 font-body">
                    {item.description}
                  </p>
                  
                  <ul className="text-xs text-zinc-600 space-y-2 mb-6 border-t border-zinc-200 pt-4 font-body">
                    {item.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-[#D91D24] rounded-full mr-2.5 flex-shrink-0"></span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-zinc-200">
                  <button
                    onClick={() => setSelectedSpec(item.specData)}
                    className="inline-flex items-center gap-1.5 text-xs font-heading font-extrabold text-[#D91D24] hover:text-[#B91C1C] uppercase tracking-wider transition-colors duration-200 group/btn cursor-pointer"
                  >
                    <span>LEARN MORE</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </button>
                  <button
                    onClick={() => onSelectService(item.title)}
                    className="text-[11px] font-heading font-bold text-zinc-500 hover:text-black uppercase tracking-wider transition-colors duration-200 cursor-pointer"
                  >
                    REQUEST QUOTE
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Engineering Spec Modal */}
      {selectedSpec && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity duration-300">
          <div className="animate-modal-in relative w-full max-w-2xl bg-white text-[#18181B] rounded-2xl shadow-2xl p-6 sm:p-8 border border-zinc-200">
            <button
              onClick={() => setSelectedSpec(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-4 h-4 text-[#D91D24]" />
              <span className="font-heading font-bold text-xs text-[#D91D24] tracking-widest uppercase">
                ENGINEERING SPEC SHEET
              </span>
            </div>

            <h3 className="font-heading text-3xl font-extrabold uppercase mb-2 text-[#18181B]">
              {selectedSpec.title}
            </h3>
            <p className="text-sm text-zinc-600 mb-6 font-body">
              {selectedSpec.description}
            </p>

            <div className="space-y-4 mb-6">
              <h4 className="font-heading text-sm font-bold tracking-wider uppercase text-zinc-800">
                FABRICATION & COMPLIANCE PROTOCOLS
              </h4>
              <ul className="space-y-2">
                {selectedSpec.standards.map((st, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-zinc-700">
                    <Check className="w-4 h-4 text-[#D91D24] flex-shrink-0 mt-0.5" />
                    <span>{st}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#F4F4F5] p-4 rounded-xl border border-zinc-200 mb-6 flex flex-col sm:flex-row justify-between gap-4 text-xs">
              <div>
                <span className="font-heading font-bold text-zinc-500 uppercase tracking-wider block mb-1">
                  Standard Shop Turnaround
                </span>
                <span className="font-bold text-[#18181B]">{selectedSpec.turnaround}</span>
              </div>
              <div>
                <span className="font-heading font-bold text-zinc-500 uppercase tracking-wider block mb-1">
                  Common Inventory Alloys
                </span>
                <span className="text-zinc-700">{selectedSpec.materials.join(', ')}</span>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-3 border-t border-zinc-200">
              <button
                onClick={() => setSelectedSpec(null)}
                className="btn-interactive px-5 py-2.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider border border-zinc-300 hover:bg-zinc-100 cursor-pointer"
              >
                Close
              </button>
              <a
                href="#estimate-form"
                onClick={() => {
                  onSelectService(selectedSpec.title);
                  setSelectedSpec(null);
                }}
                className="btn-interactive shimmer-btn px-6 py-2.5 rounded-full bg-[#D91D24] hover:bg-[#B91C1C] text-white font-heading font-bold text-xs uppercase tracking-wider shadow cursor-pointer"
              >
                Inquire For This Capability →
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
