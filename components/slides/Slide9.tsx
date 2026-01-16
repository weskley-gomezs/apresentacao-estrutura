
import React from 'react';
import { MessageCircle, ShieldCheck } from 'lucide-react';
import { SlideProps } from '../../types';

const Slide9: React.FC<SlideProps> = ({ isActive }) => (
  <div className={`max-w-5xl w-full text-center space-y-12 transition-all duration-1000 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-500 font-bold text-xs uppercase tracking-widest">
      <ShieldCheck size={14} /> Compromisso com Resultado
    </div>
    
    <h3 className="text-5xl md:text-7xl font-black text-white leading-tight">
      Eu organizo o <span className="text-orange-500">digital</span> para que vender deixe de ser <span className="text-white/30">sorte.</span>
    </h3>
    
    <p className="text-2xl text-white/50 max-w-3xl mx-auto leading-relaxed">
      Vender é um <span className="text-white font-bold">processo de engenharia</span>. Se o seu não está funcionando, você tem um erro de projeto, não de execução.
    </p>

    <div className="pt-8">
      <p className="text-orange-500 font-black text-xl italic">"Meu trabalho acaba onde a venda começa."</p>
    </div>
  </div>
);

export default Slide9;
