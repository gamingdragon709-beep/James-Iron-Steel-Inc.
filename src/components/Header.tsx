import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Instagram, Facebook } from 'lucide-react';

interface HeaderProps {
  onOpenEstimator: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEstimator }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobile = () => setMobileMenuOpen(false);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0D0D0D]/95 backdrop-blur-md border-b border-[#27272A] shadow-2xl py-0' 
          : 'bg-transparent border-b border-white/10 py-1'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between bg-transparent">
        
        {/* Left Navigation Links */}
        <nav className="flex items-center space-x-6 lg:space-x-8 text-xs font-heading font-bold uppercase tracking-wider text-slate-300">
          {/* Logo mark */}
          <a href="#" className="flex items-center gap-2 group mr-2">
            <div className="w-10 h-10 rounded-full border border-[#27272A] bg-[#141416] flex items-center justify-center group-hover:border-[#D91D24] transition-colors">
              <span className="font-heading font-extrabold text-sm text-white group-hover:text-[#D91D24] transition-colors">
                JIS
              </span>
            </div>
            <div className="hidden xl:block">
              <div className="font-heading font-extrabold text-white text-base tracking-normal leading-none group-hover:text-[#D91D24] transition-colors">
                JAMES IRON & STEEL
              </div>
              <div className="text-[10px] text-zinc-400 font-body uppercase tracking-wider">
                MONROE, NC • EST. 1952
              </div>
            </div>
          </a>

          <a 
            href="#why-us" 
            className="nav-link-animated hover:text-white py-2 hidden md:inline-block transition-colors"
          >
            About
          </a>

          {/* Services Dropdown */}
          <div 
            className="relative hidden md:block"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <a 
              href="#services" 
              className="nav-link-animated hover:text-white flex items-center gap-1 group py-2 transition-colors"
            >
              Services
              <ChevronDown 
                className={`w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-transform duration-300 ${
                  servicesDropdownOpen ? 'rotate-180' : 'rotate-0'
                }`} 
              />
            </a>

            {/* Dropdown Menu */}
            <div 
              className={`absolute top-full left-0 w-64 bg-[#141416] border border-[#27272A] rounded-xl shadow-2xl py-3 px-2 mt-1 space-y-1 transition-all duration-200 transform origin-top ${
                servicesDropdownOpen 
                  ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' 
                  : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
              }`}
            >
              <a 
                href="#services" 
                onClick={() => setServicesDropdownOpen(false)}
                className="block px-3 py-2 text-xs text-zinc-300 hover:text-white hover:bg-[#1E1E22] rounded-lg transition-colors group"
              >
                <span className="font-bold text-[#D91D24] block uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                  Commercial Metalwork
                </span>
                <span className="text-[11px] text-zinc-400 font-body">Structural frames, stairs & guardrails</span>
              </a>
              <a 
                href="#services" 
                onClick={() => setServicesDropdownOpen(false)}
                className="block px-3 py-2 text-xs text-zinc-300 hover:text-white hover:bg-[#1E1E22] rounded-lg transition-colors group"
              >
                <span className="font-bold text-[#D91D24] block uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                  Residential Railings & Gates
                </span>
                <span className="text-[11px] text-zinc-400 font-body">Custom balconies, handrails & entryways</span>
              </a>
              <a 
                href="#services" 
                onClick={() => setServicesDropdownOpen(false)}
                className="block px-3 py-2 text-xs text-zinc-300 hover:text-white hover:bg-[#1E1E22] rounded-lg transition-colors group"
              >
                <span className="font-bold text-[#D91D24] block uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                  Specialty Powder Coating
                </span>
                <span className="text-[11px] text-zinc-400 font-body">Multi-stage zinc primer & thermoset cure</span>
              </a>
            </div>
          </div>

          <a 
            href="#projects" 
            className="nav-link-animated hover:text-white py-2 hidden md:inline-block transition-colors"
          >
            Projects
          </a>

          <a 
            href="#reviews" 
            className="nav-link-animated hover:text-white py-2 hidden md:inline-block transition-colors"
          >
            Reviews
          </a>
        </nav>

        {/* Right Nav Links & Actions */}
        <div className="flex items-center space-x-4 sm:space-x-6">
          {/* Social Icons */}
          <div className="hidden lg:flex items-center space-x-3 text-zinc-400">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 rounded-full border border-[#27272A] flex items-center justify-center hover:text-white hover:border-[#D91D24] hover:bg-[#1A1A1E] transition-all"
              aria-label="Facebook"
            >
              <Facebook className="w-3.5 h-3.5" />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 rounded-full border border-[#27272A] flex items-center justify-center hover:text-white hover:border-[#D91D24] hover:bg-[#1A1A1E] transition-all"
              aria-label="Instagram"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Phone call link */}
          <a 
            href="tel:7043098507" 
            className="hidden sm:flex items-center gap-1.5 text-xs font-heading font-bold uppercase tracking-wider text-zinc-300 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#D91D24]" />
            <span>(704) 309-8507</span>
          </a>

          {/* Pill CTA: FREE ESTIMATE */}
          <button
            onClick={onOpenEstimator}
            className="btn-interactive px-5 py-2.5 rounded-full text-xs font-heading font-extrabold uppercase tracking-widest bg-white hover:bg-zinc-200 text-black transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
          >
            <span>FREE ESTIMATE</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-300 hover:text-white focus:outline-none transition-colors md:hidden"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-[500px] opacity-100 border-b border-[#27272A]' : 'max-h-0 opacity-0 border-b-0'
        } bg-[#0D0D0D]`}
      >
        <div className="px-6 py-6 space-y-4">
          <div className="space-y-3 font-heading text-sm font-bold uppercase tracking-wider">
            <a 
              href="#why-us" 
              onClick={closeMobile}
              className="block py-1 text-zinc-300 hover:text-[#D91D24] transition-colors"
            >
              About & Heritage
            </a>
            <a 
              href="#services" 
              onClick={closeMobile}
              className="block py-1 text-zinc-300 hover:text-[#D91D24] transition-colors"
            >
              Services
            </a>
            <a 
              href="#projects" 
              onClick={closeMobile}
              className="block py-1 text-zinc-300 hover:text-[#D91D24] transition-colors"
            >
              Projects
            </a>
            <a 
              href="#reviews" 
              onClick={closeMobile}
              className="block py-1 text-zinc-300 hover:text-[#D91D24] transition-colors"
            >
              Reviews
            </a>
            <a 
              href="#faq" 
              onClick={closeMobile}
              className="block py-1 text-zinc-300 hover:text-[#D91D24] transition-colors"
            >
              FAQ
            </a>
            <a 
              href="#estimate-form" 
              onClick={closeMobile}
              className="block py-1 text-zinc-300 hover:text-[#D91D24] transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="pt-4 border-t border-[#27272A] space-y-3">
            <a
              href="tel:7043098507"
              className="btn-interactive flex items-center justify-center gap-2 py-3 w-full rounded-full bg-[#18181B] border border-[#27272A] text-white font-heading font-bold text-xs tracking-wider uppercase transition-colors"
            >
              <Phone className="w-4 h-4 text-[#D91D24]" />
              Call (704) 309-8507
            </a>
            <button
              onClick={() => {
                closeMobile();
                onOpenEstimator();
              }}
              className="btn-interactive flex items-center justify-center py-3 w-full rounded-full bg-[#D91D24] hover:bg-[#B91C1C] text-white font-heading font-extrabold text-xs tracking-wider uppercase transition-colors"
            >
              Get Free Estimate
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
