
import React from 'react';
import { SlideProps } from '../../types';

const Slide1: React.FC<SlideProps> = ({ isActive }) => (
  <div className={`max-w-6xl w-full text-left space-y-6 transition-all duration-1000 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
    <div className="h-1.5 w-32 bg-orange-500 mb-10"></div>
    <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tighter text-white">
      RETENHA MAIS ALUNOS <br />
      <span className="text-orange-500 italic">E MULTIPLIQUE</span> <br />
      SUAS INDICAÇÕES.
    </h1>
    <p className="text-xl md:text-3xl font-light text-white/70 tracking-wide max-w-3xl leading-relaxed">
      Aumente o lucro e a fidelidade da sua base sem contratar novos vendedores. <br/>
      <span className="text-white font-bold italic">Lead é vaidade. LTV (Lifetime Value) é lucro real.</span>
    </p>
  </div>
);

export default Slide1;
