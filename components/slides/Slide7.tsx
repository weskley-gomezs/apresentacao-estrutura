import React from 'react';
import { School, Stethoscope, Home, Briefcase, Heart } from 'lucide-react';
import { SlideProps } from '../../types';

const Slide7: React.FC<SlideProps> = ({ isActive }) => (
  <div className={`max-w-6xl w-full text-center transition-all duration-1000 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
    <h3 className="text-3xl sm:text-5xl md:text-7xl font-black text-white mb-8 md:mb-16 uppercase tracking-tighter">
      PARA <span className="text-orange-500 italic">QUALQUER</span> NICHO
    </h3>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-8 md:mb-16">
      {[
        { icon: <School />, title: "Escolas", text: "Relacionamento com pais e retenção de alunos." },
        { icon: <Stethoscope />, title: "Clínicas", text: "Acompanhamento e jornada do paciente." },
        { icon: <Home />, title: "Imobiliárias", text: "Confiança entre locadores e compradores." },
        { icon: <Briefcase />, title: "Escritórios", text: "Fidelização de clientes recorrentes." },
      ].map((item, idx) => (
        <div key={idx} className="flex flex-col items-center bg-white/5 p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/5 hover:border-orange-500/30 transition-all">
          <div className="text-orange-500 mb-4 md:mb-6">
            {React.cloneElement(item.icon as React.ReactElement<any>, { size: 36, className: "w-9 h-9 md:w-12 md:h-12" })}
          </div>
          <h4 className="text-xl md:text-2xl font-black text-white mb-2 uppercase tracking-tighter">{item.title}</h4>
          <p className="text-white/40 text-[10px] md:text-xs leading-relaxed">{item.text}</p>
        </div>
      ))}
    </div>
    
    <div className="inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-orange-500/10 border border-orange-500/20 rounded-full">
      <Heart className="text-orange-500" size={20} />
      <span className="text-white font-black text-xs md:text-lg uppercase tracking-widest">Todo negócio vive de Relacionamento, não de Lead.</span>
    </div>
  </div>
);

export default Slide7;