
import React from 'react';
import { TrendingDown, Users, AlertCircle, HeartCrack } from 'lucide-react';
import { SlideProps } from '../../types';

const Slide2: React.FC<SlideProps> = ({ isActive }) => (
  <div className={`max-w-5xl w-full transition-all duration-1000 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
    <h2 className="text-orange-500 text-lg font-bold uppercase tracking-[0.3em] mb-4">O VAZAMENTO SILENCIOSO</h2>
    <h3 className="text-5xl md:text-6xl font-black text-white mb-16 leading-tight">
      Sua empresa está perdendo <br/>clientes pela porta dos fundos?
    </h3>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {[
        { icon: <TrendingDown size={32} />, title: "Miopia da Captação", desc: "Focar 100% em trazer leads novos e esquecer de educar quem já paga sua conta." },
        { icon: <HeartCrack size={32} />, title: "Perda de Confiança", desc: "Sem comunicação, o cliente (ou pai) se sente apenas um número. Ele vai embora por qualquer real a menos." },
        { icon: <AlertCircle size={32} />, title: "Custo de Aquisição (CAC)", desc: "É 7x mais caro atrair um novo do que manter um atual. Você está jogando margem fora." },
        { icon: <Users size={32} />, title: "Indicação Zero", desc: "Quem não é bem atendido no pós-venda não indica. Você morre dependendo de anúncios caros." },
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
