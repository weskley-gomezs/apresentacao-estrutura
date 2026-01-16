
import React from 'react';
import { TrendingUp } from 'lucide-react';
import { SlideProps } from '../../types';

const Slide8: React.FC<SlideProps> = () => (
  <div className="max-w-5xl w-full text-center">
    <div className="inline-block p-4 bg-orange-500/10 border border-orange-500/20 rounded-xl mb-8">
      <TrendingUp className="text-orange-500" size={40} />
    </div>
    <h3 className="text-4xl md:text-6xl font-black text-white leading-tight mb-12">
      Empresas que crescem não contratam <span className="text-orange-500">vendedores primeiro.</span>
    </h3>
    <p className="text-2xl md:text-4xl font-light text-white/70 max-w-4xl mx-auto leading-relaxed">
      Elas <span className="text-white font-black underline decoration-orange-500">organizam o caminho</span> até a venda. O time comercial só acelera o que já está pronto.
    </p>
    <div className="mt-16 flex justify-center gap-4">
      <div className="h-1 w-20 bg-orange-500"></div>
      <div className="h-1 w-4 bg-white/20"></div>
      <div className="h-1 w-4 bg-white/20"></div>
    </div>
  </div>
);

export default Slide8;
