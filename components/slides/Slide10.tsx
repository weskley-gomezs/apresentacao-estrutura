
import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { SlideProps } from '../../types';

const Slide10: React.FC<SlideProps> = ({ isActive }) => (
  <div className={`max-w-4xl w-full text-center flex flex-col items-center transition-all duration-1000 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
    <h3 className="text-5xl md:text-7xl font-black text-white mb-8 uppercase tracking-tighter leading-none">
      PRONTO PARA <br />
      <span className="text-orange-500">PROFISSIONALIZAR?</span>
    </h3>
    
    <p className="text-xl md:text-2xl text-white/40 mb-12 font-medium max-w-2xl">
      Seu negócio está pronto para crescer com método ou você vai continuar dependendo do improviso?
    </p>
    
    <div className="flex flex-col items-center gap-8 w-full">
      <a 
        href="https://wa.me/5561981535040?text=Quero sair do improviso e montar minha estrutura digital."
        target="_blank"
        rel="noopener noreferrer"
        className="w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-black font-black py-8 px-16 rounded-full text-2xl md:text-4xl uppercase tracking-tighter flex items-center justify-center gap-4 transition-all hover:scale-105 active:scale-95 shadow-[0_20px_80px_rgba(249,115,22,0.5)] group"
      >
        QUERO ESCALAR AGORA <ArrowRight size={36} className="group-hover:translate-x-2 transition-transform" />
      </a>
      
      <div className="flex flex-col items-center gap-3">
        <p className="text-white/20 font-bold tracking-[0.3em] uppercase text-[10px]">Agende sua análise de gargalos gratuita</p>
        <div className="h-0.5 w-12 bg-white/10"></div>
        <span className="text-white/60 font-bold text-lg">(61) 98153-5040</span>
      </div>
    </div>
  </div>
);

export default Slide10;
