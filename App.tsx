
import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Maximize, MousePointer2, MessageCircle, MoveRight } from 'lucide-react';
import Slide1 from './components/slides/Slide1';
import Slide2 from './components/slides/Slide2';
import Slide3 from './components/slides/Slide3';
import Slide4 from './components/slides/Slide4';
import Slide5 from './components/slides/Slide5';
import Slide6 from './components/slides/Slide6';
import Slide7 from './components/slides/Slide7';
import Slide8 from './components/slides/Slide8';
import Slide9 from './components/slides/Slide9';
import Slide10 from './components/slides/Slide10';
import Funnel3D from './components/Funnel3D';

const WHATSAPP_URL = "https://wa.me/5561981535040?text=Olá, vi sua apresentação e gostaria de um diagnóstico gratuito sobre o LTV do meu negócio.";

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeFeedback, setActiveFeedback] = useState<'prev' | 'next' | null>(null);

  const slides = [
    Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8, Slide9, Slide10
  ];

  const triggerFeedback = useCallback((type: 'prev' | 'next') => {
    setActiveFeedback(null);
    setTimeout(() => setActiveFeedback(type), 10);
    setTimeout(() => setActiveFeedback(null), 510);
  }, []);

  const nextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide((prev) => prev + 1);
      triggerFeedback('next');
    }
  }, [currentSlide, slides.length, triggerFeedback]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
      triggerFeedback('prev');
    }
  }, [currentSlide, triggerFeedback]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className="relative h-screen w-screen bg-black overflow-hidden flex flex-col items-center justify-center select-none text-white">
      
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        <div className="absolute top-[-25%] left-[-15%] w-[100%] md:w-[70%] h-[70%] bg-orange-600/[0.04] blur-[100px] md:blur-[180px] rounded-full animate-subtle-float" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[100%] md:w-[60%] h-[60%] bg-orange-900/[0.03] blur-[100px] md:blur-[150px] rounded-full animate-slow-drift" />
      </div>

      <Funnel3D />

      {/* Slide Container - Mobile Scrollable if content too long */}
      <div className="w-full h-full flex items-center justify-center px-4 sm:px-8 md:px-24 relative z-10 overflow-y-auto overflow-x-hidden md:overflow-hidden py-20 md:py-0">
        {slides.map((SlideComponent, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 md:duration-1000 cubic-bezier(0.4, 0, 0.2, 1) flex items-start md:items-center justify-center p-6 sm:p-12 md:p-24 ${
              index === currentSlide 
                ? 'opacity-100 translate-x-0 scale-100 z-10' 
                : index < currentSlide 
                  ? 'opacity-0 -translate-x-full scale-95 z-0' 
                  : 'opacity-0 translate-x-full scale-95 z-0'
            }`}
          >
            <div className="w-full max-h-full">
              <SlideComponent isActive={index === currentSlide} />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Indicators */}
      {currentSlide < slides.length - 1 && (
        <div className="absolute bottom-24 md:bottom-32 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-25 animate-pulse pointer-events-none">
          <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.5em] text-white">Próximo</span>
          <MoveRight size={14} className="text-orange-500 animate-bounce-horizontal md:w-4" />
        </div>
      )}

      {/* Floating WhatsApp Button - Optimized for Mobile */}
      <a 
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:absolute md:bottom-24 md:right-10 z-30 flex items-center gap-2 md:gap-3 bg-orange-500 hover:bg-orange-600 text-black p-4 md:px-6 md:py-4 rounded-full font-black text-xs md:text-sm uppercase transition-all hover:scale-105 shadow-[0_10px_40px_rgba(249,115,22,0.3)] animate-pulse"
        aria-label="Diagnóstico LTV"
      >
        <MessageCircle size={20} />
        <span className="hidden sm:inline">DIAGNÓSTICO LTV</span>
      </a>

      {/* Bottom Controls Bar */}
      <div className="absolute bottom-6 md:bottom-10 left-0 right-0 flex items-center justify-between px-6 md:px-10 z-20 pointer-events-none">
        <div className="text-white/20 text-[10px] md:text-xs font-bold tracking-widest uppercase flex items-center gap-2">
           <MousePointer2 size={12} className="text-orange-500/50" />
           {String(currentSlide + 1).padStart(2, '0')} <span className="text-orange-500/20">/</span> {String(slides.length).padStart(2, '0')}
        </div>
        
        <div className="flex gap-2 md:gap-4 pointer-events-auto">
          <button 
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`p-2 md:p-3 rounded-full border transition-all relative ${
              currentSlide === 0 
                ? 'border-white/5 text-white/5' 
                : `border-white/10 text-white/40 hover:border-orange-500/50 hover:text-orange-500 hover:bg-white/5 ${activeFeedback === 'prev' ? 'nav-feedback-active' : ''}`
            }`}
          >
            <ChevronLeft size={18} md:size={20} />
          </button>
          <button 
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className={`p-2 md:p-3 rounded-full border transition-all relative ${
              currentSlide === slides.length - 1 
                ? 'border-white/5 text-white/5' 
                : `border-white/10 text-white/40 hover:border-orange-500/50 hover:text-orange-500 hover:bg-white/5 ${activeFeedback === 'next' ? 'nav-feedback-active' : ''}`
            }`}
          >
            <ChevronRight size={18} md:size={20} />
          </button>
        </div>

        <div className="hidden lg:flex text-white/10 text-[9px] font-bold tracking-[0.2em] items-center gap-2 uppercase">
           <Maximize size={10} />
           Estratégia de Retenção & Lucro
        </div>
      </div>

      {/* Top Branding - Responsive */}
      <div className="absolute top-6 md:top-10 right-6 md:right-10 z-20 opacity-20">
        <div className="text-white font-black text-[10px] md:text-xs tracking-tighter uppercase">
          LTV<span className="text-orange-500">MASTER</span>
        </div>
      </div>
    </div>
  );
};

export default App;
