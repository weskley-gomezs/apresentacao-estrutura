
import React from 'react';
import { SlideProps } from '../../types';

const Slide1: React.FC<SlideProps> = ({ isActive }) => (
  <div className={`max-w-6xl w-full text-left space-y-6 transition-all duration-1000 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
    <div className="h-1.5 w-32 bg-orange-500 mb-10"></div>
    <h1 className="text-6xl md:text-8xl font-black leading-[1.1] tracking-tighter text-white">
      O ALUNO VALE <br />
      <span className="text-orange-500">MAIS QUE UMA</span> <br />
      MATRÍCULA.
    </h1>
    <p className="text-2xl md:text-3xl font-light text-white/70 tracking-wide max-w-3xl leading-relaxed">
      Sua escola não cresce apenas com novos alunos. Ela cresce mantendo quem já confia em você. <br/>
      <span className="text-white font-bold italic">Profissionalize o relacionamento com os pais e domine o LTV Escolar.</span>
    </p>
  </div>
);

export default Slide1;
