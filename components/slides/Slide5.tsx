
import React from 'react';
import { Zap, Timer, UserMinus, TrendingUp, ArrowRight } from 'lucide-react';
import { SlideProps } from '../../types';

const Slide5: React.FC<SlideProps> = () => (
  <div className="max-w-5xl w-full">
    <div className="flex items-center gap-4 mb-8">
      <div className="h-0.5 flex-1 bg-white/10"></div>
      <h2 className="text-white text-3xl font-black italic tracking-tighter uppercase">Máquina Digital 24h</h2>
      <div className="h-0.5 flex-1 bg-white/10"></div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <div className="bg-white/5 border border-white/10 p-8 rounded-2xl group hover:border-orange-500 transition-all">
        <UserMinus className="text-orange-500 mb-6" size={40} />
        <h4 className="text-xl font-bold text-white mb-3">Sem Custo Fixo</h4>
        <p className="text-white/40 text-sm">Não viro funcionário e não aumento seu time. Minha máquina trabalha sozinha.</p>
      </div>
      <div className="bg-white/5 border border-white/10 p-8 rounded-2xl group hover:border-orange-500 transition-all">
        <Timer className="text-orange-500 mb-6" size={40} />
        <h4 className="text-xl font-bold text-white mb-3">Atendimento 24h</h4>
        <p className="text-white/40 text-sm">Preparando o cliente ideal enquanto seu time descansa ou foca em fechar.</p>
      </div>
      <div className="bg-white/5 border border-white/10 p-8 rounded-2xl group hover:border-orange-500 transition-all">
        <Zap className="text-orange-500 mb-6" size={40} />
        <h4 className="text-xl font-bold text-white mb-3">Contexto Próprio</h4>
        <p className="text-white/40 text-sm">Quando o lead chega, ele já sabe exatamente por que precisa de você.</p>
      </div>
    </div>

    <div className="flex justify-center">
      <a 
        href="https://wa.me/5561981535040?text=Quero entender como essa máquina digital funcionaria no meu negócio."
        target="_blank"
        rel="noopener noreferrer"
        className="bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black font-black py-4 px-10 rounded-full text-lg uppercase transition-all flex items-center gap-3"
      >
        VER NO MEU NEGÓCIO <ArrowRight size={20} />
      </a>
    </div>
  </div>
);

export default Slide5;
