
import React from 'react';
import { Zap, TrendingUp, BarChart3, ArrowRight } from 'lucide-react';
import { SlideProps } from '../../types';

const Slide5: React.FC<SlideProps> = ({ isActive }) => (
  <div className={`max-w-5xl w-full transition-all duration-1000 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
    <h2 className="text-orange-500 text-lg font-bold uppercase tracking-widest mb-10 text-center">IMPACTO IMEDIATO</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center text-orange-500 mb-6">
          <TrendingUp size={32} />
        </div>
        <h4 className="text-2xl font-black text-white mb-2">Escalabilidade</h4>
        <p className="text-white/40">Dobre o volume de leads sem precisar dobrar o tamanho do escritório.</p>
      </div>
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center text-orange-500 mb-6">
          <Zap size={32} />
        </div>
        <h4 className="text-2xl font-black text-white mb-2">Fim do 'Vácuo'</h4>
        <p className="text-white/40">Atendimento e qualificação instantânea, 24 horas por dia.</p>
      </div>
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center text-orange-500 mb-6">
          <BarChart3 size={32} />
        </div>
        <h4 className="text-2xl font-black text-white mb-2">Previsibilidade</h4>
        <p className="text-white/40">Saiba exatamente quantos leads qualificados seu time receberá amanhã.</p>
      </div>
    </div>

    <div className="flex justify-center">
      <a 
        href="https://wa.me/5561981535040?text=Quero uma estrutura previsível de vendas."
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-orange-500 text-black font-black py-5 px-12 rounded-full text-xl uppercase transition-all flex items-center gap-4 hover:scale-105 shadow-xl"
      >
        ANALISAR MEU PROCESSO <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
      </a>
    </div>
  </div>
);

export default Slide5;
