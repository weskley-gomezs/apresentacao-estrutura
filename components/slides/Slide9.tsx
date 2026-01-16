
import React from 'react';
import { CheckCircle2, ShieldAlert } from 'lucide-react';
import { SlideProps } from '../../types';

const Slide9: React.FC<SlideProps> = ({ isActive }) => (
  <div className={`max-w-5xl w-full transition-all duration-1000 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
    <h2 className="text-orange-500 text-center text-sm md:text-xl font-bold uppercase tracking-[0.4em] mb-8 md:mb-16">PERFIL DE PARCEIRO</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
      <div className="bg-white/[0.02] p-6 md:p-10 rounded-2xl md:rounded-3xl border border-white/5">
        <h4 className="text-xl md:text-2xl font-black text-white mb-6 md:mb-8 flex items-center gap-3">
          <CheckCircle2 className="text-orange-500" size={24} /> É PARA VOCÊ SE:
        </h4>
        <ul className="space-y-4 md:space-y-6 text-white/60 text-base md:text-lg font-medium">
          <li>• Já tem clientes, mas o pós-venda é desorganizado.</li>
          <li>• O time comercial reclama de leads ruins.</li>
          <li>• Você quer escala sem perder o toque pessoal.</li>
          <li>• Entende que confiança é o maior ativo.</li>
        </ul>
      </div>

      <div className="bg-white/[0.01] p-6 md:p-10 rounded-2xl md:rounded-3xl border border-white/5 opacity-50">
        <h4 className="text-xl md:text-2xl font-black text-white mb-6 md:mb-8 flex items-center gap-3">
          <ShieldAlert className="text-white/30" size={24} /> NÃO É PARA VOCÊ SE:
        </h4>
        <ul className="space-y-4 md:space-y-6 text-white/30 text-base md:text-lg font-medium">
          <li>• Busca uma "fórmula mágica" sem mudar processos.</li>
          <li>• Só se importa com o volume de vendas de hoje.</li>
          <li>• Não está disposto a educar o seu mercado.</li>
          <li>• Prefere queimar dinheiro em tráfego frio.</li>
        </ul>
      </div>
    </div>
  </div>
);

export default Slide9;
