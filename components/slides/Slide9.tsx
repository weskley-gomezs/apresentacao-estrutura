
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { SlideProps } from '../../types';

const Slide9: React.FC<SlideProps> = () => (
  <div className="max-w-5xl w-full">
    <div className="flex flex-col items-center text-center space-y-12">
      <h2 className="text-orange-500 text-xl font-bold uppercase tracking-[0.5em]">O Convite</h2>
      <h3 className="text-4xl md:text-6xl font-black text-white leading-tight italic">
        "Eu te mostro como isso funcionaria no <span className="text-orange-500">seu negócio</span>, antes de você decidir qualquer coisa."
      </h3>
      <div className="w-full max-w-2xl h-px bg-white/10 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black px-6 text-white/30 font-bold uppercase tracking-widest text-xs">Sem compromisso</div>
      </div>
      <p className="text-xl text-white/50 font-medium">
        Uma análise rápida da sua estrutura atual e onde o dinheiro está fugindo.
      </p>
    </div>
  </div>
);

export default Slide9;
