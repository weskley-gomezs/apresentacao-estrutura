
import React from 'react';
import { GraduationCap, Heart } from 'lucide-react';
import { SlideProps } from '../../types';

const Slide6: React.FC<SlideProps> = () => (
  <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-12">
    <div className="md:w-1/2">
      <h2 className="text-orange-500 text-lg font-bold uppercase tracking-widest mb-6">Educação é Parceria</h2>
      <h3 className="text-5xl md:text-6xl font-black text-white leading-tight mb-8">
        Os pais não compram <span className="text-orange-500">aulas.</span> Eles compram <span className="text-white">futuro.</span>
      </h3>
      <p className="text-xl text-white/50 leading-relaxed">
        Sua estrutura digital deve provar todos os dias que a escolha deles foi a correta. Retenção é sobre valor percebido constante.
      </p>
    </div>
    
    <div className="md:w-1/2 space-y-4">
      <div className="bg-orange-500 p-8 rounded-3xl text-black">
        <GraduationCap size={48} className="mb-4" />
        <p className="text-2xl font-black leading-tight">"Pela primeira vez sinto que faço parte da educação do meu filho e entendo o valor da mensalidade."</p>
        <p className="mt-4 font-bold opacity-70 uppercase text-sm italic">— O pai/mãe fidelizado pela estrutura</p>
      </div>
      <div className="flex items-center gap-4 p-6 border border-white/10 rounded-2xl bg-white/5">
        <Heart className="text-orange-500" size={24} />
        <span className="text-white font-bold">LTV Escolar: Aluno retido = Custo zero de aquisição.</span>
      </div>
    </div>
  </div>
);

export default Slide6;
