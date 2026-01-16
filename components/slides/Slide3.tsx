
import React from 'react';
import { SlideProps } from '../../types';

const Slide3: React.FC<SlideProps> = ({ isActive }) => (
  <div className={`max-w-5xl w-full text-center flex flex-col items-center transition-all duration-1000 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
    <div className="text-orange-500 font-black text-sm tracking-[0.6em] uppercase mb-8 opacity-50">A Verdade Inconveniente</div>
    <h3 className="text-5xl md:text-7xl font-black text-white leading-[1.1]">
      Contratar mais pessoas <br />
      <span className="text-orange-500 italic">não resolve</span> processos ruins.
    </h3>
    <div className="mt-12 max-w-3xl">
      <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed">
        Se o seu comercial está sobrecarregado, você não precisa de mais braços. <br/>
        <span className="text-white font-bold">Você precisa de um filtro digital que trabalhe enquanto o time fecha negócios.</span>
      </p>
    </div>
  </div>
);

export default Slide3;
