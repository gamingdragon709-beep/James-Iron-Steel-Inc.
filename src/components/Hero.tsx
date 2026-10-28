import React, { useEffect, useRef } from 'react';
import { Award, MapPin, ShieldCheck, DollarSign, ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  onEstimateClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onEstimateClick }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const titleLine1Ref = useRef<HTMLSpanElement>(null);
  const titleLine2Ref = useRef<HTMLSpanElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaButtonsRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const trustBarRef = useRef<HTMLDivElement>(null);

  // Guarantee seamless video playback across all browsers and iOS/Android devices
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.defaultMuted = true;
      video.muted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn('Video autoplay waiting for gesture or ready state:', err);
        });
      }
    }
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      if (imageContainerRef.current) {
        tl.fromTo(
          imageContainerRef.current,
          { opacity: 0.5 },
          { opacity: 1, duration: 0.8, ease: 'power2.out' }
        );
      }

      if (videoRef.current && window.innerWidth >= 1024) {
        gsap.to(videoRef.current, {
          yPercent: 8,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.6
          }
        });
      }

      // Staggered Headline Reveal
      const titleWords = [titleLine1Ref.current, titleLine2Ref.current].filter(Boolean);
      if (titleWords.length > 0) {
        tl.fromTo(
          titleWords,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: 'power3.out' },
          '-=0.4'
        );
      }

      // Eyebrow Tagline
      if (eyebrowRef.current) {
        tl.fromTo(
          eyebrowRef.current,
          { opacity: 0, letterSpacing: '0.1em', y: 10 },
          { opacity: 1, letterSpacing: '0.2em', y: 0, duration: 0.6 },
          '-=0.4'
        );
      }

      // Supporting Paragraph
      if (descRef.current) {
        tl.fromTo(
          descRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.3'
        );
      }

      // CTA button
      if (ctaButtonsRef.current) {
        tl.fromTo(
          ctaButtonsRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5 },
          '-=0.2'
        );
      }

      // Scroll Indicator
      if (scrollIndicatorRef.current) {
        tl.fromTo(
          scrollIndicatorRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.5 },
          '-=0.2'
        );
      }

      // Trust Bar Entrance
      if (trustBarRef.current) {
        gsap.fromTo(
          trustBarRef.current.children,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: trustBarRef.current,
              start: 'top 95%',
              toggleActions: 'play none none none'
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[92vh] flex flex-col justify-between bg-[#0D0D0D] overflow-hidden pt-28 sm:pt-32 pb-12"
    >
      {/* Background Video Layer with Absolute Positioning & Correct Stacking */}
      <div 
        ref={imageContainerRef}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="/hero-video-poster.jpg"
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          <source src="/assets/aistudio/mixkit-buildings-under-construction-aerial-view-4010-full-hd.mp4" type="video/mp4" />
        </video>
        {/* Subtle Dark Overlay to Ensure High Contrast for Text */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>
      </div>

      {/* Hero Content - Clean Foreground with High Stacking Context */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center my-auto flex flex-col items-center pt-4 sm:pt-8">
        
        {/* Monumental Headline */}
        <h1 className="font-heading text-5xl sm:text-7xl md:text-8xl text-white font-extrabold tracking-tight uppercase mb-3 drop-shadow-md leading-[0.95]">
          <span ref={titleLine1Ref} className="block sm:inline mr-0 sm:mr-4">JAMES</span>
          <span ref={titleLine2Ref} className="block sm:inline text-white">IRON & STEEL</span>
        </h1>

        {/* Eyebrow Tagline */}
        <p 
          ref={eyebrowRef}
          className="font-heading text-sm sm:text-base text-zinc-300 tracking-[0.2em] uppercase font-bold max-w-2xl mt-1"
        >
          ROOFING • STRUCTURAL STEEL • ARCHITECTURAL RAILINGS
        </p>

        {/* Subtitle */}
        <p 
          ref={descRef}
          className="max-w-xl text-zinc-300 text-xs sm:text-sm mt-4 font-body leading-relaxed"
        >
          Over seven decades of unyielding structural fabrication, ornamental iron craft, and certified commercial steel across Monroe, Charlotte, and the Carolinas.
        </p>

        {/* Centered Pill Button */}
        <div 
          ref={ctaButtonsRef}
          className="mt-8 flex flex-col sm:flex-row items-center gap-4"
        >
          <button
            onClick={onEstimateClick}
            className="btn-interactive shimmer-btn px-9 py-4 rounded-full border border-white/80 bg-white/10 backdrop-blur-md text-white font-heading font-extrabold tracking-widest text-xs uppercase hover:bg-white hover:text-black transition-all duration-300 shadow-xl cursor-pointer"
          >
            GET A FREE ESTIMATE
          </button>
        </div>

        {/* Scroll Indicator */}
        <div 
          ref={scrollIndicatorRef}
          className="mt-10 flex flex-col items-center text-zinc-400 text-xs uppercase tracking-widest"
        >
          <span className="mb-1 text-[11px] tracking-widest font-heading font-bold text-zinc-300">SCROLL</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-zinc-300" />
        </div>
      </div>

      {/* Trust Bar Container (Light Rounded Box) */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 mt-6">
        <div 
          ref={trustBarRef}
          className="bg-white rounded-2xl shadow-2xl p-4 sm:p-5 grid grid-cols-2 lg:grid-cols-4 gap-4 text-[#18181B] divide-y lg:divide-y-0 lg:divide-x divide-zinc-200 border border-zinc-200"
        >
          {/* Trust item 1 */}
          <div className="flex items-center space-x-3 px-2 group cursor-default">
            <span className="w-10 h-10 rounded-full bg-[#F4F4F5] border border-zinc-200 flex items-center justify-center text-[#D91D24] flex-shrink-0 group-hover:scale-110 transition-transform">
              <DollarSign className="w-5 h-5 text-[#D91D24]" />
            </span>
            <div>
              <p className="text-[11px] font-body font-bold uppercase tracking-wider text-zinc-500">
                NO OBLIGATION
              </p>
              <p className="font-heading text-base sm:text-lg font-extrabold text-[#18181B] leading-tight">
                FREE ESTIMATES
              </p>
            </div>
          </div>

          {/* Trust item 2 */}
          <div className="flex items-center space-x-3 px-2 pt-3 lg:pt-0 group cursor-default">
            <span className="w-10 h-10 rounded-full bg-[#F4F4F5] border border-zinc-200 flex items-center justify-center text-[#D91D24] flex-shrink-0 group-hover:scale-110 transition-transform">
              <MapPin className="w-5 h-5 text-[#D91D24]" />
            </span>
            <div>
              <p className="text-[11px] font-body font-bold uppercase tracking-wider text-zinc-500">
                SERVICE AREA
              </p>
              <p className="font-heading text-base sm:text-lg font-extrabold text-[#18181B] leading-tight">
                MONROE & CHARLOTTE, NC
              </p>
            </div>
          </div>

          {/* Trust item 3 */}
          <div className="flex items-center space-x-3 px-2 pt-3 lg:pt-0 group cursor-default">
            <span className="w-10 h-10 rounded-full bg-[#F4F4F5] border border-zinc-200 flex items-center justify-center text-[#D91D24] flex-shrink-0 group-hover:scale-110 transition-transform">
              <Award className="w-5 h-5 text-[#D91D24]" />
            </span>
            <div>
              <p className="text-[11px] font-body font-bold uppercase tracking-wider text-zinc-500">
                CORE DISCIPLINES
              </p>
              <p className="font-heading text-base sm:text-lg font-extrabold text-[#18181B] leading-tight">
                STRUCTURAL • RAILS • GATES
              </p>
            </div>
          </div>

          {/* Trust item 4 */}
          <div className="flex items-center space-x-3 px-2 pt-3 lg:pt-0 group cursor-default">
            <span className="w-10 h-10 rounded-full bg-[#F4F4F5] border border-zinc-200 flex items-center justify-center text-[#D91D24] flex-shrink-0 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-5 h-5 text-[#D91D24]" />
            </span>
            <div>
              <p className="text-[11px] font-body font-bold uppercase tracking-wider text-zinc-500">
                STANDARDS
              </p>
              <p className="font-heading text-base sm:text-lg font-extrabold text-[#18181B] leading-tight">
                AISC CERTIFIED FABRICATOR
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
