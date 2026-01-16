
import React from 'react';
import { SlideProps } from '../../types';

const Slide1: React.FC<SlideProps> = ({ isActive }) => (
  <div className={`max-w-6xl w-full text-left space-y-6 transition-all duration-1000 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
    <div className="h-1.5 w-32 bg-orange-500 mb-10"></div>
    <h1 className="text-6xl md:text-8xl font-black leading-[1.1] tracking-tighter text-white">
      VENDA MAIS <br />
      <span className="text-orange-500">COM O TIME</span> <br />
      QUE VOCÊ JÁ TEM.
    </h1>
    <p className="text-2xl md:text-3xl font-light text-white/70 tracking-wide max-w-3xl leading-relaxed">
      Pare de contratar vendedores para filtrar curiosos. <br/>
      <span className="text-white font-bold italic">Eu instalo a engrenagem que entrega leads prontos para o fechamento.</span>
    </p>
  </div>
);

export default Slide1;
