
import React from 'react';
import { Filter, Flame, BookOpen, Target } from 'lucide-react';
import { SlideProps } from '../../types';

const Slide4: React.FC<SlideProps> = () => (
  <div className="max-w-6xl w-full">
    <h2 className="text-orange-500 text-lg font-bold uppercase tracking-widest mb-6">Meu Método</h2>
    <h3 className="text-5xl md:text-6xl font-black text-white leading-tight mb-12">
      Eu entro <span className="text-orange-500 italic">antes</span> da venda.
    </h3>
    
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {[
        { icon: <Filter />, title: "Filtro", desc: "Separo quem presta de quem não presta." },
        { icon: <Flame />, title: "Aquecimento", desc: "Transformo o lead morno em interessado." },
        { icon: <BookOpen />, title: "Educação", desc: "Crio contexto e intenção de compra." },
        { icon: <Target />, title: "Entrega", desc: "Passo o bastão para o seu time fechar." },
      ].map((item, idx) => (
        <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-2xl">
          <div className="text-orange-500 mb-4">{React.cloneElement(item.icon as React.ReactElement, { size: 32 })}</div>
          <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
          <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Slide4;
