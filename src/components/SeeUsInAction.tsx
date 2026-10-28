import React, { useEffect, useRef } from 'react';
import { VIDEO_REELS, VideoReel } from '../data/mockData';
import { Play, Volume2, Instagram, Facebook } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SeeUsInActionProps {
  onPlayReel: (reel: VideoReel) => void;
}

export const SeeUsInAction: React.FC<SeeUsInActionProps> = ({ onPlayReel }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const reelsContainerRef = useRef<HTMLDivElement>(null);

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

      if (reelsContainerRef.current) {
        gsap.fromTo(
          reelsContainerRef.current.children,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: reelsContainerRef.current,
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
    <section ref={sectionRef} className="bg-[#0D0D0D] py-24 text-white border-b border-[#27272A]" id="in-action">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-heading font-extrabold text-xs text-[#D91D24] tracking-[0.2em] uppercase mb-2">
            FOLLOW US
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase leading-none">
            SEE US IN ACTION
          </h2>
          <div ref={dividerRef} className="w-16 h-1 bg-[#D91D24] mx-auto mt-4 mb-4 will-change-transform"></div>
          <p className="text-zinc-400 text-sm font-body">
            Follow along on social media for behind-the-scenes looks at our latest custom metal fabrication and installation projects.
          </p>
        </div>

        {/* 2 Vertical Video Reels with Sound Toggle Pill & Play Button */}
        <div ref={reelsContainerRef} className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {VIDEO_REELS.map((reel) => (
            <div
              key={reel.id}
              onClick={() => onPlayReel(reel)}
              className="card-interactive bg-[#141416] rounded-3xl p-3 border border-[#27272A] shadow-2xl relative group overflow-hidden hover:border-[#D91D24] cursor-pointer"
            >
              <div className="img-zoom-container relative rounded-2xl aspect-[9/16] bg-black">
                <img
                  src={reel.thumbnail}
                  alt={reel.title}
                  className="w-full h-full object-cover opacity-90"
                />
                
                {/* Sound toggle indicator badge at top right */}
                <div className="absolute top-4 right-4 z-10 bg-black/60 backdrop-blur-md p-2 rounded-full border border-white/20 text-white">
                  <Volume2 className="w-3.5 h-3.5" />
                </div>

                {/* Overlay content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40 flex flex-col justify-between p-5 pointer-events-none">
                  <div className="flex justify-between items-center text-xs text-white">
                    <span className="bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-bold text-white font-heading tracking-wider">
                      {reel.handle}
                    </span>
                    <span className="text-zinc-300 font-mono text-[11px]">
                      {reel.duration}
                    </span>
                  </div>

                  <div>
                    <span className="inline-block bg-[#D91D24] text-white font-heading font-extrabold text-[10px] uppercase px-2.5 py-0.5 rounded-full mb-2 shadow-sm">
                      {reel.tag}
                    </span>
                    <h4 className="font-heading text-xl font-extrabold text-white uppercase leading-tight mb-2 group-hover:text-[#D91D24] transition-colors">
                      {reel.title}
                    </h4>
                    <p className="text-xs text-zinc-300 font-body">
                      {reel.description}
                    </p>
                  </div>
                </div>

                {/* Center Play Button */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-14 h-14 rounded-full bg-[#D91D24] flex items-center justify-center text-white shadow-xl transform group-hover:scale-110 group-hover:bg-[#B91C1C] transition-all duration-300">
                    <Play className="w-6 h-6 translate-x-0.5 fill-current" />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Social Buttons */}
        <div className="mt-12 flex justify-center items-center gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-interactive inline-flex items-center gap-2 bg-[#141416] hover:bg-[#1E1E22] text-white text-xs font-heading font-bold uppercase tracking-wider px-7 py-3.5 rounded-full border border-[#27272A] hover:border-[#D91D24] transition-all duration-200 shadow cursor-pointer"
          >
            <Facebook className="w-4 h-4 text-blue-500" />
            <span>Facebook</span>
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-interactive inline-flex items-center gap-2 bg-[#141416] hover:bg-[#1E1E22] text-white text-xs font-heading font-bold uppercase tracking-wider px-7 py-3.5 rounded-full border border-[#27272A] hover:border-[#D91D24] transition-all duration-200 shadow cursor-pointer"
          >
            <Instagram className="w-4 h-4 text-pink-500" />
            <span>Instagram</span>
          </a>
        </div>

      </div>
    </section>
  );
};
