
import React from 'react';
import { SlideProps } from '../../types';

const Slide3: React.FC<SlideProps> = ({ isActive }) => (
  <div className={`max-w-5xl w-full text-center flex flex-col items-center transition-all duration-1000 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
    <div className="text-8xl md:text-[10rem] font-black text-white/5 absolute -z-10 select-none">ESTRUTURA</div>
    <h3 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
      O problema não é <br /><span className="text-orange-500 underline decoration-white/20">o seu vendedor.</span>
    </h3>
    <div className="mt-12 max-w-3xl">
      <p className="text-xl md:text-3xl text-white/70 font-light leading-relaxed">
        Se sua empresa gera lead, mas o time não converte, o problema é a <span className="text-white font-bold italic">falta de uma engrenagem digital</span> que filtre e prepare o caminho antes do "olá".
      </p>
    </div>
    <div className="mt-16 flex gap-2">
      <div className="w-16 h-1 bg-white/10"></div>
      <div className="w-16 h-1 bg-orange-500"></div>
      <div className="w-16 h-1 bg-white/10"></div>
    </div>
  </div>
);

export default Slide3;
