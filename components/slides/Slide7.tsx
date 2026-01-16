
import React from 'react';
import { School, Stethoscope, Home, Briefcase, Heart } from 'lucide-react';
import { SlideProps } from '../../types';

const Slide7: React.FC<SlideProps> = () => (
  <div className="max-w-6xl w-full text-center">
    <h3 className="text-5xl md:text-7xl font-black text-white mb-16 uppercase tracking-tighter">
      PARA <span className="text-orange-500 italic">QUALQUER</span> NICHO
    </h3>
    
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
      {[
        { icon: <School size={48} />, title: "Escolas", text: "Relacionamento com pais e retenção de alunos." },
        { icon: <Stethoscope size={48} />, title: "Clínicas", text: "Acompanhamento e jornada do paciente." },
        { icon: <Home size={48} />, title: "Imobiliárias", text: "Confiança entre locadores e compradores." },
        { icon: <Briefcase size={48} />, title: "Escritórios", text: "Fidelização de clientes recorrentes." },
      ].map((item, idx) => (
        <div key={idx} className="flex flex-col items-center bg-white/5 p-8 rounded-3xl border border-white/5 hover:border-orange-500/30 transition-all">
          <div className="text-orange-500 mb-6">{item.icon}</div>
          <h4 className="text-2xl font-black text-white mb-2 uppercase tracking-tighter">{item.title}</h4>
          <p className="text-white/40 text-xs leading-relaxed">{item.text}</p>
        </div>
      ))}
    </div>
    
    <div className="inline-flex items-center gap-3 px-8 py-4 bg-orange-500/10 border border-orange-500/20 rounded-full">
      <Heart className="text-orange-500" />
      <span className="text-white font-black text-lg uppercase tracking-widest">Todo negócio vive de Relacionamento, não de Lead.</span>
    </div>
  </div>
);

export default Slide7;
