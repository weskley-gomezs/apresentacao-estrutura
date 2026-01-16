
import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { SlideProps } from '../../types';

const Slide10: React.FC<SlideProps> = ({ isActive }) => (
  <div className={`max-w-4xl w-full text-center flex flex-col items-center transition-all duration-1000 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
    <h3 className="text-4xl sm:text-5xl md:text-8xl font-black text-white mb-6 md:mb-8 uppercase tracking-tighter leading-[0.9]">
      VAMOS ANALISAR <br />
      <span className="text-orange-500">SEU LTV?</span>
    </h3>
    
    <p className="text-base sm:text-xl md:text-2xl text-white/40 mb-8 md:mb-12 font-medium max-w-2xl leading-relaxed px-4">
      Agende um diagnóstico rápido e gratuito. Eu vou te mostrar pelo menos 3 pontos onde você está perdendo dinheiro hoje no relacionamento com seus clientes.
    </p>
    
    <div className="flex flex-col items-center gap-6 md:gap-8 w-full px-4">
      <a 
        href="https://wa.me/5561981535040?text=Olá, vi sua apresentação e gostaria de um diagnóstico gratuito sobre o LTV do meu negócio."
        target="_blank"
        rel="noopener noreferrer"
        className="w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-black font-black py-6 md:py-8 px-8 md:px-16 rounded-full text-xl md:text-4xl uppercase tracking-tighter flex items-center justify-center gap-3 md:gap-4 transition-all hover:scale-105 active:scale-95 shadow-[0_20px_80px_rgba(249,115,22,0.4)] group"
      >
        QUERO MEU DIAGNÓSTICO <ArrowRight className="w-6 h-6 md:w-9 md:h-9 group-hover:translate-x-2 transition-transform" />
      </a>
      
      <div className="flex flex-col items-center gap-2 md:gap-3">
        <p className="text-white/20 font-bold tracking-[0.4em] uppercase text-[8px] md:text-[10px]">Análise de gargalos e oportunidades de lucro</p>
        <div className="h-0.5 w-8 md:w-12 bg-white/10"></div>
        <span className="text-white/60 font-bold text-base md:text-lg flex items-center gap-2">
          <MessageCircle size={18} className="text-orange-500" /> (61) 98153-5040
        </span>
      </div>
    </div>
  </div>
);

export default Slide10;
