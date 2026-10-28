import React, { useState, useEffect, useRef } from 'react';
import { PROJECTS, ProjectItem } from '../data/mockData';
import { Eye, MapPin } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface RecentProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
  onContactClick: () => void;
}

export const RecentProjects: React.FC<RecentProjectsProps> = ({ 
  onSelectProject,
  onContactClick 
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const galleryGridRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'gates', label: 'Gates & Entry' },
    { id: 'stairs', label: 'Staircases' },
    { id: 'coastal', label: 'Coastal' }
  ];

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

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

      if (galleryGridRef.current) {
        gsap.fromTo(
          galleryGridRef.current.children,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: galleryGridRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [activeCategory]);

  return (
    <section ref={sectionRef} className="bg-[#F4F4F5] py-24 text-[#18181B]" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-12">
          <p className="font-heading font-extrabold text-xs text-[#D91D24] tracking-[0.2em] uppercase mb-2">
            OUR WORK
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#18181B] uppercase leading-none">
            RECENT PROJECTS
          </h2>
          <div ref={dividerRef} className="w-16 h-1 bg-[#D91D24] mx-auto mt-4 mb-4 will-change-transform"></div>
          <p className="text-zinc-600 text-sm font-body">
            A sampling of recent custom ironwork and structural steel installations across the Carolinas.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`btn-interactive px-5 py-2.5 rounded-full text-xs font-heading font-extrabold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#0D0D0D] text-white shadow-md scale-105'
                  : 'bg-white text-zinc-700 hover:bg-zinc-100 border border-zinc-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Asymmetrical Project Grid */}
        {activeCategory === 'all' ? (
          <div ref={galleryGridRef} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            
            {/* Large Top Feature (7 cols) */}
            <div 
              onClick={() => onSelectProject(PROJECTS[0])}
              className="card-interactive md:col-span-7 bg-white rounded-2xl overflow-hidden shadow-sm group relative cursor-pointer border border-zinc-200 hover:border-[#D91D24]"
            >
              <div className="img-zoom-container h-80 sm:h-96 relative">
                <img
                  src={PROJECTS[0].image}
                  alt={PROJECTS[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors pointer-events-none"></div>
                <div className="absolute top-4 left-4 bg-black/85 backdrop-blur-sm text-white px-3 py-1 rounded-full text-[11px] font-heading font-bold uppercase tracking-wider">
                  Featured Estate
                </div>
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm text-[#18181B] px-3.5 py-1.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-md">
                  <Eye className="w-3.5 h-3.5 text-[#D91D24]" /> Inspect Blueprint
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-heading text-2xl font-extrabold text-[#18181B] uppercase group-hover:text-[#D91D24] transition-colors">
                      {PROJECTS[0].title}
                    </h3>
                    <p className="text-xs text-zinc-500 font-body mt-0.5">
                      {PROJECTS[0].subtitle}
                    </p>
                  </div>
                  <span className="text-xs font-heading font-bold text-[#D91D24] uppercase tracking-wider flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {PROJECTS[0].location}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Feature (5 cols) */}
            <div 
              onClick={() => onSelectProject(PROJECTS[1])}
              className="card-interactive md:col-span-5 bg-white rounded-2xl overflow-hidden shadow-sm group relative cursor-pointer border border-zinc-200 hover:border-[#D91D24]"
            >
              <div className="img-zoom-container h-80 sm:h-96 relative">
                <img
                  src={PROJECTS[1].image}
                  alt={PROJECTS[1].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors pointer-events-none"></div>
                <div className="absolute top-4 left-4 bg-black/85 backdrop-blur-sm text-white px-3 py-1 rounded-full text-[11px] font-heading font-bold uppercase tracking-wider">
                  Historic Wrought-Iron
                </div>
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm text-[#18181B] px-3.5 py-1.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-md">
                  <Eye className="w-3.5 h-3.5 text-[#D91D24]" /> Inspect Blueprint
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-heading text-2xl font-extrabold text-[#18181B] uppercase group-hover:text-[#D91D24] transition-colors">
                      {PROJECTS[1].title}
                    </h3>
                    <p className="text-xs text-zinc-500 font-body mt-0.5">
                      {PROJECTS[1].subtitle}
                    </p>
                  </div>
                  <span className="text-xs font-heading font-bold text-[#D91D24] uppercase tracking-wider flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {PROJECTS[1].location}
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Row 3 Grid items */}
            {PROJECTS.slice(2, 5).map((proj) => (
              <div 
                key={proj.id}
                onClick={() => onSelectProject(proj)}
                className="card-interactive md:col-span-4 bg-white rounded-2xl overflow-hidden shadow-sm group cursor-pointer border border-zinc-200 hover:border-[#D91D24]"
              >
                <div className="img-zoom-container h-64 relative">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors pointer-events-none"></div>
                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm text-[#18181B] px-3 py-1 rounded-full text-[11px] font-heading font-bold uppercase tracking-wider flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1.5 group-hover:translate-y-0 shadow">
                    <Eye className="w-3 h-3 text-[#D91D24]" /> View Specs
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-xl font-extrabold text-[#18181B] uppercase group-hover:text-[#D91D24] transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-zinc-500 font-body mt-1">
                    {proj.subtitle}
                  </p>
                </div>
              </div>
            ))}

          </div>
        ) : (
          <div ref={galleryGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((proj) => (
              <div 
                key={proj.id}
                onClick={() => onSelectProject(proj)}
                className="card-interactive bg-white rounded-2xl overflow-hidden shadow-sm group cursor-pointer border border-zinc-200 hover:border-[#D91D24]"
              >
                <div className="img-zoom-container h-64 relative">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors pointer-events-none"></div>
                  <div className="absolute top-3 left-3 bg-black/85 backdrop-blur-sm text-white px-3 py-1 rounded-full text-[10px] font-heading font-bold uppercase tracking-wider">
                    {proj.category}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-heading text-xl font-extrabold text-[#18181B] uppercase group-hover:text-[#D91D24] transition-colors">
                      {proj.title}
                    </h3>
                  </div>
                  <p className="text-xs text-zinc-500 font-body mb-3">
                    {proj.subtitle}
                  </p>
                  <span className="text-xs font-heading font-bold text-[#D91D24] uppercase tracking-wider flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {proj.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Action Button */}
        <div className="mt-12 text-center">
          <a
            href="#estimate-form"
            onClick={onContactClick}
            className="btn-interactive shimmer-btn inline-flex items-center px-8 py-4 bg-[#0D0D0D] hover:bg-black text-white rounded-full font-heading font-extrabold text-xs tracking-wider uppercase transition-all duration-200 shadow-md cursor-pointer"
          >
            DISCUSS YOUR CUSTOM PROJECT WITH OUR CRAFTSMEN →
          </a>
        </div>

      </div>
    </section>
  );
};
