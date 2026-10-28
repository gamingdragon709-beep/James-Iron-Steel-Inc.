import React, { useState, useEffect, useRef } from 'react';
import { Phone, MapPin, Clock, MessageSquare, CheckCircle2, ShieldCheck, FileUp } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface EstimateFormProps {
  initialService?: string;
  initialDetails?: string;
}

export const EstimateForm: React.FC<EstimateFormProps> = ({ 
  initialService = '',
  initialDetails = '' 
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: initialService,
    message: initialDetails,
    timeframe: 'Standard (2-4 Weeks)'
  });

  const [hasFile, setHasFile] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');

  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightFormRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, service: initialService }));
    }
    if (initialDetails) {
      setFormData(prev => ({ ...prev, message: initialDetails }));
    }
  }, [initialService, initialDetails]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (leftColRef.current) {
        gsap.fromTo(
          leftColRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.14,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: leftColRef.current,
              start: 'top 82%',
              toggleActions: 'play none none none'
            }
          }
        );
      }

      if (rightFormRef.current) {
        gsap.fromTo(
          rightFormRef.current,
          { opacity: 0, y: 35, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.85,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: rightFormRef.current,
              start: 'top 82%',
              toggleActions: 'play none none none'
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.service) {
      return;
    }

    const code = `JIS-${Math.floor(100000 + Math.random() * 900000)}`;
    setConfirmationCode(code);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
      timeframe: 'Standard (2-4 Weeks)'
    });
    setHasFile(null);
  };

  return (
    <section ref={sectionRef} className="bg-[#0D0D0D] py-24 text-white border-t border-[#27272A]" id="estimate-form">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Content */}
          <div ref={leftColRef} className="lg:col-span-6">
            <div>
              <p className="font-heading font-extrabold text-xs text-[#D91D24] tracking-[0.2em] uppercase mb-2">
                GET STARTED
              </p>
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white uppercase leading-none tracking-tight mb-6">
                READY TO FORGE <br />
                <span className="text-[#D91D24]">SOMETHING EXCEPTIONAL?</span>
              </h2>
            </div>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-8 max-w-lg font-body">
              Whether you need structural steel for a commercial development, a custom driveway gate, or luxury interior stair railings, our Monroe fabrication team is ready to assist. Request your complimentary consultation today.
            </p>

            {/* Phone Callout */}
            <div className="space-y-5">
              <a
                href="tel:7043098507"
                className="btn-interactive inline-flex items-center space-x-3 text-2xl sm:text-3xl font-heading font-extrabold text-white hover:text-[#D91D24] transition-colors group"
              >
                <span className="w-12 h-12 rounded-full bg-[#141416] border border-[#27272A] flex items-center justify-center text-[#D91D24] group-hover:scale-110 group-hover:border-[#D91D24] transition-transform duration-300">
                  <Phone className="w-5 h-5" />
                </span>
                <span>(704) 309-8507</span>
              </a>

              <div className="text-xs text-zinc-400 space-y-2 pl-3 border-l-2 border-[#D91D24] font-body">
                <p className="flex items-center gap-2">
                  <MessageSquare className="w-3.5 h-3.5 text-[#D91D24]" />
                  <span><strong className="text-zinc-200">Direct Text Inquiries:</strong> (704) 207-6226</span>
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#D91D24]" />
                  <span><strong className="text-zinc-200">Shop Operating Hours:</strong> Mon–Thu: 7:00 AM – 4:00 PM | Fri: 6:00 AM – 3:00 PM</span>
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#D91D24]" />
                  <span><strong className="text-zinc-200">Monroe Facility:</strong> 2819 Tophill Rd, Monroe, NC 28110</span>
                </p>
              </div>
            </div>

            {/* Fabrication pledge */}
            <div className="mt-8 bg-[#141416] rounded-2xl p-5 border border-[#27272A] flex items-center gap-4 max-w-md hover:border-[#D91D24] transition-colors">
              <ShieldCheck className="w-7 h-7 text-[#D91D24] flex-shrink-0" />
              <div className="text-xs text-zinc-300 font-body">
                <span className="font-heading font-extrabold text-sm text-white uppercase tracking-wider block">
                  Zero Obligation Consultations
                </span>
                Free site visits & laser measurements throughout Charlotte, Lake Norman, and Union County.
              </div>
            </div>
          </div>

          {/* Right Column White Card Form */}
          <div className="lg:col-span-6">
            <div 
              ref={rightFormRef}
              className="bg-white rounded-2xl p-8 sm:p-10 shadow-2xl text-[#18181B] border border-zinc-200 relative card-interactive"
            >
              
              {isSubmitted ? (
                <div className="animate-modal-in text-center py-8 space-y-5">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center animate-bounce">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div>
                    <span className="text-[11px] font-heading font-extrabold uppercase tracking-widest text-[#D91D24] block mb-1">
                      ESTIMATE REQUEST CONFIRMED
                    </span>
                    <h3 className="font-heading text-3xl font-extrabold uppercase text-[#18181B]">
                      Thank You, {formData.name}!
                    </h3>
                    <p className="text-xs text-zinc-600 mt-2 font-body max-w-sm mx-auto">
                      A James Iron & Steel fabrication specialist has received your inquiry and is reviewing your specifications.
                    </p>
                  </div>

                  <div className="bg-[#F4F4F5] border border-zinc-200 rounded-xl p-4 max-w-sm mx-auto text-left text-xs font-body space-y-1.5 shadow-inner">
                    <div className="flex justify-between">
                      <span className="text-zinc-500 font-heading font-bold uppercase tracking-wider">Reference #:</span>
                      <span className="font-mono font-bold text-[#18181B]">{confirmationCode}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500 font-heading font-bold uppercase tracking-wider">Selected Service:</span>
                      <span className="font-semibold text-[#18181B] truncate max-w-[180px]">{formData.service}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500 font-heading font-bold uppercase tracking-wider">Target Callback:</span>
                      <span className="font-semibold text-emerald-700">Under 4 business hours</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="btn-interactive px-6 py-2.5 rounded-full bg-[#0D0D0D] hover:bg-black text-white font-heading font-bold text-xs uppercase tracking-wider shadow cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-heading font-bold text-zinc-700 uppercase tracking-wider mb-1" htmlFor="name">
                      Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full text-sm rounded-lg border border-zinc-300 px-3.5 py-2.5 focus:border-[#D91D24] focus:ring-1 focus:ring-[#D91D24] font-body transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-heading font-bold text-zinc-700 uppercase tracking-wider mb-1" htmlFor="email">
                        Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full text-sm rounded-lg border border-zinc-300 px-3.5 py-2.5 focus:border-[#D91D24] focus:ring-1 focus:ring-[#D91D24] font-body transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-heading font-bold text-zinc-700 uppercase tracking-wider mb-1" htmlFor="phone">
                        Phone *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        placeholder="(704) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full text-sm rounded-lg border border-zinc-300 px-3.5 py-2.5 focus:border-[#D91D24] focus:ring-1 focus:ring-[#D91D24] font-body transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-bold text-zinc-700 uppercase tracking-wider mb-1" htmlFor="service-interest">
                      Service Interest *
                    </label>
                    <select
                      id="service-interest"
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full text-sm rounded-lg border border-zinc-300 px-3.5 py-2.5 focus:border-[#D91D24] focus:ring-1 focus:ring-[#D91D24] bg-white font-body transition-colors"
                    >
                      <option value="" disabled>Select a service...</option>
                      <option value="Commercial Structural Steel & Erection">Commercial Structural Steel & Erection</option>
                      <option value="Commercial Stairs & ADA Railings">Commercial Stairs & ADA Railings</option>
                      <option value="Residential Interior/Exterior Railings">Residential Interior/Exterior Railings</option>
                      <option value="Residential Floating Mono-Stringer Stair">Residential Floating Mono-Stringer Stair</option>
                      <option value="Ornamental Driveway & Courtyard Gates">Ornamental Driveway & Courtyard Gates</option>
                      <option value="Bahama Shutters & Custom Accents">Bahama Shutters & Custom Accents</option>
                      <option value="Powder Coating & Custom Restoration">Powder Coating & Custom Restoration</option>
                    </select>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label className="text-xs font-heading font-bold text-zinc-700 uppercase tracking-wider" htmlFor="message">
                        Message / Project Details
                      </label>
                      <label className="cursor-pointer text-[11px] font-heading font-bold text-[#D91D24] hover:underline flex items-center gap-1 transition-colors">
                        <FileUp className="w-3.5 h-3.5" />
                        <span>{hasFile ? hasFile : 'Attach CAD / Photo'}</span>
                        <input
                          type="file"
                          className="hidden"
                          onChange={(e) => {
                            if (e.target.files && e.target.files[0]) {
                              setHasFile(e.target.files[0].name);
                            }
                          }}
                        />
                      </label>
                    </div>
                    <textarea
                      id="message"
                      rows={3}
                      placeholder="Tell us about your project dimensions, timeline, or site address..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full text-sm rounded-lg border border-zinc-300 px-3.5 py-2.5 focus:border-[#D91D24] focus:ring-1 focus:ring-[#D91D24] font-body transition-colors"
                    ></textarea>
                  </div>

                  {/* Solid Black Button: SEND MESSAGE */}
                  <button
                    type="submit"
                    className="btn-interactive shimmer-btn w-full py-4 px-6 rounded-xl bg-[#0D0D0D] hover:bg-black text-white font-heading font-extrabold text-base tracking-wider uppercase transition-all duration-200 shadow-xl mt-2 cursor-pointer"
                  >
                    SEND MESSAGE
                  </button>

                  <p className="text-[11px] text-center text-zinc-400 mt-2 font-body">
                    🔒 We respect your privacy. No spam. Typical response time is under 4 business hours.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
