
import React from 'react';
import { Network, BookOpen, ShieldCheck, Heart, LucideIcon } from 'lucide-react';
import { SlideProps } from '../../types';

interface MethodItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const Slide4: React.FC<SlideProps> = ({ isActive }) => {
  const methods: MethodItem[] = [
    { icon: Network, title: "Pontos de Contato", desc: "Organização estratégica de cada interação com o cliente." },
    { icon: BookOpen, title: "Educação Contínua", desc: "Doutrinação sobre seu valor para eliminar comparação por preço." },
    { icon: ShieldCheck, title: "Redução de Atrito", desc: "Processos claros que facilitam o trabalho do seu time e o pós-venda." },
    { icon: Heart, title: "Fidelização Ativa", desc: "Transformamos clientes em defensores que compram e indicam." },
  ];

  return (
    <div className={`max-w-6xl w-full transition-all duration-1000 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
      <h2 className="text-orange-500 text-lg font-bold uppercase tracking-widest mb-6">O MÉTODO LTV</h2>
      <h3 className="text-5xl md:text-6xl font-black text-white leading-tight mb-12">
        A estrutura que <span className="text-orange-500 italic">retém e escala.</span>
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {methods.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-3xl group hover:border-orange-500/50 transition-all duration-500 hover:-translate-y-2">
              <div className="text-orange-500 mb-6">
                <Icon size={40} />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
              <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slide4;
