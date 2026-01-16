
import React from 'react';
import { SlideProps } from '../../types';

const Slide8: React.FC<SlideProps> = ({ isActive }) => (
  <div className={`max-w-5xl w-full text-center space-y-12 transition-all duration-1000 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
    <div className="text-orange-500 font-black text-sm tracking-[0.6em] uppercase mb-8">O Princípio Imutável</div>
    
    <h3 className="text-5xl md:text-7xl font-black text-white leading-tight">
      Eu não ajudo empresas <br />
      a vender <span className="text-white/30 italic">mais uma vez.</span>
    </h3>
    
    <div className="bg-orange-500 text-black p-10 rounded-[4rem] inline-block transform -rotate-1">
      <h4 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
        Eu ajudo a vender mais vezes <br/>para o mesmo cliente.
      </h4>
    </div>
    
    <p className="text-2xl text-white/50 max-w-3xl mx-auto leading-relaxed pt-8 font-light italic">
      "Se você sente que seu negócio perde dinheiro no relacionamento, <br/>
      você tem um erro de processo, não de sorte."
    </p>
  </div>
);

export default Slide8;
