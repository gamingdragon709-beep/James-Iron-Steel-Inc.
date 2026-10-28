import React, { useState, useEffect, useRef } from 'react';
import { REVIEWS, ReviewItem } from '../data/mockData';
import { CheckCircle, PlusCircle, X } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Testimonials: React.FC = () => {
  const [reviewsList, setReviewsList] = useState<ReviewItem[]>(REVIEWS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    role: '',
    location: '',
    rating: 5,
    quote: ''
  });
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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

      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.14,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.quote) return;

    const item: ReviewItem = {
      id: `rev-${Date.now()}`,
      name: newReview.name,
      role: newReview.role || 'Property Owner',
      location: newReview.location || 'Charlotte, NC',
      rating: newReview.rating,
      quote: newReview.quote,
      verified: true,
      source: 'Verified Client'
    };

    setReviewsList([item, ...reviewsList]);
    setSubmittedMessage(true);
    setTimeout(() => {
      setSubmittedMessage(false);
      setIsModalOpen(false);
      setNewReview({ name: '', role: '', location: '', rating: 5, quote: '' });
    }, 1500);
  };

  return (
    <section ref={sectionRef} className="bg-white py-24 text-[#18181B] border-b border-zinc-200" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-heading font-extrabold text-xs text-[#D91D24] tracking-[0.2em] uppercase mb-2">
            WHAT OUR CLIENTS SAY
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#18181B] uppercase leading-none">
            TRUSTED ACROSS THE CAROLINAS
          </h2>
          <div ref={dividerRef} className="w-16 h-1 bg-[#D91D24] mx-auto mt-4 mb-4 will-change-transform"></div>
          <p className="text-zinc-600 text-sm font-body">
            Read unvarnished feedback from local general contractors, custom home builders, and estate owners.
          </p>
        </div>

        {/* 3-Column Reviews Card Grid in #F4F4F5 with 1px border */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviewsList.slice(0, 3).map((review) => (
            <article
              key={review.id}
              className="card-interactive bg-[#F4F4F5] p-8 rounded-2xl border border-zinc-200 shadow-sm flex flex-col justify-between hover:border-[#D91D24]"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center space-x-1 text-[#D91D24] mb-5">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-lg inline-block">★</span>
                  ))}
                </div>
                <p className="text-zinc-700 text-sm leading-relaxed italic mb-6 font-body">
                  "{review.quote}"
                </p>
              </div>

              <div className="border-t border-zinc-200 pt-4 flex items-center justify-between">
                <div>
                  <p className="font-heading font-extrabold text-lg text-[#18181B] uppercase">
                    {review.name}
                  </p>
                  <p className="text-xs text-zinc-500 font-body">
                    {review.role}, {review.location} • {review.source}
                  </p>
                </div>
                {review.verified && (
                  <CheckCircle className="w-4 h-4 text-[#D91D24] flex-shrink-0" />
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Center Google Reviews Pill Button */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-interactive inline-flex items-center space-x-2 px-7 py-3.5 border border-zinc-300 rounded-full text-xs font-heading font-bold uppercase tracking-wider text-zinc-800 hover:bg-zinc-100 transition-all duration-200 shadow-sm"
          >
            <svg className="w-4 h-4 text-[#D91D24]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
            </svg>
            <span>Read All Google Reviews (5.0 Stars)</span>
          </a>

          <button
            onClick={() => setIsModalOpen(true)}
            className="btn-interactive inline-flex items-center space-x-1.5 px-6 py-3.5 border border-dashed border-[#D91D24] rounded-full text-xs font-heading font-bold uppercase tracking-wider text-[#D91D24] hover:bg-[#D91D24]/10 transition-colors cursor-pointer"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Submit Client Review</span>
          </button>
        </div>

      </div>

      {/* Leave a review modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity duration-300">
          <div className="animate-modal-in relative w-full max-w-lg bg-white text-[#18181B] rounded-2xl shadow-2xl p-6 sm:p-8 border border-zinc-200">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close review modal"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="font-heading text-3xl font-extrabold uppercase mb-1">
              Submit Your Review
            </h3>
            <p className="text-xs text-zinc-500 mb-6 font-body">
              Share your experience with James Iron & Steel's fabrication and installation teams.
            </p>

            {submittedMessage ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-xl text-center font-body text-sm animate-modal-in">
                Thank you! Your verified client review has been recorded.
              </div>
            ) : (
              <form onSubmit={handleReviewSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-heading font-bold uppercase tracking-wider text-zinc-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={newReview.name}
                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                    placeholder="e.g. David Sterling"
                    className="w-full text-sm rounded-lg border border-zinc-300 px-3.5 py-2.5 focus:border-[#D91D24] focus:outline-none transition-colors"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-heading font-bold uppercase tracking-wider text-zinc-700 mb-1">
                      Role / Project Type
                    </label>
                    <input
                      type="text"
                      value={newReview.role}
                      onChange={(e) => setNewReview({ ...newReview, role: e.target.value })}
                      placeholder="e.g. Custom Homeowner"
                      className="w-full text-sm rounded-lg border border-zinc-300 px-3.5 py-2.5 focus:border-[#D91D24] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-heading font-bold uppercase tracking-wider text-zinc-700 mb-1">
                      City / Area
                    </label>
                    <input
                      type="text"
                      value={newReview.location}
                      onChange={(e) => setNewReview({ ...newReview, location: e.target.value })}
                      placeholder="e.g. Lake Norman, NC"
                      className="w-full text-sm rounded-lg border border-zinc-300 px-3.5 py-2.5 focus:border-[#D91D24] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-heading font-bold uppercase tracking-wider text-zinc-700 mb-1">
                    Rating
                  </label>
                  <div className="flex items-center gap-2 text-[#D91D24] text-xl cursor-pointer">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        onClick={() => setNewReview({ ...newReview, rating: star })}
                        className={`transition-transform duration-200 hover:scale-125 ${star <= newReview.rating ? 'opacity-100' : 'opacity-30'}`}
                      >
                        ★
                      </span>
                    ))}
                    <span className="text-xs text-zinc-500 font-heading ml-2">
                      ({newReview.rating} out of 5 stars)
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-heading font-bold uppercase tracking-wider text-zinc-700 mb-1">
                    Review / Feedback *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={newReview.quote}
                    onChange={(e) => setNewReview({ ...newReview, quote: e.target.value })}
                    placeholder="Tell us about the craftsmanship, schedule adherence, and installation quality..."
                    className="w-full text-sm rounded-lg border border-zinc-300 px-3.5 py-2.5 focus:border-[#D91D24] focus:outline-none transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-interactive shimmer-btn w-full py-3.5 rounded-full bg-[#D91D24] hover:bg-[#B91C1C] text-white font-heading font-extrabold text-xs uppercase tracking-wider shadow cursor-pointer"
                >
                  Publish Review
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
