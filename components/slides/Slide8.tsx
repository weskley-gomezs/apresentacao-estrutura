
import React from 'react';
import { School, CheckCircle2, XCircle } from 'lucide-react';
import { SlideProps } from '../../types';

const Slide8: React.FC<SlideProps> = ({ isActive }) => (
  <div className={`max-w-5xl w-full transition-all duration-1000 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
    <h2 className="text-orange-500 text-center text-xl font-bold uppercase tracking-[0.4em] mb-16">SUA ESCOLA ESTÁ PRONTA?</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="bg-white/[0.02] p-10 rounded-3xl border border-white/5">
        <h4 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
          <CheckCircle2 className="text-orange-500" /> PERFEITO SE:
        </h4>
        <ul className="space-y-6 text-white/60 text-lg">
          <li>• Deseja aumentar o LTV (tempo de vida do aluno).</li>
          <li>• Sofre com evasão escolar alta ou injustificada.</li>
          <li>• Busca escala sem perder a qualidade no trato com pais.</li>
          <li>• Acredita na tecnologia como ponte, não como muro.</li>
        </ul>
      </div>

      <div className="bg-white/[0.01] p-10 rounded-3xl border border-white/5 opacity-50">
        <h4 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
          <XCircle className="text-white/30" /> NÃO É SE:
        </h4>
        <ul className="space-y-6 text-white/30 text-lg">
          <li>• Você vê o aluno apenas como uma parcela mensal.</li>
          <li>• Não está disposto a ouvir o que as famílias dizem.</li>
          <li>• Acredita que o processo pedagógico basta para reter.</li>
          <li>• Quer resultados imediatos sem mudança de cultura.</li>
        </ul>
      </div>
    </div>
  </div>
);

export default Slide8;
