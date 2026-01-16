
import React from 'react';
import { SlideProps } from '../../types';

const Slide1: React.FC<SlideProps> = ({ isActive }) => (
  <div className={`max-w-6xl w-full text-left space-y-6 transition-all duration-1000 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
    <div className="h-1 w-24 bg-orange-500 mb-8"></div>
    <h1 className="text-5xl md:text-8xl font-black leading-tight tracking-tighter text-white">
      VENDA MAIS <br />
      <span className="text-orange-500">SEM AUMENTAR</span> <br />
      SEU TIME.
    </h1>
    <p className="text-xl md:text-3xl font-light text-white/80 tracking-wide max-w-3xl">
      A estrutura digital que qualifica e aquece leads antes do seu time comercial tocar neles.
    </p>
  </div>
);

export default Slide1;
