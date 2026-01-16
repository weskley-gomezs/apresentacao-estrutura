
import React from 'react';
import { SlideProps } from '../../types';

const Slide3: React.FC<SlideProps> = ({ isActive }) => (
  <div className={`max-w-5xl w-full text-center flex flex-col items-center transition-all duration-1000 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
    <div className="text-orange-500 font-black text-sm tracking-[0.6em] uppercase mb-8 opacity-50">O Churn Silencioso</div>
    <h3 className="text-5xl md:text-7xl font-black text-white leading-[1.1]">
      O cliente até entra... <br />
      <span className="text-orange-500 italic">mas não fica.</span>
    </h3>
    <div className="mt-12 max-w-4xl grid grid-cols-2 md:grid-cols-3 gap-4 text-left">
      {[
        "Cliente confuso", "Ruído no atendimento", "Comparação com concorrente",
        "Desgaste com o time", "Reclamação pública", "Abandono silencioso"
      ].map((text, i) => (
        <div key={i} className="bg-white/5 p-4 rounded-xl border border-white/5 text-white/50 font-bold text-sm uppercase tracking-tighter flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-orange-500" /> {text}
        </div>
      ))}
    </div>
  </div>
);

export default Slide3;
