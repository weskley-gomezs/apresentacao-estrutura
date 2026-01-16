
import React from 'react';
import { UserMinus, ZapOff, Clock, AlertCircle } from 'lucide-react';
import { SlideProps } from '../../types';

const Slide2: React.FC<SlideProps> = ({ isActive }) => (
  <div className={`max-w-5xl w-full transition-all duration-1000 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
    <h2 className="text-orange-500 text-lg font-bold uppercase tracking-[0.3em] mb-4">O DIAGNÓSTICO</h2>
    <h3 className="text-5xl md:text-6xl font-black text-white mb-16 leading-tight">
      Sua empresa está <br/>queimando dinheiro?
    </h3>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {[
        { icon: <UserMinus size={32} />, title: "Vendedores Desmotivados", desc: "Seu melhor talento perdendo tempo com leads que só querem 'saber o preço'." },
        { icon: <ZapOff size={32} />, title: "Lead Frio no WhatsApp", desc: "O marketing gera volume, mas o comercial não consegue converter o caos." },
        { icon: <Clock size={32} />, title: "Resposta Lenta", desc: "Leads esfriam em minutos. Sem estrutura, você nunca responde a tempo." },
        { icon: <AlertCircle size={32} />, title: "Venda no Improviso", desc: "Cada vendedor atende de um jeito. Sem padrão, não há escala." },
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
