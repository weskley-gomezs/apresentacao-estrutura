
import React from 'react';
import { CheckCircle2, MessageSquare } from 'lucide-react';
import { SlideProps } from '../../types';

const Slide6: React.FC<SlideProps> = () => (
  <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-12">
    <div className="md:w-1/2">
      <h2 className="text-orange-500 text-lg font-bold uppercase tracking-widest mb-6">O Novo Papel do Time</h2>
      <h3 className="text-5xl md:text-6xl font-black text-white leading-tight mb-8">
        Seu vendedor só faz o que <span className="text-orange-500">sabe: Fechar.</span>
      </h3>
      <p className="text-xl text-white/50 leading-relaxed">
        Chega de "alô, você conhece nossa empresa?". Quando o lead chega no WhatsApp, ele já quer comprar.
      </p>
    </div>
    
    <div className="md:w-1/2 space-y-4">
      <div className="bg-orange-500 p-8 rounded-3xl text-black">
        <MessageSquare size={48} className="mb-4" />
        <p className="text-2xl font-black leading-tight">"Vi todo o conteúdo, entendi como funciona e quero saber o próximo passo."</p>
        <p className="mt-4 font-bold opacity-70 uppercase text-sm italic">— O lead qualificado pela estrutura</p>
      </div>
      <div className="flex items-center gap-4 p-6 border border-white/10 rounded-2xl bg-white/5">
        <CheckCircle2 className="text-orange-500" size={24} />
        <span className="text-white font-bold">Time focado em conversão, não em triagem.</span>
      </div>
    </div>
  </div>
);

export default Slide6;
