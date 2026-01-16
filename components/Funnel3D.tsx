
import React, { useState, useEffect } from 'react';

const Funnel3D: React.FC = () => {
  const [scrollIntensity, setScrollIntensity] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      setScrollIntensity(prev => Math.min(prev + Math.abs(e.deltaY) * 0.05, 100));
      const timeout = setTimeout(() => setScrollIntensity(0), 1000);
      return () => clearTimeout(timeout);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('wheel', handleWheel);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Partículas com propriedades variadas para efeito orgânico
  const particles = [
    { id: 1, cx: 100, delay: '0s', duration: '2.5s', size: 3 },
    { id: 2, cx: 80, delay: '0.8s', duration: '3s', size: 2 },
    { id: 3, cx: 120, delay: '1.5s', duration: '2.2s', size: 4 },
    { id: 4, cx: 90, delay: '2.2s', duration: '3.5s', size: 2.5 },
    { id: 5, cx: 110, delay: '0.4s', duration: '2.8s', size: 3.5 },
  ];

  return (
    <div 
      className="fixed bottom-10 left-10 w-32 md:w-48 z-20 pointer-events-none select-none hidden md:block transition-transform duration-700 ease-out"
      style={{ 
        transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px) rotateX(${mousePos.y * -0.2}deg) rotateY(${mousePos.x * 0.2}deg)`,
        opacity: 0.3 + (scrollIntensity * 0.005)
      }}
    >
      <svg viewBox="0 0 200 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="overflow-visible">
        {/* Glow de fundo reativo */}
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="15" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          
          <linearGradient id="grad-funnel" x1="100" y1="40" x2="100" y2="220" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F97316" stopOpacity={0.4 + (scrollIntensity * 0.002)} />
            <stop offset="1" stopColor="#7C2D12" stopOpacity="0" />
          </linearGradient>

          <style>
            {`
              @keyframes lead-fall {
                0% { transform: translateY(-20px); opacity: 0; }
                20% { opacity: 1; }
                80% { opacity: 0.8; }
                100% { transform: translateY(200px); opacity: 0; }
              }
              .particle {
                animation: lead-fall linear infinite;
              }
              .funnel-stroke {
                stroke-dasharray: 400;
                stroke-dashoffset: 400;
                animation: dash 10s linear infinite;
              }
              @keyframes dash {
                to { stroke-dashoffset: 0; }
              }
            `}
          </style>
        </defs>

        {/* Efeito de Aura no Scroll */}
        <ellipse 
          cx="100" cy="40" rx="90" ry="35" 
          fill="#F97316" 
          fillOpacity={0.05 + (scrollIntensity * 0.001)} 
          filter="url(#glow)" 
        />

        {/* Boca do Funil */}
        <ellipse 
          cx="100" cy="40" rx="80" ry="30" 
          stroke="#F97316" 
          strokeWidth="2" 
          fill="rgba(249,115,22,0.1)"
        />
        
        {/* Corpo do Funil */}
        <path 
          d="M20 40L85 220H115L180 40C180 40 160 70 100 70C40 70 20 40 20 40Z" 
          fill="url(#grad-funnel)" 
          stroke="#F97316" 
          strokeWidth="1" 
          strokeOpacity="0.3"
        />

        {/* Camadas Internas (Filtros) */}
        <ellipse cx="100" cy="100" rx="55" ry="15" stroke="#F97316" strokeWidth="0.5" strokeOpacity="0.4" fill="rgba(249,115,22,0.05)" />
        <ellipse cx="100" cy="160" rx="30" ry="8" stroke="#F97316" strokeWidth="0.5" strokeOpacity="0.6" fill="rgba(249,115,22,0.1)" />

        {/* Fluxo de Partículas (Leads) */}
        {particles.map((p) => (
          <circle 
            key={p.id}
            cx={p.cx}
            r={p.size}
            fill="white"
            className="particle"
            style={{
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}

        {/* Saída Qualificada */}
        <ellipse cx="100" cy="220" rx="15" ry="5" fill="#F97316" />
        <g className="animate-pulse">
           <path d="M100 220V260" stroke="#F97316" strokeWidth="3" strokeLinecap="round" strokeDasharray="5 5" />
           <circle cx="100" cy="270" r="4" fill="#F97316" fillOpacity="0.8" />
        </g>
      </svg>
      
      <div className="text-center mt-4 transition-all duration-300">
        <div className="h-px w-12 bg-orange-500/30 mx-auto mb-2"></div>
        <span className="text-[9px] font-black text-orange-500/60 uppercase tracking-[0.3em] block">
          Processamento <br/> em Tempo Real
        </span>
      </div>
    </div>
  );
};

export default Funnel3D;
