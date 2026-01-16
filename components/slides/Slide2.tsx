
import React from 'react';
import { Clock, UserX, ThermometerSnowflake, Ban } from 'lucide-react';
import { SlideProps } from '../../types';

const Slide2: React.FC<SlideProps> = () => (
  <div className="max-w-5xl w-full">
    <h2 className="text-orange-500 text-lg font-bold uppercase tracking-widest mb-4">O Diagnóstico</h2>
    <h3 className="text-5xl md:text-6xl font-extrabold text-white mb-16 leading-tight">
      Seu time perde tempo <br />com quem não vai comprar?
    </h3>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {[
        { icon: <UserX className="text-orange-500" size={32} />, title: "Leads Curiosos", desc: "Gente que só quer preço e toma tempo do vendedor." },
        { icon: <ThermometerSnowflake className="text-orange-500" size={32} />, title: "Lead Frio", desc: "Pessoas que ainda não entenderam o valor do que você vende." },
        { icon: <Clock className="text-orange-500" size={32} />, title: "Esforço Inútil", desc: "Vendedores qualificados fazendo trabalho de triagem manual." },
        { icon: <Ban className="text-orange-500" size={32} />, title: "Falta de Intenção", desc: "O lead chega sem saber por que está falando com você." },
      ].map((item, idx) => (
        <div key={idx} className="flex items-start gap-4 group">
          <div className="mt-1 p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-orange-500/50 transition-colors">
            {item.icon}
          </div>
          <div>
            <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
            <p className="text-white/50">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Slide2;
