
import React from 'react';
import { MessageSquare, Bot, FileText, ArrowRight } from 'lucide-react';
import { SlideProps } from '../../types';

const Slide5: React.FC<SlideProps> = ({ isActive }) => (
  <div className={`max-w-5xl w-full transition-all duration-1000 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
    <h2 className="text-orange-500 text-lg font-bold uppercase tracking-widest mb-10 text-center">NOSSAS FERRAMENTAS</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      <div className="flex flex-col items-center text-center p-6 bg-white/[0.02] rounded-3xl border border-white/5">
        <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center text-orange-500 mb-6">
          <FileText size={32} />
        </div>
        <h4 className="text-2xl font-black text-white mb-2">Conteúdo Estratégico</h4>
        <p className="text-white/40">Educação que eleva a consciência do cliente e reduz dúvidas recorrentes.</p>
      </div>
      <div className="flex flex-col items-center text-center p-6 bg-white/[0.02] rounded-3xl border border-white/5">
        <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center text-orange-500 mb-6">
          <Bot size={32} />
        </div>
        <h4 className="text-2xl font-black text-white mb-2">Automação Inteligente</h4>
        <p className="text-white/40">WhatsApp e Instagram rodando 24/7 com processos de comunicação claros.</p>
      </div>
      <div className="flex flex-col items-center text-center p-6 bg-white/[0.02] rounded-3xl border border-white/5">
        <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center text-orange-500 mb-6">
          <MessageSquare size={32} />
        </div>
        <h4 className="text-2xl font-black text-white mb-2">Relacionamento 360</h4>
        <p className="text-white/40">Acompanhamento antes, durante e depois da venda para gerar recorrência.</p>
      </div>
    </div>

    <div className="flex justify-center">
      <p className="text-orange-500 font-black text-xl italic uppercase tracking-widest">Quem educa, retém. Quem retém, cresce.</p>
    </div>
  </div>
);

export default Slide5;
