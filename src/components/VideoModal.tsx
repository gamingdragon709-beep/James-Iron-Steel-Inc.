import React, { useState, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, CheckCircle, Flame, Hammer } from 'lucide-react';
import { VideoReel } from '../data/mockData';

interface VideoModalProps {
  reel: VideoReel | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ reel, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (reel) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [reel, onClose]);

  if (!reel) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md transition-opacity duration-300"
      onClick={onClose}
    >
      <div 
        className="animate-modal-in relative w-full max-w-lg bg-[#141416] rounded-2xl border border-[#27272A] shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-[#0D0D0D] border-b border-[#27272A]">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#D91D24] flex items-center justify-center text-white font-extrabold text-xs font-heading">
              JIS
            </div>
            <div>
              <span className="text-xs font-extrabold text-white block uppercase tracking-wider font-heading">
                James Iron & Steel Shop Reel
              </span>
              <span className="text-[10px] text-[#D91D24] tracking-widest uppercase font-heading font-bold">
                {reel.tag} • {reel.duration}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#1E1E22] hover:bg-[#27272A] text-zinc-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close reel modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Video Player Display */}
        <div className="relative aspect-[9/16] max-h-[58vh] bg-black overflow-hidden flex items-center justify-center">
          <img
            src={reel.thumbnail}
            alt={reel.title}
            className={`w-full h-full object-cover transition-transform duration-700 ease-out ${isPlaying ? 'scale-105' : 'scale-100'}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none"></div>

          {/* Playing overlay indicator */}
          {isPlaying && (
            <div className="absolute top-4 left-4 bg-[#D91D24] text-white text-[10px] font-heading font-bold px-2.5 py-0.5 rounded-full tracking-widest uppercase flex items-center gap-1 shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
              SHOP FOOTAGE
            </div>
          )}

          {/* Center Play/Pause button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="btn-interactive absolute z-10 w-16 h-16 rounded-full bg-[#D91D24] hover:bg-[#B91C1C] text-white flex items-center justify-center shadow-xl transition-all duration-300 cursor-pointer"
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
          >
            {isPlaying ? (
              <Pause className="w-7 h-7 fill-current" />
            ) : (
              <Play className="w-7 h-7 translate-x-0.5 fill-current" />
            )}
          </button>

          {/* Mute button */}
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="btn-interactive absolute bottom-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center border border-white/20 transition-colors cursor-pointer"
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>

          {/* Bottom Video Progress Simulation */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-zinc-800">
            <div className={`h-full bg-[#D91D24] ${isPlaying ? 'w-2/3 transition-all duration-1000' : 'w-1/3'}`}></div>
          </div>
        </div>

        {/* Video Notes & Technical Highlights */}
        <div className="p-5 bg-[#141416] border-t border-[#27272A]">
          <h3 className="font-heading text-xl font-extrabold text-white uppercase mb-1">
            {reel.title}
          </h3>
          <p className="text-xs text-zinc-300 mb-4 font-body">{reel.description}</p>

          <div className="bg-[#0D0D0D] p-3 rounded-xl border border-zinc-800 mb-4">
            <div className="flex items-center gap-1.5 text-xs font-heading font-bold text-[#D91D24] uppercase tracking-wider mb-2">
              <Flame className="w-3.5 h-3.5" />
              <span>CRAFTSMANSHIP LOG & PROCEDURES</span>
            </div>
            <ul className="space-y-1.5">
              {reel.videoHighlights.map((hl, i) => (
                <li key={i} className="flex items-center gap-2 text-xs text-zinc-300 font-body">
                  <CheckCircle className="w-3.5 h-3.5 text-[#D91D24] flex-shrink-0" />
                  <span>{hl}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-between text-xs text-zinc-400">
            <span className="flex items-center gap-1.5 text-[#D91D24] font-heading font-bold uppercase tracking-wider">
              <Hammer className="w-3.5 h-3.5" />
              Monroe, NC Fabrication Shop
            </span>
            <button
              onClick={onClose}
              className="text-white hover:text-[#D91D24] uppercase font-heading font-bold tracking-wider transition-colors cursor-pointer"
            >
              Done Watching
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
