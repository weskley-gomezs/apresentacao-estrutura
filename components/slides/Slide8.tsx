
import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import { SlideProps } from '../../types';

const Slide8: React.FC<SlideProps> = ({ isActive }) => (
  <div className={`max-w-5xl w-full transition-all duration-1000 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
    <h2 className="text-orange-500 text-center text-xl font-bold uppercase tracking-[0.4em] mb-16">PARA QUEM É?</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="bg-white/[0.02] p-10 rounded-3xl border border-white/5">
        <h4 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
          <CheckCircle2 className="text-orange-500" /> PERFEITO SE:
        </h4>
        <ul className="space-y-6 text-white/60 text-lg">
          <li>• Já gera leads, mas a conversão é baixa.</li>
          <li>• Tem um time comercial de pelo menos 1 pessoa.</li>
          <li>• O dono ainda precisa "ajudar" nas vendas.</li>
          <li>• Quer escalar sem aumentar o custo fixo.</li>
        </ul>
      </div>

      <div className="bg-white/[0.01] p-10 rounded-3xl border border-white/5 opacity-50">
        <h4 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
          <XCircle className="text-white/30" /> NÃO É SE:
        </h4>
        <ul className="space-y-6 text-white/30 text-lg">
          <li>• Você ainda não tem nenhum lead chegando.</li>
          <li>• Busca uma "fórmula mágica" sem esforço.</li>
          <li>• Acredita que marketing resolve produto ruim.</li>
          <li>• Não quer investir em processos profissionais.</li>
        </ul>
      </div>
    </div>
  </div>
);

export default Slide8;
