
import React from 'react';
import { SlideProps } from '../../types';

const Slide8: React.FC<SlideProps> = ({ isActive }) => (
  <div className={`max-w-5xl w-full text-center space-y-8 md:space-y-12 transition-all duration-1000 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
    <div className="text-orange-500 font-black text-[10px] md:text-sm tracking-[0.6em] uppercase mb-4 md:mb-8">O Princípio Imutável</div>
    
    <h3 className="text-3xl sm:text-5xl md:text-7xl font-black text-white leading-tight">
      Eu não ajudo empresas <br className="hidden sm:block" />
      a vender <span className="text-white/30 italic">mais uma vez.</span>
    </h3>
    
    <div className="bg-orange-500 text-black p-6 md:p-10 rounded-2xl md:rounded-[4rem] inline-block transform -rotate-1 mx-4">
      <h4 className="text-xl sm:text-3xl md:text-5xl font-black uppercase tracking-tighter">
        Eu ajudo a vender mais vezes <br className="hidden sm:block" />para o mesmo cliente.
      </h4>
    </div>
    
    <p className="text-lg md:text-2xl text-white/50 max-w-3xl mx-auto leading-relaxed pt-4 md:pt-8 font-light italic px-4">
      "Se você sente que seu negócio perde dinheiro no relacionamento, <br className="hidden md:block" />
      você tem um erro de processo, não de sorte."
    </p>
  </div>
);

export default Slide8;
