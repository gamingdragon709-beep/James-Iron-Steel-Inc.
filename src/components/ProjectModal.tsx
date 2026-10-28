import React, { useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, Clock, MapPin, ArrowRight } from 'lucide-react';
import { ProjectItem } from '../data/mockData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onRequestQuote: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onRequestQuote }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md transition-opacity duration-300"
      onClick={onClose}
    >
      <div 
        className="animate-modal-in relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#141416] text-zinc-100 rounded-2xl border border-[#27272A] shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-[#1E1E22] hover:bg-[#27272A] border border-zinc-700 text-zinc-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-[#D91D24]/15 text-[#D91D24] border border-[#D91D24]/30 px-3 py-1 rounded-full text-[11px] font-heading font-extrabold tracking-widest uppercase">
              {project.category}
            </span>
            <span className="flex items-center text-xs text-zinc-400 gap-1 font-heading font-bold tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-[#D91D24]" />
              {project.location}
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold uppercase text-white tracking-tight leading-none">
            {project.title}
          </h2>
          <p className="text-sm text-zinc-400 mt-1 font-body">{project.subtitle}</p>
        </div>

        {/* Project Image */}
        <div className="img-zoom-container relative rounded-xl overflow-hidden h-72 sm:h-96 w-full mb-6 border border-[#27272A]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
          <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm border border-zinc-700 px-3 py-1.5 rounded-full text-xs text-[#D91D24] font-heading font-bold tracking-wider uppercase">
            JIS Fabrication Archive • Monroe, NC
          </div>
        </div>

        {/* Overview */}
        <div className="mb-6">
          <h3 className="font-heading font-extrabold text-xs text-[#D91D24] tracking-widest uppercase mb-2">
            PROJECT OVERVIEW
          </h3>
          <p className="text-sm text-zinc-300 leading-relaxed font-body">
            {project.description}
          </p>
        </div>

        {/* Engineering Specifications Grid */}
        <div className="mb-6 bg-[#0D0D0D] rounded-xl p-5 border border-[#27272A]">
          <h3 className="font-heading font-bold text-xs text-white tracking-widest uppercase mb-4 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#D91D24]" />
            ENGINEERING & MATERIAL SPECIFICATIONS
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="bg-[#141416] p-3.5 rounded-lg border border-zinc-800 hover:border-[#D91D24] transition-colors">
              <span className="text-zinc-400 block mb-1 uppercase font-heading font-bold tracking-wider">Primary Alloy</span>
              <span className="text-zinc-200 font-semibold">{project.specs.material}</span>
            </div>
            <div className="bg-[#141416] p-3.5 rounded-lg border border-zinc-800 hover:border-[#D91D24] transition-colors">
              <span className="text-zinc-400 block mb-1 uppercase font-heading font-bold tracking-wider">Protective Coating</span>
              <span className="text-zinc-200 font-semibold">{project.specs.finish}</span>
            </div>
            <div className="bg-[#141416] p-3.5 rounded-lg border border-zinc-800 hover:border-[#D91D24] transition-colors">
              <span className="text-zinc-400 block mb-1 uppercase font-heading font-bold tracking-wider">Shop Tolerances</span>
              <span className="text-zinc-200 font-semibold">{project.specs.tolerances}</span>
            </div>
            <div className="bg-[#141416] p-3.5 rounded-lg border border-zinc-800 hover:border-[#D91D24] transition-colors">
              <span className="text-zinc-400 block mb-1 uppercase font-heading font-bold tracking-wider">Turnaround Schedule</span>
              <span className="text-zinc-200 font-semibold flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#D91D24]" />
                {project.specs.leadTime}
              </span>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-8">
          <h3 className="font-heading font-extrabold text-xs text-[#D91D24] tracking-widest uppercase mb-3">
            FABRICATION & INSTALLATION HIGHLIGHTS
          </h3>
          <ul className="space-y-2">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-300 font-body">
                <CheckCircle2 className="w-4 h-4 text-[#D91D24] flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#27272A]">
          <div className="text-xs text-zinc-400 font-body">
            Need similar structural or architectural metalwork fabricated?
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="btn-interactive px-5 py-2.5 rounded-full border border-zinc-700 hover:border-zinc-500 text-xs text-zinc-300 hover:text-white font-heading font-bold tracking-wider uppercase transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onRequestQuote(project.title);
                onClose();
              }}
              className="btn-interactive shimmer-btn flex-1 sm:flex-initial px-6 py-2.5 rounded-full bg-[#D91D24] hover:bg-[#B91C1C] text-white font-heading font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-colors shadow-lg cursor-pointer"
            >
              <span>Request Quote For This Build</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
