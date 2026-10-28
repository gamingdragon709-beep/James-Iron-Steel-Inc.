import React, { useState, useEffect, useRef } from 'react';
import { FAQS } from '../data/mockData';
import { Search } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = FAQS.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

      if (listRef.current) {
        gsap.fromTo(
          listRef.current.children,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: listRef.current,
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
    <section ref={sectionRef} className="bg-white py-24 text-[#18181B]" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-12">
          <p className="font-heading font-extrabold text-xs text-[#D91D24] tracking-[0.2em] uppercase mb-2">
            FAQ
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#18181B] uppercase leading-none">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <div ref={dividerRef} className="w-16 h-1 bg-[#D91D24] mx-auto mt-4 mb-4 will-change-transform"></div>
        </div>

        {/* Search bar */}
        <div className="mb-10 max-w-md mx-auto relative">
          <Search className="w-4 h-4 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search questions (e.g. powder coat, lead times, warranties)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-full border border-zinc-300 text-xs text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-[#D91D24] focus:ring-1 focus:ring-[#D91D24] font-body transition-all"
          />
        </div>

        {/* Accordion List with Smooth 300ms Transitions & Crimson Plus */}
        <div ref={listRef} className="divide-y divide-zinc-200 border-y border-zinc-200 text-left">
          {filteredFaqs.length === 0 ? (
            <div className="py-8 text-center text-zinc-500 text-sm">
              No matching questions found. Call our Monroe fabrication shop at{' '}
              <a href="tel:7043098507" className="text-[#D91D24] font-bold underline">
                (704) 309-8507
              </a>{' '}
              for instant answers.
            </div>
          ) : (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="py-6 transition-colors duration-200 group">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex justify-between items-center text-left cursor-pointer list-none select-none focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-heading text-xl sm:text-2xl font-extrabold text-[#18181B] uppercase group-hover:text-[#D91D24] transition-colors pr-6">
                      {faq.question}
                    </span>
                    <span 
                      className={`text-[#D91D24] font-bold text-3xl transition-transform duration-300 ease-out flex-shrink-0 leading-none select-none ${
                        isOpen ? 'rotate-45' : 'rotate-0'
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {/* Smooth Height & Opacity Transition */}
                  <div 
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen 
                        ? 'grid-rows-[1fr] opacity-100 mt-4' 
                        : 'grid-rows-[0fr] opacity-0 mt-0 pointer-events-none'
                    }`}
                  >
                    <div className="overflow-hidden text-zinc-600 text-sm leading-relaxed pr-8 font-body">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

      </div>
    </section>
  );
};
