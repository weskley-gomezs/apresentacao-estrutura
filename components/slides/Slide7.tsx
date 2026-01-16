
import React from 'react';
import { Timer, TrendingUp, Users, ShieldCheck, MessageCircle } from 'lucide-react';
import { SlideProps } from '../../types';

const Slide7: React.FC<SlideProps> = () => (
  <div className="max-w-5xl w-full text-center">
    <h3 className="text-5xl md:text-7xl font-black text-white mb-16">
      RESULTADO <span className="text-orange-500">PRÁTICO</span>
    </h3>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
      {[
        { icon: <Timer size={48} />, title: "Menos Tempo", text: "Fim do tempo perdido com curiosos." },
        { icon: <TrendingUp size={48} />, title: "Conversão", text: "Aumento real na taxa de fechamento." },
        { icon: <Users size={48} />, title: "Mesmo Time", text: "Venda mais sem precisar contratar." },
        { icon: <ShieldCheck size={48} />, title: "Previsibilidade", text: "Sem depender de sorte no dia." },
      ].map((item, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <div className="text-orange-500 mb-6">{item.icon}</div>
          <h4 className="text-2xl font-black text-white mb-2 uppercase tracking-tighter">{item.title}</h4>
          <p className="text-white/40 text-sm">{item.text}</p>
        </div>
      ))}
    </div>
    
    <a 
      href="https://wa.me/5561981535040?text=Quero um processo previsível de vendas sem aumentar meu time."
      target="_blank"
      rel="noopener noreferrer"
      className="bg-orange-500 hover:bg-orange-600 text-black py-6 px-12 rounded-full font-black text-2xl uppercase tracking-tighter transition-all hover:scale-105 flex items-center gap-4 mx-auto w-fit shadow-[0_10px_40px_rgba(249,115,22,0.3)]"
    >
      <MessageCircle size={28} /> QUERO ESSE RESULTADO
    </a>
  </div>
);

export default Slide7;
