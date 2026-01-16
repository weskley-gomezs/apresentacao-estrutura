
import React from 'react';
import { SlideProps } from '../../types';
import { CheckCircle2, XCircle } from 'lucide-react';

const Slide3: React.FC<SlideProps> = ({ isActive }) => (
  <div className={`max-w-5xl w-full text-center flex flex-col items-center transition-all duration-1000 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
    <div className="text-orange-500 font-black text-[10px] md:text-sm tracking-[0.6em] uppercase mb-6 md:mb-8 opacity-50">O IMPACTO NO NEGÓCIO</div>
    <h3 className="text-3xl sm:text-5xl md:text-7xl font-black text-white leading-[1.1] mb-8 md:mb-12">
      O Caos vs <span className="text-orange-500 italic">O Método LTV</span>
    </h3>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full text-left">
      <div className="bg-white/5 border border-white/5 p-6 md:p-10 rounded-2xl md:rounded-[2rem] space-y-4 md:space-y-6">
        <h4 className="text-lg md:text-2xl font-black text-white/30 flex items-center gap-3">
          <XCircle className="text-red-500/50" size={20} /> SITUAÇÃO ATUAL
        </h4>
        <ul className="space-y-2 md:space-y-4 text-sm md:text-base">
          <li className="text-white/40 font-medium">• Contato apenas para cobranças</li>
          <li className="text-white/40 font-medium">• Reclamações viram ruídos públicos</li>
          <li className="text-white/40 font-medium">• Cliente te compara por preço</li>
          <li className="text-white/40 font-medium">• Vendas internas são um sacrifício</li>
        </ul>
      </div>

      <div className="bg-orange-500/10 border border-orange-500/20 p-6 md:p-10 rounded-2xl md:rounded-[2rem] space-y-4 md:space-y-6">
        <h4 className="text-lg md:text-2xl font-black text-orange-500 flex items-center gap-3">
          <CheckCircle2 size={20} /> COM NOSSA ESTRUTURA
        </h4>
        <ul className="space-y-2 md:space-y-4 text-sm md:text-base">
          <li className="text-white font-bold">• Educação contínua e valor percebido</li>
          <li className="text-white font-bold">• Ruídos viram alinhamento preventivo</li>
          <li className="text-white font-bold">• Você se torna referência na comunidade</li>
          <li className="text-white font-bold">• Indicação natural e renovação fácil</li>
        </ul>
      </div>
    </div>
  </div>
);

export default Slide3;
