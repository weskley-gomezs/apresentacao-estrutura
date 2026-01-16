
import React from 'react';
import { Target, Search, Users, AlertTriangle } from 'lucide-react';
import { SlideProps } from '../../types';

const Slide2: React.FC<SlideProps> = ({ isActive }) => (
  <div className={`max-w-5xl w-full transition-all duration-1000 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
    <h2 className="text-orange-500 text-lg font-bold uppercase tracking-[0.3em] mb-4">O PROBLEMA INVISÍVEL</h2>
    <h3 className="text-5xl md:text-6xl font-black text-white mb-16 leading-tight">
      Sua empresa só pensa <br/>em atrair leads?
    </h3>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {[
        { icon: <Search size={32} />, title: "Miopia do Mercado", desc: "Foco total na captação, abandono total após o 'fechado'. O lucro real fica na mesa." },
        { icon: <AlertTriangle size={32} />, title: "Custo de Aquisição Alto", desc: "Pagar caro por cada lead novo enquanto os antigos saem pela porta dos fundos." },
        { icon: <Users size={32} />, title: "Desgaste do Time", desc: "Vendedores sobrecarregados tentando atrair novos, enquanto o suporte apaga incêndios." },
        { icon: <Target size={32} />, title: "Falta de Processo", desc: "Relacionamento baseado em 'sorte' e 'bom dia' no WhatsApp, sem estratégia de retenção." },
      ].map((item, idx) => (
        <div key={idx} className="flex items-start gap-6 group">
          <div className="mt-1 text-orange-500 p-3 bg-orange-500/5 rounded-xl border border-white/5 group-hover:border-orange-500/50 transition-colors">
            {item.icon}
          </div>
          <div>
            <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
            <p className="text-white/40 leading-relaxed">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Slide2;
