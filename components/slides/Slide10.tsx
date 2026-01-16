
import React from 'react';
import { MessageCircle, ArrowUpRight } from 'lucide-react';
import { SlideProps } from '../../types';

const Slide10: React.FC<SlideProps> = ({ isActive }) => (
  <div className={`max-w-4xl w-full text-center flex flex-col items-center transition-all duration-1000 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
    <h3 className="text-4xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter">
      VENDA MAIS <br />
      <span className="text-orange-500">COM O MESMO TIME.</span>
    </h3>
    <p className="text-xl md:text-2xl text-white/40 mb-12 font-medium">
      A estrutura que separa o amadorismo do crescimento previsível.
    </p>
    
    <div className="mt-8 space-y-8 flex flex-col items-center">
      <a 
        href="https://wa.me/5561981535040?text=Quero ver como vender mais com o mesmo time e sair do improviso."
        target="_blank"
        rel="noopener noreferrer"
        className="bg-orange-500 hover:bg-orange-600 text-black font-black py-8 px-12 rounded-full text-2xl md:text-3xl uppercase tracking-tighter flex items-center gap-4 transition-all hover:scale-105 active:scale-95 shadow-[0_0_60px_rgba(249,115,22,0.4)] group"
      >
        MONTAR MINHA ESTRUTURA <ArrowUpRight size={32} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </a>
      
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-3 bg-white/5 border border-white/10 py-3 px-6 rounded-full">
           <MessageCircle className="text-orange-500" size={20} />
           <span className="text-white font-bold text-lg">(61) 98153-5040</span>
        </div>
        <p className="text-white/30 font-bold tracking-widest uppercase text-[10px] mt-4">
          Toque para agendar sua consultoria gratuita
        </p>
      </div>
    </div>
  </div>
);

export default Slide10;
