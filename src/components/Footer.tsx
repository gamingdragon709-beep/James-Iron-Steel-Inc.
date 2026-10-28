import React, { useEffect, useRef } from 'react';
import { MapPin, Phone, MessageSquare, Star } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);
  const columnsRef = useRef<HTMLDivElement>(null);
  const bottomBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (columnsRef.current) {
        gsap.fromTo(
          columnsRef.current.children,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: columnsRef.current,
              start: 'top 90%',
              toggleActions: 'play none none none'
            }
          }
        );
      }

      if (bottomBarRef.current) {
        gsap.fromTo(
          bottomBarRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: bottomBarRef.current,
              start: 'top 95%',
              toggleActions: 'play none none none'
            }
          }
        );
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="bg-[#0D0D0D] text-zinc-400 text-xs border-t border-[#27272A] pt-16 pb-12" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={columnsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#27272A]">
          
          {/* Col 1: Logo & Heritage Badge */}
          <div className="lg:col-span-4">
            <div className="flex items-center space-x-3 mb-4 group cursor-default">
              <div className="w-10 h-10 bg-[#D91D24] rounded-lg border border-[#D91D24] flex items-center justify-center font-heading font-extrabold text-white text-lg shadow">
                JIS
              </div>
              <div>
                <span className="font-heading text-xl text-white font-extrabold tracking-wider block group-hover:text-[#D91D24] transition-colors">
                  JAMES IRON & STEEL
                </span>
                <span className="text-[10px] text-[#D91D24] uppercase tracking-widest block font-heading font-bold">
                  BUILT TO LAST. CRAFTED BY JAMES.
                </span>
              </div>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed mb-6 font-body">
              Fourth-generation custom iron and steel fabricator serving Charlotte, Lake Norman, Union County, and statewide North & South Carolina with premier architectural craftsmanship.
            </p>

            <div className="inline-flex items-center space-x-2 bg-[#141416] border border-[#27272A] px-3.5 py-1.5 rounded-full text-[11px] text-zinc-300 font-heading tracking-wider">
              <Star className="w-3.5 h-3.5 text-[#D91D24] fill-[#D91D24]" />
              <span>AISC Certified Standards • 1-Year Workmanship Warranty</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-heading text-sm font-extrabold text-white uppercase tracking-wider mb-4">
              QUICK LINKS
            </h4>
            <ul className="space-y-2.5 font-heading font-bold uppercase tracking-wider text-xs">
              <li><a href="#" className="hover:text-[#D91D24] hover:translate-x-1 inline-block transition-all">Home</a></li>
              <li><a href="#services" className="hover:text-[#D91D24] hover:translate-x-1 inline-block transition-all">Services</a></li>
              <li><a href="#why-us" className="hover:text-[#D91D24] hover:translate-x-1 inline-block transition-all">Our Heritage</a></li>
              <li><a href="#projects" className="hover:text-[#D91D24] hover:translate-x-1 inline-block transition-all">Projects</a></li>
              <li><a href="#reviews" className="hover:text-[#D91D24] hover:translate-x-1 inline-block transition-all">Reviews</a></li>
              <li><a href="#faq" className="hover:text-[#D91D24] hover:translate-x-1 inline-block transition-all">FAQ</a></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="lg:col-span-3">
            <h4 className="font-heading text-sm font-extrabold text-white uppercase tracking-wider mb-4">
              SERVICES
            </h4>
            <ul className="space-y-2.5 font-heading font-bold uppercase tracking-wider text-xs">
              <li><a href="#services" className="hover:text-[#D91D24] hover:translate-x-1 inline-block transition-all">Commercial Structural Steel</a></li>
              <li><a href="#services" className="hover:text-[#D91D24] hover:translate-x-1 inline-block transition-all">Commercial Stair Towers & Rails</a></li>
              <li><a href="#services" className="hover:text-[#D91D24] hover:translate-x-1 inline-block transition-all">Custom Residential Railings</a></li>
              <li><a href="#services" className="hover:text-[#D91D24] hover:translate-x-1 inline-block transition-all">Driveway & Estate Entry Gates</a></li>
              <li><a href="#services" className="hover:text-[#D91D24] hover:translate-x-1 inline-block transition-all">Bahama Aluminum Shutters</a></li>
              <li><a href="#finishes" className="hover:text-[#D91D24] hover:translate-x-1 inline-block transition-all">Industrial Powder Coating</a></li>
            </ul>
          </div>

          {/* Col 4: Contact & Workshop Info */}
          <div className="lg:col-span-3">
            <h4 className="font-heading text-sm font-extrabold text-white uppercase tracking-wider mb-4">
              CONTACT & SHOP
            </h4>
            <address className="not-italic space-y-3 text-xs text-zinc-400 font-body">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D91D24] flex-shrink-0 mt-0.5" />
                <span>
                  2819 Tophill Rd<br />
                  Monroe, NC 28110
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D91D24] flex-shrink-0" />
                <a href="tel:7043098507" className="hover:text-white font-semibold text-zinc-300 transition-colors">
                  (704) 309-8507
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#D91D24] flex-shrink-0" />
                <span>Text: (704) 207-6226</span>
              </p>
            </address>
          </div>

        </div>

        {/* Bottom Bar */}
        <div ref={bottomBarRef} className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-500 gap-4 font-body">
          <p>© 1952–2025 James Iron & Steel, Inc. All rights reserved. Built for Precision.</p>
          <div className="flex items-center space-x-6 font-heading font-bold uppercase tracking-wider">
            <a href="#" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Terms of Service</a>
            <span className="text-zinc-600">Monroe, NC • Charlotte Metro</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
