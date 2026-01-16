
import React from 'react';
import { XCircle, CheckCircle } from 'lucide-react';
import { SlideProps } from '../../types';

const Slide6: React.FC<SlideProps> = ({ isActive }) => (
  <div className={`max-w-5xl w-full flex flex-col lg:flex-row items-start lg:items-center gap-8 md:gap-12 transition-all duration-1000 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
    <div className="w-full lg:w-1/2">
      <h2 className="text-orange-500 text-sm md:text-lg font-bold uppercase tracking-widest mb-4 md:mb-6">Transparência Total</h2>
      <h3 className="text-3xl sm:text-4xl md:text-6xl font-black text-white leading-tight mb-4 md:mb-8">
        O que eu <span className="text-orange-500">NÃO</span> faço.
      </h3>
      <p className="text-base md:text-xl text-white/50 leading-relaxed">
        Não sou uma agência de posts. Não sou seu vendedor. <br className="hidden md:block" />
        <span className="text-white font-bold">Eu sou o engenheiro que constrói o terreno para sua venda ser mais fácil.</span>
      </p>
    </div>
    
    <div className="w-full lg:w-1/2 space-y-3 md:space-y-4">
      {[
        "Eu não vendo por você",
        "Eu não substituo seu time",
        "Eu não fico rodando anúncio eterno"
      ].map((text, i) => (
        <div key={i} className="flex items-center gap-3 md:gap-4 p-4 md:p-6 border border-white/5 rounded-xl md:rounded-2xl bg-white/[0.01] opacity-60">
          <XCircle className="text-white/20" size={20} md:size={24} />
          <span className="text-white/40 font-bold uppercase text-[10px] md:text-sm tracking-widest">{text}</span>
        </div>
      ))}
      <div className="bg-orange-500 p-6 md:p-8 rounded-2xl md:rounded-3xl text-black mt-4">
        <CheckCircle size={24} className="mb-2 md:mb-4" />
        <p className="text-lg md:text-xl font-black leading-tight uppercase">Eu preparo o terreno para que o cliente chegue consciente e o pós-venda gere LTV.</p>
      </div>
    </div>
  </div>
);

export default Slide6;
