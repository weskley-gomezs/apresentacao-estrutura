
import React from 'react';
import { Users, HeartCrack, MessageSquareX, TrendingDown } from 'lucide-react';
import { SlideProps } from '../../types';

const Slide2: React.FC<SlideProps> = ({ isActive }) => (
  <div className={`max-w-5xl w-full transition-all duration-1000 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
    <h2 className="text-orange-500 text-lg font-bold uppercase tracking-[0.3em] mb-4">O DIAGNÓSTICO</h2>
    <h3 className="text-5xl md:text-6xl font-black text-white mb-16 leading-tight">
      Por que as famílias <br/>estão saindo?
    </h3>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {[
        { icon: <HeartCrack size={32} />, title: "Distância dos Pais", desc: "A família só recebe boletos e avisos de problemas. Não há valor percebido diário." },
        { icon: <MessageSquareX size={32} />, title: "Ruídos na Comunicação", desc: "Informações perdidas em grupos de WhatsApp desorganizados e agendas físicas." },
        { icon: <TrendingDown size={32} />, title: "Churn Invisível", desc: "Alunos saindo sem você saber o real motivo até ser tarde demais." },
        { icon: <Users size={32} />, title: "Falta de Pertencimento", desc: "Sua escola é vista como um balcão de negócios, não como uma comunidade." },
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
