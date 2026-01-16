
import React from 'react';
import { XCircle, CheckCircle } from 'lucide-react';
import { SlideProps } from '../../types';

const Slide6: React.FC<SlideProps> = () => (
  <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-12">
    <div className="md:w-1/2">
      <h2 className="text-orange-500 text-lg font-bold uppercase tracking-widest mb-6">Transparência Total</h2>
      <h3 className="text-5xl md:text-6xl font-black text-white leading-tight mb-8">
        O que eu <span className="text-orange-500">NÃO</span> faço.
      </h3>
      <p className="text-xl text-white/50 leading-relaxed">
        Não sou uma agência de posts. Não sou seu vendedor. <br/>
        <span className="text-white font-bold">Eu sou o engenheiro que constrói o terreno para sua venda ser mais fácil.</span>
      </p>
    </div>
    
    <div className="md:w-1/2 space-y-4">
      {[
        "Eu não vendo por você",
        "Eu não substituo seu time",
        "Eu não fico rodando anúncio eterno"
      ].map((text, i) => (
        <div key={i} className="flex items-center gap-4 p-6 border border-white/5 rounded-2xl bg-white/[0.01] opacity-60">
          <XCircle className="text-white/20" size={24} />
          <span className="text-white/40 font-bold uppercase text-sm tracking-widest">{text}</span>
        </div>
      ))}
      <div className="bg-orange-500 p-8 rounded-3xl text-black mt-6">
        <CheckCircle size={32} className="mb-4" />
        <p className="text-xl font-black leading-tight uppercase">Eu preparo o terreno para que o cliente chegue consciente e o pós-venda gere LTV.</p>
      </div>
    </div>
  </div>
);

export default Slide6;
